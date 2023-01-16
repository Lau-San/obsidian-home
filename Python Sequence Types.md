---
obsidianEditingMode: live
obsidianUIMode: preview
---
%%
date:: [[2022-12-20]]
%%

> [!info]- Metadata
> **Tags**:: #dev/languages 
> **Parents**:: [[Python Built-In Types]]

# Python Sequence Types

## [[Python Immutable Sequence Types|Immutable Sequence Types]]

> [!attention] This section is incomplete

## [[Python Mutable Sequence Types|Mutable Sequence Types]]

- [[Python Type list|list Type]]
- [[Python Type tuple|tuple Type]]
- [[Python Type range|range Type]]

## Common Sequence Operations

These are operations that can be performed on any sequence type.

### Check if a sequence contains an item

```python HL:"3-4"
s = [1, 2, 3, 4]

3 in s    # True
500 in s  # False
```

### Check if a sequence does NOT contain an item

```python HL:"3-4"
s = [1, 2, 3, 4]

3 not in s    # False
500 not in s  # True
```

### Concatenate sequences

```python HL:"4"
s1 = [1, 2, 3, 4]
s2 = [100, 200, 300, 400]

a = s1 + s2
# a = [1, 2, 3, 4, 100, 200, 300, 400]
```

### Retrieve item at an index

```python HL:"3"
s = [100, 200, 300, 400]

a = s[2]

# a = 300
```

```python HL:"3"
s = [100, 200, 300, 400]

a = s[-1]    # Use negative index to count from the end

# a = 400
```

### Retrieve a slice of a sequence

```python HL:"3"
s = [100, 200, 300, 400, 500]

a = a[1:3]

# a = [200, 300, 400]
```

### Retrieve a slice of a sequence with a step

```python HL:"3"
s = [100, 200, 300, 400, 500, 600, 700, 800, 900]

a = s[2:7:2]

# a = [300, 500, 700]
```

### Get the length of a sequence

```python HL:"3"
s = [1, 2, 3, 4, 5]

l = len(s)

# l = 5
```

### Get the smallest item in a sequence

```python HL:"3"
s = [3, 10, 6, 9, 5]

m = min(s)

# m = 3
```

### Get the largest item in a sequence

```python HL:"3"
s = [3, 10, 6, 9, 5]

m = max(s)

# m = 10
```

### Get the index of the first occurrence of an item in a sequence

```python HL:"3"
s = [100, 200, 300, 400, 500, 400, 300, 200, 100]

i = s.index(400)

# i = 3
```

### Count occurrence of an item in a sequence

```python HL:"3"
s = [1, 500, 2, 500, 500, 3, 500]

c = s.count(500)

# c = 4
```

## Useful links

- [Official Python Documentation: Sequence Types](https://docs.python.org/3/library/stdtypes.html#sequence-types-list-tuple-range)