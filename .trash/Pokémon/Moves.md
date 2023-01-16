---
obsidianEditingMode: live
obsidianUIMode: preview
tags:
  - games/pokemon/moves
  - TOC
  - fix-me
---
%%
date:: [[2022-11-17]]
parents:: [[Pokémon]]
%%

# [[Moves]]

## By type

```dataviewjs
const {Pokemon} = customJS
const deps = {dv}

const types = Pokemon.getAllTypes(deps)

for (let type of types) {
	dv.header(3, type)
	const typeMoves = Pokemon.getMovesOfType(type, deps)
	dv.table(
		[
			'Move',
			'Category',
			'Description',
			'PP',
			'Power',
			'Accuracy',
			'Priority',
		],
		typeMoves.map(b => [
			b.file.link,
			b.category,
			b.description,
			b.pp,
			b.power,
			b.accuracy,
			b.priority,
		])
	)
}

```

## By category

```dataviewjs
const {Pokemon} = customJS
const deps = {dv}

const categories = Pokemon.getAllMoveCategories(deps)

for (let category of categories) {
	dv.header(3, category)
	const categoryMoves = Pokemon.getMovesOfCategory(category, deps)
	dv.table(
		[
			'Move',
			'Type',
			'Description',
			'PP',
			'Power',
			'Accuracy',
			'Priority',
		],
		categoryMoves.map(b => [
			b.file.link,
			b.type,
			b.description,
			b.pp,
			b.power,
			b.accuracy,
			b.priority,
		])
	)
}
```