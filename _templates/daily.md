---
date: {{date:YYYY-MM-DD}}
obsidianEditingMode: live
obsidianUIMode: preview
type: daily
---

**<** [[Periodic/Daily/<% tp.date.now('YYYY/MM - MMMM/YYYY-MM-DD', offset = -1, reference = tp.file.title) %>|Previous day]] **|** [[Periodic/Daily/<% tp.date.now('YYYY/MM - MMMM/YYYY-MM-DD', offset = 1, reference = tp.file.title) %>|Next day]] **>**

# {{date:dddd Do, MMMM YYYY}}
<% await tp.file.move('/Periodic/Daily/' + tp.date.now('YYYY/MM - MMMM/') + tp.file.title) %>
Mood:: 

## This Week

```dataviewjs
const weekPage = dv.page('Periodic/Weekly/<% tp.date.now('YYYY/MM - MMMM/gggg-[W]ww', reference = tp.file.title ) %>')
dv.taskList(weekPage.file.tasks.where(b => !b.text.includes('tags:: weekly')))
```

## Events
```button
name Add Event
type prepend text
action - ~ New Event
```
^button-saml

## Tasks

### Daily task review
- [ ] Review today's tasks
- [ ] Review task progress
- [ ] Plan tomorrow's tasks

### Planned for today

#### Tasks in other pages
```dataviewjs
dv.taskList(dv.pages().file.tasks
	.where(t => !t.completed)
	.where(t => t.text.includes("{{title}}"))
)
```

### Process this
`dice: #process-me|link`

## How I spent my time

```toggl
SUMMARY FROM {{date:YYYY-MM-DD}} TO {{date:YYYY-MM-DD}}
TITLE "Toggl Report"
```

```toggl
LIST
FROM {{date:YYYY-MM-DD}} TO {{date:YYYY-MM-DD}}
```

### Notes I worked on

```dataview
LIST FROM "/" AND -"Daily"
WHERE contains(date, this.file.name) OR contains(date, this.file.link)
```

## Log
