---
id: js
type: study-subject
tags: studies, dev/web-dev/frontend
dependencies: html, css
---
%%
career:: [[Web Development Studies]]
%%

# JavaScript

**status**:: pending

## Dependencies

```dataview
TABLE
	id AS "ID",
	status as "Status"
FROM "Studies/Subjects"
WHERE length(this.dependencies) > 0 AND contains(this.dependencies, id)
```