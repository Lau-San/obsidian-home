---
date: <% tp.date.now('YYYY-MM-DD') %>
---

# <% tp.file.title %>
<% await tp.file.move('/Events/' + tp.file.title) %>
> [!info] Event Details
> **Category**:: 
> **With**:: 