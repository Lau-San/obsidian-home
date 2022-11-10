---
id: internet
type: study-subject
tags: studies, dev/web-dev
---
%%
**career**:: [[Web Development Studies]]
%%

# Internet

**status**:: pending

## Dependencies

```dataview
TABLE
	id AS "ID",
	status as "Status"
FROM "Studies/Subjects"
WHERE length(this.dependencies) > 0 AND contains(this.dependencies, id)
```