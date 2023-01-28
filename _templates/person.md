---
obsidianEditingMode: live
obsidianUIMode: preview
---
<%*
const name = tp.system.prompt('Name', throw_on_cancel = true)
%>
# <% tp.file.title %>
<% await tp.file.move("/People/" + tp.file.title) %>