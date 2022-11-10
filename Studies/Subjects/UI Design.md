---
id: ui
type: study-subject
tags: studies, dev/design
---
%%
**career**:: [[Web Development Studies]]
%%

# UI Design

**status**:: pending

## Dependencies

```dataview
TABLE
	id AS "ID",
	status as "Status"
FROM "Studies/Subjects"
WHERE length(this.dependencies) > 0 AND contains(this.dependencies, id)
```