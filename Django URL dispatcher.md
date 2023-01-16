---
obsidianEditingMode: live
obsidianUIMode: preview
---
%%
date:: [[2023-01-02]]
%%

> [!info]- Metadata
> **Tags**:: #dev/web-dev/frameworks 
> 
> **Parents**:: [[Django]]

# Django URL dspatcher

URLs are configured in the file `urls.py` both in the main package and the app packages.

## Mapping URLs to [[Django Views|Views]]

The first time you create a project, in your file structure, you can find the file `myproject/urls.py`. This is the first file we look at to configure our URLs.

This is the default configuration:

```python TI:"myproject/urls.py"
from django.contrib import admin
from django.urls import path

urlpatterns = [
	path('admin/', admin.site.urls),
]
```

Now let's say we have an app with a single view `myapp.view.index` like this:

![[Django Views#^7dd437]]

We would map a URL to this view like this:

```python TI:"myproject/urls.py"
from django.contrib import admin
from django.urls import path
import myapp.views

urlpatterns = [
	path('admin/', admin.site.urls),
	path('myapp/', myapp.views.index),
]
```

## Modular URL configuration

Let's say we add more views to the same app:

```python TI:"myapp/views.py" HL:"6-10"
from django.http import HttpResponse

def index(request):
	return HttpResponse('Hello World')

def goodbye(request):
	return HttpResponse('Goodbye World')

def greet():
	return HttpResponse('Hello Jhon')
```

We could map those views to URLs like we did before:

```python TI:"myproject/urls.py" HL:"8-9"
from django.contrib import admin
from django.urls import path
import myapp.views

urlpatterns = [
	path('admin/', admin.site.urls),
	path('myapp/', myapp.views.index),
	path('myapp/goodbye/', myapp.views.goodbye),
	path('myapp/greet/', myapp.views.greet),
]
```

But that could get messy and big real quick. To better organize our URLs, we can add those URLs in the URL configuration in the app, and include them in the main URL configuration:

```python TI:"myproject/urls.py" HL:"2,6"
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
	path('admin/', admin.site.urls),
	path('myapp/', include('myapp.urls')),
]
```

```python TI:"myapp/urls.py"
from django.urls import path
from . import views

urlpatterns = [
	path('', views.index),
	path('goodbye/', views.goodbye),
	path('greet/', views.greet),
]
```