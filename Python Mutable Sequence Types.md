---
obsidianEditingMode: live
obsidianUIMode: preview
aliases: "Mutable Sequence Types"
---
%%
date:: [[2022-12-20]]
%%

> [!info]- Metadata
> **Tags**:: #dev/languages 
> **Parents**:: [[Python Built-In Types]], [[Python Sequence Types]]

# Python Mutable Sequence Types

As the name suggests, these are sequence types that can be mutated.

- [[Python Type list|list Type]]
- [[Python Type tuple|tuple Type]]
- [[Python Type range|range Type]]

## Mutable Sequence Operations

These are operations that **can only be performed on mutable sequence types**.

> [!note]
> All examples in this section use `list` type sequences, but they apply to any other mutable sequence type.

### Replace an item with another item

```python HL:"3"
s = [1, 2, 3, 4]

s[2] = 100

# s = [1, 2, 100, 4]
```

### Replace a slice of the sequence with the contents of an iterable

```python HL:"3"
s = [1, 2, 3, 4, 5]

s[1:3] = [200, 300, 400]

# s = [1, 200, 300, 400, 5]
```

### Delete a slice of the sequence

```python HL:"3"
s = [1, 2, 3, 4, 5]

del s[2:3]

# s = [1, 5]
```

## Add an item to the end of the sequence

```python HL:"3"
s = [1, 2, 3, 4]

s.append(500)

# s = [1, 2, 3, 4, 500]
```

### Remove all items from the sequence

```python HL:"3"
s = [1, 2, 3, 4]

s.clear()

# s = []
```

### Create a shallow copy of a sequence

```python HL:"3"
s1 = [1, 2, 3, 4]

s2 = s1.copy()

s2.append(500)

# s1 = [1, 2, 3, 4]
# s2 = [1, 2, 3, 4, 500]
```

### Insert an item at a given index

```python HL:"3"
s = [1, 2, 3, 4]

s.insert(2, 500)

# s = [1, 2, 500, 3, 4]
```

### Retrieve an items and remove it

```python HL:"3"
s = [1, 2, 3, 4]

a = s.pop(2)   #Retrieve item at index 2

# s = [1, 2, 4]
# a = 3
```

```python HL:"3"
s = [1, 2, 3, 4]

a = s.pop()    #Retrieve last item

# s = [1, 2, 3]
# a = 4
```

### Remove item

```python HL:"3"
s = [1, 2, 500, 3, 500, 4]

s.remove(500)

# s = [1, 2, 3, 500, 4]
```

### Reverser items in place

```python HL:"3"
s = [1, 2, 3, 4]

s.reverse()

# s = [4, 3, 2, 1]
```

## Useful links

- [Official Python Documentation: Mutable Sequence Types](https://docs.python.org/3/library/stdtypes.html#mutable-sequence-types)
