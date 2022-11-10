---
id: soft-arch
type: study-subject
tags: studies, dev
---
%%
**career**:: [[Web Development Studies]]
%%

# Software Architecture

**status**:: pending

## Dependencies

```dataview
TABLE
	id AS "ID",
	status as "Status"
FROM "Studies/Subjects"
WHERE length(this.dependencies) > 0 AND contains(this.dependencies, id)
```