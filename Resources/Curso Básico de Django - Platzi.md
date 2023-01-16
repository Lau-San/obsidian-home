---
obsidianEditingMode: live
obsidianUIMode: source
---
%%
date:: [[2022-12-19]], [[2022-12-20]]
%%

# Curso Básico de Django - Platzi

> [!info]- Metadata
> **Tags**: #resources/courses
> **Parents**:: [[Resources]]
> 
> **Type**:: Course
> **Source**:: [Link](https://platzi.com/cursos/django/)
> **Author**:: Facundo García Martoni
> **Publication Date**:: 

## Notes

### Introducción

#### ¿Qué es Django?

- Uno de los frameworks más populares para crear web apps.
- Es gratis y Open Source.
- Es rápido, seguro y escalable.

## Comenzando a programar en Django

### Archivos básicos del proyecto

![[django-basic-project-file-structure.excalidraw]]

### Aplicaciones y proyectos

- Lo que normalmente llamamos una aplicación, en Django se identifica como **proyecto**.
- Un proyecto de Django está conformado por **aplicaciones**.

![[django-project-apps-example.excalidraw]]

#### Aplicación

- Se crea una nueva aplicación con el comando `python3 manage.py startapp <name>`.

![[django-basic-app-file-structure.excalidraw]]

##### Creando una vista

1. Crear una función en `views.py`.

```python TI:"myapp/view.py" HL:"5-6"
from django.shortcuts import render
from django.http import HttpResponse


def index(request):
    return HttpResponse('Hello World')
```

1. Registrar url en `myproject/urls.py`. Para mantener una organización, se pueden dividir las url en las distintas apps.

```python TI:"myproject/urls.py" HL:"3,7"
from django.contrib import admin
from django.urls import path
import polls.views

urlpatterns = [
    path("admin/", admin.site.urls),
    path('polls/', polls.views.index)
]
```

- Luego de crear la ruta `polls/`, la vista se puede ver en `localhost:<puerto>/polls`

> [!tip]
> Para mantener una mejor organización, se pueden separar las urls por apps.

![[django-app-new-url-file.excalidraw]]

```python TI:"/myproject/myproject/urls.py" HL:"6"
from django.contrib import admin
from django.urls import path, include

urlpatterns = [
	path('admin/', admin.site.urls),
	path('polls/', include('polls.urls'))
]
```

```python TI:"/myproject/myapp/urls.py" HL:"2,5"
from django.urls import path
from . import views

urlpatterns = [
    path('', views.index, name='index')
]
```

### Modelos

#### ORM

- **O**bject **R**elational **M**apping.
- Convierte modelos de Django a tablas en una base de datos.
