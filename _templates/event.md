---
obsidianEditingMode: live
obsidianUIMode: preview
tags:
  - people
---
<%*
// Prompt for event title
const title = await tp.system.prompt('Title', 'New Event', true)

// Prompt for date
let date = await tp.system.prompt('Date (YYYY-MM-DD).', tp.date.now('YYYY-MM-DD'))
// Check if the date is in the correct format
const isDateValid = (d) => moment(d, 'YYYY-MM-DD', true).isValid()
// If date is invalid prompt again
while(!isDateValid(date)) {
	date = await tp.system.prompt('Date was not valid. Format: "YYYY-MM-DD"', date)
}
const newFileTitle = date + ' - ' + title

// Prompt for time
let time = await tp.system.prompt('Time (hh:mm a). eg: 03:45 pm', tp.date.now('hh:mm a'))
// Check if the time is in the correct format
const isTimeValid = (t) => moment(t, 'hh:mm a', true).isValid()
// If date is invalid prompt again
while(!isTimeValid(time)) {
	time = await tp.system.prompt('Time was not valid. Format: "hh:mm a" (03:45 pm)', time)
}

const files = app.vault.getMarkdownFiles()
let people = []
for (let f of files) {
	if (f.path.startsWith('People')) {
		people.push(f.basename)
	}
}
const _with = await tp.system.suggester(people, people, placeholder = 'With')

// Move file to proper location
await tp.file.move('/Events/' + moment(date).format('YYYY/MM - MMMM/') + newFileTitle)
%>
%%
Title:: <% title %>
Date:: <% date %>
Time:: <% time %>
With:: [[<% _with %>]]
%%
# <% title %>

> [!info] Event Details
> **Date**: `$= dv.current().date`
> **Time**: `$= dv.current().time`
> **With**: `$= dv.current().with`
