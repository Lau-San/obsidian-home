---
obsidianEditingMode: live
obsidianUIMode: preview
type: weekly
---

**<** [[Periodic/Weekly/<% tp.date.now('YYYY/MM - MMMM/gggg-[W]ww', offset = -7, reference = tp.file.title) %>|Previous week]] **|** [[Periodic/Weekly/<% tp.date.now('YYYY/MM - MMMM/gggg-[W]ww', offset = 7, reference = tp.file.title) %>|Next week]] **>**

# <% tp.file.title %>
<% await tp.file.move('/Periodic/Weekly/' + tp.date.now('YYYY/MM - MMMM/') + tp.file.title) %>
## Tasks

```button
name Add task
type prepend template
action lineTask
templater true
```
^button-addTask

## How I spent my time

```toggl
SUMMARY FROM {{monday:YYYY-MM-DD}} TO {{sunday:YYYY-MM-DD}}
TITLE "Toggl Report"
```

```toggl
LIST
FROM {{monday:YYYY-MM-DD}} TO {{sunday:YYYY-MM-DD}}
```

