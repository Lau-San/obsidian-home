<%*
const title = await tp.system.prompt('Title')
tR += '# ' + title
%>
<% await tp.file.move('/Events/' + tp.file.title) %>
## Event Details
<%*
const date = await tp.system.prompt('Date')
tp.file.rename(date + ' - ' + title)
%>
Date:: 
Time:: 
With:: 