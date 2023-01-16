---
obsidianEditingMode: live
obsidianUIMode: preview
---
%%
date:: [[2022-12-21]]
%%

> [!info]- Metadata
> **Tags**:: #dev/web-dev/frameworks 
> **Parents**:: [[Django]]

# Django Project Structure

When we work with Django, we have to differenciate two concepts:

- **Project**: The project as a whole. All files that make the web application.
- **App**: Smaller parts of the project that come in packages.

![[django-project-apps-example.excalidraw]]

## Project Files

When we create a new project, a new folder is created. It's contents look like this:

![[django-basic-project-file-structure.excalidraw]]

- **Root folder**: This is a folder where we create the project. It is created by us and Django has no access to it.
- **Django Project Folder**: This is the folder that contains the Django Project. The folder itself can't touched by Django, but it's contents can. This means we can change the name of this folder to whatever we want.
- **Package Folder**: This is the main module for the project.
- **asgi.py** and **wsgi.py**: These files are necessary for deployment.
- **settings.py**: This file contains the project settings.
- **urls.py**: This file contains a mapping of urls and views.
- **manage.py**: This is a script that we run to perform most actions with the project, like starting the development server or migrating models.

## Application Files

When we create a new application (through `manage.py`), the project looks like this:

![[django-basic-app-file-structure.excalidraw]]

- **Package Folder**: This is the application module package.
- **admin.py**: This file manages the [[Django Admin Dashboard]].
- ~ **apps.py**:
- ~ **tests.py**:
- **views.py**: This file contains the functions that execute when sending a request to a url.