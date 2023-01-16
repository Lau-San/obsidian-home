---
obsidianEditingMode: live
obsidianUIMode: preview
tags:
  - games/pokemon/pokemon
  - TOC
---
%%
date:: [[2022-11-24]]
parents:: [[Pokémon]]
%%

# [[Pokémon (Monsters)]]

**Pokémon Count**: `$=dv.pages('#games/pokemon/pokemon').length`

## All Pokémon

```dataviewjs
const {Pokemon} = customJS
const deps = {dv}

const allPokemon = Pokemon.getAllPokemon(deps)

dv.table(
	['Pokémon', 'Type'],
	allPokemon.map(b => [b.file.link, b.type])
)
```
