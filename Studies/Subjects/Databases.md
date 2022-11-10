---
id: db
type: study-subject
tags: studies, dev/backend, dev/web-dev/backend
dependencies: internet, os
---
%%
**career**:: [[Web Development Studies]]
%%

# Databases

**status**:: pending

## Dependencies

```dataview
TABLE
	id AS "ID",
	status as "Status"
FROM "Studies/Subjects"
WHERE length(this.dependencies) > 0 AND contains(this.dependencies, id)
```