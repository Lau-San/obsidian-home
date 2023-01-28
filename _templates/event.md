# <% await tp.system.prompt('Title') %>
<% await tp.file.move('/Events/' + tp.file.title) %>
## Event Details

Date:: <%* const date = await tp.system.prompt('Date') %>
Time:: 
With:: 