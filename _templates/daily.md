# {{date:dddd Do, MMMM YYYY}}

## Tasks

### Daily task review
- [ ] Review today's tasks
- [ ] Review task progress
- [ ] Plan tomorrow's tasks

### Planned for today
```button
name Add task
type prepend text
action - [ ] New task
```

```dataviewjs
dv.taskList(dv.pages().file.tasks
	.where(t => !t.completed)
	.where(t => t.text.includes("{{title}}"))
)
```

## Log
