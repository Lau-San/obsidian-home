---
id: py
type: study-subject
tags: studies, dev/lang, dev/web-dev/backend
---
%%
**career**: [[Web Development Studies]]
%%

# Python

**status**:: pending

## Dependencies

```dataview
TABLE
	id AS "ID",
	status as "Status"
FROM "Studies/Subjects"
WHERE length(this.dependencies) > 0 AND contains(this.dependencies, id)
```