<% await tp.file.move('/Events/' + tp.file.title) %>
<%*
// Prompt for event title
const title = await tp.system.prompt('Title', 'New Event', true)
await tp.file.rename(title)

// Prompt for date
let date = await tp.system.prompt('Date (YYYY-MM-DD).', tp.date.now('YYYY-MM-DD'))
// If date is invalid prompt again
const isDateValid = moment(date, 'YYYY-MM-DD', true).isValid()
while(!isDateValid) {
	date = await tp.system.prompt('Date was not valid, try again (YYYY-MM-DD)', date)
}
let time = await tp.system.prompt('Time (hh:mm a). eg: 03:45 pm', tp.date.now('hh:mm a'))
%>
> [!info] Event Details
> <% moment(date, 'YYYY-MM-DD', true) %>
> **Date**:: <% moment(date, 'YYYY-MM-DD', true).isValid() %>