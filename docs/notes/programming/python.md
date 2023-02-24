---
id: python
title: Python
---

## Easter eggs

```
>>> import this
The Zen of Python, by Tim Peters

Beautiful is better than ugly.
Explicit is better than implicit.
Simple is better than complex.
Complex is better than complicated.
Flat is better than nested.
Sparse is better than dense.
Readability counts.
Special cases aren't special enough to break the rules.
Although practicality beats purity.
Errors should never pass silently.
Unless explicitly silenced.
In the face of ambiguity, refuse the temptation to guess.
There should be one-- and preferably only one --obvious way to do it.
Although that way may not be obvious at first unless you're Dutch.
Now is better than never.
Although never is often better than *right* now.
If the implementation is hard to explain, it's a bad idea.
If the implementation is easy to explain, it may be a good idea.
Namespaces are one honking great idea -- let's do more of those!
```

```python
>>> import antigravity
```

```python
>>> import __hello__
Hello world!
```

```
>>> from __future__ import braces
  File "<stdin>", line 1
SyntaxError: not a chance
```

- [Secret code in Ex Machina (2014)](https://www.reddit.com/r/movies/comments/365f9b/secret_code_in_ex_machina/)

## Snippets

```python
# Get Python version
import sys
print(sys.version)

# Get Unix timestamp
>>> import time
>>> time.time()
1636620498.0040886

# Reverse a list
list[::-1] # or
list.reverse()

# Count the number of unique characters in a string
len(set("stackoverflow"))

# Check if an element in one list exists in another
any(e in list2 for e in list1)
```
