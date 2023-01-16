---
obsidianEditingMode: live
obsidianUIMode: preview
tags:
  - games/pokemon/pokemon
---
%%
date:: <% tp.date.now() %>
parents:: [[Pokémon (Monsters)]]

gen1-moves:: 
gen1-tmhm-moves::
%%
bulbapedia:: [Bulbapedia Page]()

# [[<% tp.file.title %>]]
<% await tp.file.move('/Pokémon/Wiki/Pokémon/' + tp.file.title) %>
**type**:: 

## Moves

```dataviewjs
const {Pokemon} = customJS
const deps = {dv}

Pokemon.displayCurrentPokemonMoves(deps)
```

## Evolution
