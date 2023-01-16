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

# Creating a new Django project

> [!attention]
> This asumes that [[Python]] is already installed.

## Create a folder for the project

```bash
mkdir myproject
cd myproject
```

## Create a virtual environment and activate it

```bash
python3 -m venv venv
source ./venv/bin/activate
```

## Install Django

```bash
pip install django
```

## Create a new Django project

```bash
django-admin startproject <nameofyourproject>
```

> [!attention]
> The name of your project can only contain alphanumeric characters.

After this, you will see the folder structure shown in [[Django Project Structure]].