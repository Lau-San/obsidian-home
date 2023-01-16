---
obsidianEditingMode: live
obsidianUIMode: preview
tags:
  - games/pokemon/world/towns
---
%%
date:: [[<% tp.date.now() %>]]
parents:: [[Towns]]

map-location:: 
%%
bulbapedia:: [Bulbapedia Page]()

# [[<% tp.file.title %>]]
<% await tp.file.move('/Pokémon/Wiki/World/Towns/' + tp.file.title) %>


**region**:: 
**gym**:: 

```dataviewjs
const {Pokemon} = customJS
const deps = {dv}
Pokemon.displayPlacesOfInterestAtCurrentLocation(deps)
```