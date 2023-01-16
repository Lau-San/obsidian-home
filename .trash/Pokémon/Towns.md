---
obsidianEditingMode: live
obsidianUIMode: preview
tags:
  - games/pokemon/world/towns
  - TOC
---
%%
date:: [[2022-11-25]]
parents:: [[Pokémon]]
%%
bulbapedia:: [Bulbapedia Page]()

# [[Towns]]

```dataviewjs
const {Pokemon} = customJS
const deps = {dv}
const regionNames = Pokemon.getAllRegions(deps).file.name

for (let region of regionNames) {
	const regionTowns = Pokemon.getTownsInRegion(region, deps)
	const regionLink = dv.fileLink('/Pokémon/Wiki/World/Regions/' + region)
	dv.header(2, regionLink)
	dv.list(regionTowns.file.link)
}
```