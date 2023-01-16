---
obsidianEditingMode: live
obsidianUIMode: preview
aliases: "list Type"
---
%%
date:: [[2022-12-20]]
%%

> [!info]- Metadata
> **Tags**:: #dev/languages 
> **Parents**:: [[Python Built-In Types]]

# Python Type list

Lists are [[Python Mutable Sequence Types|mutable sequences]].

## How to construct a list

### Using `[]` with or without items inside

```python
empty_list = []
number_list = [10, 2, 0, 50]
some_list = ['Hello', 10, true, ['Nested lists!', true]]
```

### Using a list [[Python Comprehensions|comprehension]]

```python HL:"3"
first_list = [1, 2, 3, 4, 5]

generated_list = [x * 2 for x in first_list]
# generated_list = [2, 5, 6, 8, 10]
```

### Using the type constructor

```python
my_new_list = list()
another_list = list([1, 2, 3, 4])
```
