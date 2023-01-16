---
obsidianEditingMode: live
obsidianUIMode: preview
tags:
  - games/pokemon/world/regions
---
%%
date:: [[<% tp.date.now() %>]]
parents:: [[Regions]]
%%
bulbapedia:: [Bulbapedia Page]()

# [[<% tp.file.title %>]]
<% await tp.file.move('/Pokémon/Wiki/World/Regions/' + tp.file.title) %>


## Map



## Notable locations

```dataviewjs
const {Pokemon} = customJS
const deps = {dv}
Pokemon.displayTownsInCurrentRegion(deps, 3)
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