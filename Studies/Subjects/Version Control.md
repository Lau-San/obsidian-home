---
id: vc
type: study-subject
tags: studies, dev, tools
dependencies: os
---
%%
**career**:: [[Web Development Studies]]
%%

# Version Control

**status**:: pending

## Dependencies

```dataview
TABLE
	id AS "ID",
	status as "Status"
FROM "Studies/Subjects"
WHERE length(this.dependencies) > 0 AND contains(this.dependencies, id)
```