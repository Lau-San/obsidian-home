---
id: os
type: study-subject
tags: studies, dev
---
%%
**career**:: [[Web Development Studies]]
%%

# OS and General Knowledge

**status**:: pending

## Dependencies

```dataview
TABLE
	id AS "ID",
	status as "Status"
FROM "Studies/Subjects"
WHERE length(this.dependencies) > 0 AND contains(this.dependencies, id)
```