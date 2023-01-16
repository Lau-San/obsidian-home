---
obsidianEditingMode: live
obsidianUIMode: preview
aliases: "Views"
---
%%
date:: [[2022-12-21]]
%%

> [!info]- Metadata
> **Tags**:: #dev/web-dev/frameworks 
> **Parents**:: [[Django]]

# Django Views

Views are responsible for processing user's requests and returning a response.

## Creating a simple view

All views in the app go in the file `views.py`. In here, we write each view as a function that accepts an HTTP request and returns an HTTP response.

```python TI:"myapp/views.py"
from django.http import HttpResponse

def index(request):
	return HttpResponse('Hello World')
```

^7dd437

## Mapping URLs to Views

In order to use our views, we need to map them to a URL. See [[Django URL dispatcher|URL dispatcher]].