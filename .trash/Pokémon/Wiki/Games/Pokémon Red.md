---
obsidianEditingMode: live
obsidianUIMode: preview
tags:
  - games/pokemon/games
---
%%
date:: [[2022-11-17]] [[2022-11-28]]
parents:: [[Main Pokémon Games]]
%%

# [[Pokémon Red]]

**region**:: [[Kanto]]
**home-town**:: [[Pallet Town]]
**starter-pokemon**:: [[Charmander]], [[Bulbasaur]], [[Squirtle]]

This, along with [[Pokémon Blue]] were the first Pokémon games to be released outside of Japán.

There's a Gameboy version and a GameboyColor version. The difference is obvious: the lack/presence of color.


## Runs

```dataviewjs
const curr = dv.current()

const allRuns = dv.pages('"Pokémon/Runs"')
const gameRuns = allRuns.where(b => {
	const gameName = dv.page(b.game.path).file.name
	return gameName == curr.file.name
})

dv.table(
	['Run', 'Status'],
	gameRuns.map(b => [b.file.link, b.status])
)
```