---
obsidianEditingMode: live
obsidianUIMode: preview
aliases: 
---

%%
Birthday:: January 27, 2023
%%

# New Person
**AKA**: `$= dv.current().aliases`
```button
name Add alias
type line(5) template
action alias
templater true
```
^button-addAlias

> [!info] Details
> **Birthday**: `$= dv.current().birthday`

## Contact

### Email

```button
name Add email
type prepend template
action email
templater true
```
^button-addEmail
