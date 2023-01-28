---
obsidianEditingMode: live
obsidianUIMode: preview
aliases: [Mom, Ma]
---
<%*
// Prompt for name
const name = tp.system.prompt('Name', throw_on_cancel = true)

// Prompt for birthday
let birthday = await tp.system.prompt(
	'Birthday. Format: "YYYY-MM-DD"',
	tp.date.now('YYYY-MM-DD')
)
// Check if the birthday is in the correct format
const isDateValid = (d) => moment(d, 'YYYY-MM-DD', true).isValid()
// If date is invalid prompt again
while(!isDateValid(birthday)) {
	birthday = await tp.system.prompt(
		'Birthday was not valid. Format: "YYYY-MM-DD"',
		birthday
	)
}
%>
%%
Birthday:: <% birthday %>
%%
# <% tp.file.title %>
<% await tp.file.move("/People/" + tp.file.title) %>
```dataviewjs
const curr = dv.current()

```
> [!info] Details
> **Aliases**: `=this.aliases`
> **Birthday**: `=this.birthday`