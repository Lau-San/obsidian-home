---
date:
time:
with:
---
<% await tp.file.move('/Events/' + tp.file.title) %>
<%*
const title = await tp.system.prompt('Title', 'New Event', true)
await tp.file.rename(title)
let date = await tp.system.prompt('Date')
%>
## Event Details
