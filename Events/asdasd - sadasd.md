---
date: 
time: 
with: 
---
<% await tp.file.move('/Events/' + tp.file.title) %>
<%*
let title
function changeTitle(newTitle) {
	const hasTitle = 
}
const date = await tp.system.prompt('Date')
tp.file.rename(date + ' - ' + title)
%>
# <% tp.file.title %>
## Event Details

Date:: [[<% date %>]]
Time:: 
With:: 