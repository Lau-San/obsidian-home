<%*
await tp.system.prompt('Title')
%>
<% await tp.file.move('/Events/' + tp.file.title) %>
## Event Details
<%*
const date = await tp.system.prompt('Date')
tp.file.rename(date + ' - ' + )
%>
Date:: 
Time:: 
With:: 