---
obsidianEditingMode: live
obsidianUIMode: preview
tags:
  - games/pokemon/world/regions
---
%%
date:: [[2022-11-17]] [[2022-11-24]]
parents:: [[Regions]]
bulbapedia:: [Bulbapedia Page]()
%%

# [[Kanto]]

![[Kanto.png]]

## Map

### Generation I

![[Kanto Map Gen 1.png]]

### Generation II

![[Kanto Map Gen 2.png]]

### Generation IV

![[Kanto Map Gen 4.png]]

## Notable Locations

### Towns

```dataviewjs
const {Pokemon} = customJS
const deps = {dv}
Pokemon.displayTownsInCurrentRegion(deps)
```

### Routes

```dataviewjs
const {Pokemon} = customJS
const deps = {dv}
const routes = Pokemon.getRoutesInCurrentRegion(deps)
dv.list(routes.file.link)
```

### Landmarks

```dataviewjs
const {Pokemon} = customJS
const deps = {dv}
const landmarks = Pokemon.getLandmarksInCurrentRegion(deps)
dv.list(landmarks)
```