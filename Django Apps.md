---
obsidianEditingMode: live
obsidianUIMode: preview
aliases:
  - "Apps"
  - "Applications"
---
%%
date:: [[2022-12-21]]
%%

> [!info]- Metadata
> **Tags**:: #dev/web-dev/frameworks 
> **Parents**:: [[Django]]

# Django Apps

Django Apps are the parts that conform a Django project.

## Adding an app to a project

For this we use the script `manage.py`.

> [!warning]
> Make sure you have the virtual environment first.

```bash
python3 manage.py startapp <nameofyourapp>
```

After running this, you will see the app structure shown in [[Django Project Structure#Application Files|Django Project Structure]].

![[Django Project Structure#Application Files]]