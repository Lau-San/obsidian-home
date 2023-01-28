---
obsidianEditingMode: live
obsidianUIMode: preview
aliases: 
---

<%-*
// Prompt for name
const name = await tp.system.prompt('Name', throw_on_cancel = true)

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

function getAge() {
	const now = moment(tp.date.now('YYYY-MM-DD'), 'YYYY-MM-DD')
	return now.diff(birthday, 'years')
}
-%>

%%
Birthday:: <% moment(birthday).format('MMMM DD, YYYY') %>
%%

# <% tp.file.title %>
<% await tp.file.move("/People/" + tp.file.title) _%>

**AKA**: `$= dv.current().aliases`
```button
name Add alias
type line(5) template
action alias
templater true
```
^button-addAlias

> [!abstract] Details
> **Birthday**: `$= dv.current().birthday`

## Contact

### Email

```button
name Add email
type append template
action email
templater true
```
^button-addEmail