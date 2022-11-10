---
id: react-js
type: study-subject
tags:
	- studies
	- dev/web-dev/frontend
	- dev/libraries
dependencies: js
---
%%
**career**: [[Web Development Studies]]
%%

# ReactJS

**status**:: pending

## Dependencies

```dataview
TABLE
	id AS "ID",
	status as "Status"
FROM "Studies/Subjects"
WHERE length(this.dependencies) > 0 AND contains(this.dependencies, id)
```