---
id: html
type: study-subject
tags: studies, dev/web-dev/frontend
---
%%
**career**:: [[Web Development Studies]]
%%

# HTML

**status**:: pending

## Dependencies

```dataview
TABLE
	id AS "ID",
	status as "Status"
FROM "Studies/Subjects"
WHERE length(this.dependencies) > 0 AND contains(this.dependencies, id)
```