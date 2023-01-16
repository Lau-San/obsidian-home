class Pokemon {
    /**
     * POKEMON
     * ============
     */

    /**
     * Get a list of all pokemon
     */
    getAllPokemon(deps) {
        const { dv } = deps
        const allPokemon = dv.pages("#games/pokemon/pokemon").where((b) => {
            return !["Pokémon (Monsters)", "pokemon"].contains(b.file.name)
        })
        return allPokemon
    }

    /* Get the pokemon with the specified name */
    getPokemon(name, deps) {
        const allPokemon = this.getAllPokemon(deps)
        const pokemon = allPokemon.where((b) => b.file.name == name)
        return pokemon
    }

    /**
     * MOVES
     * ============
     */

    /**
     * Get a list of all moves
     */
    getAllMoves(deps) {
        const { dv } = deps
        const allMoves = dv.pages("#games/pokemon/moves").where((b) => {
            return b.file.name != "Moves" && b.file.name != "pokemon-move"
        })
        return allMoves
    }

    /**
     * Get a list of all move categories
     */
    getAllMoveCategories(deps) {
        const allMoves = this.getAllMoves(deps)
        const categories = allMoves.category.distinct()
        return categories
    }

    /**
     * Get list all moves of the specified category
     */
    getMovesOfCategory(category, deps) {
        const allMoves = this.getAllMoves(deps)
        const categoryMoves = allMoves.where((b) => b.category == category)
        return categoryMoves
    }

    /**
     * Get all moves of the specified type
     */
    getMovesOfType(type, deps) {
        const { dv } = deps

        const allMoves = this.getAllMoves(deps)
        const typeMoves = allMoves.where((b) => {
            const typePage = dv.page(b.type.path)
            if (!typePage) {
                return b.type.path == type
            }
            return typePage.file.name == type
        })
        return typeMoves
    }

    /**
     * Get a pokemon's leveling up moves
     */
    getPokemonLevelingUpMoves(pokemonName, gen, deps) {
        const { dv } = deps
        const pokemon = this.getPokemon(pokemonName, deps)
        const moves = []
        for (let move of pokemon[`gen${gen}-moves`]) {
            const movePage = dv.page(move.path)
            if (!movePage) {
                continue
            }
            moves.push(movePage)
        }
        return moves
    }

    /**
     * Get a pokemon's TM/HM moves
     */
    getPokemonTMHMMoves(pokemonName, gen, deps) {
        const { dv } = deps
        const pokemon = this.getPokemon(pokemonName, deps)
        const moves = []
        for (let move of pokemon[`gen${gen}-tmhm-moves`]) {
            const movePage = dv.page(move.path)
            if (!movePage) {
                continue
            }
            moves.push(movePage)
        }
        return moves
    }

    /**
     * Display a pokemon's moves
     */
    displayPokemonMoves(pokemonName, deps) {
        const { dv } = deps
        const curr = dv.current()

        const romanGenNumbers = {
            1: "I",
            2: "II",
            3: "III",
            4: "IV",
            5: "V",
            6: "VI",
            7: "VII",
            8: "VIII",
            9: "IX",
        }

        for (let gen = 1; gen <= 9; gen++) {
            if (!curr[`gen${gen}-moves`] && !curr[`gen${gen}-tmhm-moves`]) {
                break
            }
            dv.header(3, `Generation ${romanGenNumbers[gen]}`)

            dv.header(4, "By leveling up")
            const levelingUpMoves = this.getPokemonLevelingUpMoves(
                pokemonName,
                gen,
                deps
            )
            this.createMovesTable(levelingUpMoves, deps)

            dv.header(4, "By TH/HM")
            const tmHmMoves = this.getPokemonTMHMMoves(pokemonName, gen, deps)
            this.createMovesTable(tmHmMoves, deps)
        }
    }

    /**
     * Display the current pokemon's moves
     */
    displayCurrentPokemonMoves(deps) {
        const { dv } = deps
        const curr = dv.current()
        this.displayPokemonMoves(curr.file.name, deps)
    }

    /**
     * Create Moves table
     */
    createMovesTable(moves, deps) {
        const { dv } = deps
        dv.table(
            [
                "Move",
                "Type",
                "Category",
                "PP",
                "Power",
                "Accuracy",
                "Description",
            ],
            moves.map((b) => [
                b.file.link,
                b.type,
                b.category,
                `${b.pp}(${b["max-pp"]})`,
                b.power,
                b.accuracy,
                b.description,
            ])
        )
    }

    /**
     * TYPES
     * ============
     */

    /**
     * Get a list of all types
     */
    getAllTypes(deps) {
        const { dv } = deps
        const types = dv.pages("#games/pokemon/types").file.name
        return types
    }

    /**
     * REGIONS
     * ============
     */

    /**
     * Get a list of all regions
     */
    getAllRegions(deps) {
        const { dv } = deps
        const regions = dv.pages("#games/pokemon/world/regions").where((b) => {
            return !["Regions", "pokemon-region"].contains(b.file.name)
        })
        return regions
    }

    isInRegion(place, regionName, deps) {
        const { dv } = deps
        const regionPage = dv.page(place.region.path)
        if (!regionPage) {
            return false
        }
        return regionPage.file.name == regionName
    }

    /**
     * TOWNS
     * ============
     */

    getAllTowns(deps) {
        const { dv } = deps
        const towns = dv.pages("#games/pokemon/world/towns").where((b) => {
            return !["Towns", "pokemon-town"].contains(b.file.name)
        })
        return towns
    }

    getTownsInRegion(region, deps) {
        const allTowns = this.getAllTowns(deps)
        const regionTowns = allTowns.where((b) =>
            this.isInRegion(b, region, deps)
        )
        return regionTowns
    }

    getTownsInCurrentRegion(deps) {
        const { dv } = deps
        const region = dv.current().file.name
        const towns = this.getTownsInRegion(region, deps)
        return towns
    }

    displayTownsInCurrentRegion(deps, headerLevel = 2) {
        const { dv } = deps
        const towns = this.getTownsInCurrentRegion(deps)
        dv.header(headerLevel, "Towns")
        dv.table(
            ["Town", "Location"],
            towns.map((b) => {
                const image = dv.fileLink(b["map-location"].path, true)
                return [b.file.link, image]
            })
        )
    }

    /**
     * ROUTES
     * ============
     */

    getAllRoutes(deps) {
        const { dv } = deps
        const routes = dv.pages("#games/pokemon/world/routes").where((b) => {
            return !["Routes", "pokemon-route"].containe(b.file.name)
        })
        return routes
    }

    getRoutesInRegion(region, deps) {
        const allRoutes = this.getAllRoutes(deps)
        const regionRoutes = allRoutes.where((b) =>
            this.isInRegion(b, region, deps)
        )
        return regionRoutes
    }

    getRoutesInCurrentRegion(deps) {
        const { dv } = deps
        const region = dv.current().file.name
        const routes = this.getRoutesInRegion(region, deps)
        return routes
    }

    /**
     * CAVES
     * ============
     */

    getAllCaves(deps) {
        const { dv } = deps
        const caves = dv.pages("#games/pokemon/world/caves").where((b) => {
            return !["Caves", "pokemon-cave"].contains(b.file.name)
        })
        return caves
    }

    getCavesInRegion(region, deps) {
        const allCaves = this.getAllCaves(deps)
        const regionCaves = allCaves.where((b) =>
            this.isInRegion(b, region, deps)
        )
        return regionCaves
    }

    getCavesInCurrentRegion(deps) {
        const { dv } = deps
        const region = dv.current().file.name
        const caves = this.getCavesInRegion(region, deps)
        return caves
    }

    /**
     * FORESTS
     * ============
     */

    getAllForests(deps) {
        const { dv } = deps
        const forests = dv.pages("#games/pokemon/world/forests").where((b) => {
            return !["Forests", "pokemon-forest"].contains(b.file.name)
        })
        return forests
    }

    getForestsInRegion(region, deps) {
        const allForests = this.getAllForests(deps)
        const regionForests = allForests.where((b) =>
            this.isInRegion(b, region, deps)
        )
        return regionForests
    }

    getForestsInCurrentRegion(deps) {
        const { dv } = deps
        const region = dv.current().file.name
        const forests = this.getForestsInRegion(region, deps)
        return forests
    }

    /**
     * LANDMARKS
     * ============
     */

    getAllLandmarks(deps) {
        const { dv } = deps
        const landmarks = dv
            .pages("#games/pokemon/world/landmarks")
            .where((b) => {
                return !["Landmarks", "pokemon-landmark"].cantains(b.file.name)
            })
        return landmarks
    }

    getLandmarksInRegion(region, deps) {
        const allLandmarks = this.getAllLandmarks(deps)
        const regionLandmarks = allLandmarks.where((b) =>
            this.isInRegion(b, region, deps)
        )
        return regionLandmarks
    }

    getLandmarksInCurrentRegion(deps) {
        const { dv } = deps
        const region = dv.current().file.name
        const landmarks = this.getLandmarksInRegion(region, deps)
        return landmarks
    }

    /**
     * PLACES OF INTEREST
     * ============
     */

    getPlacesOfInterest(location, deps) {
        const { dv } = deps
        const places = dv.pages("#games/pokemon/world/other").where((b) => {
            return !["pokemon-place"].contains(b.file.name)
        })

        const placesOfInterest = places.where((b) => {
            if (dv.isArray(b.location)) {
                const locationNames = b.location.map((l) => {
                    const locationPage = dv.page(l.path)

                    if (!locationPage) return

                    return locationPage.file.name
                })
                return locationNames && locationNames.contains(location)
            } else {
                const locationPage = dv.page(b.location.path)

                if (!locationPage) return false

                const locationName = locationPage.file.name
                return locationName && locationName == location
            }
        })
        return placesOfInterest
    }

    getPlacesOfInterestAtCurrentLocation(deps) {
        const { dv } = deps
        const location = dv.current().file.name
        const places = this.getPlacesOfInterest(location, deps)
        return places
    }

    displayPlacesOfInterestAtCurrentLocation(deps, headerLevel = 2) {
        const { dv } = deps
        const places = this.getPlacesOfInterestAtCurrentLocation(deps)
        dv.header(headerLevel, "Places of Interest")
        dv.table(
            ["Place", "Description"],
            places.map((b) => [b.file.link, b.description])
        )
    }
}
