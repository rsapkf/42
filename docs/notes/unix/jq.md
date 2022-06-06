---
id: jq
title: jq
---

## Basic usage

```shell
jq [options] <filter> [file...]

# jq can read a stream of JSON entities (including numbers and other literals) from stdin
curl <API> | jq [options] <filter>
```

## Filters

### The identity operator

The identity operator, **`.`**, produces the input unchanged (by default, pretty prints) as output. This is useful for formatting raw JSON.

```shell
> echo '{"key1":{"key2":"value1"}}' | jq '.'
{
  "key1": {
    "key2": "value1"
  }
}

> echo '{"key1":{"key2":"value1"}}' | jq -c '.' # Compact instead of pretty-printed output
{"key1":{"key2":"value1"}}

# Useful options
# --tab: Use tabs for indentation
# -S: Sort keys of objects on output
# -C: Colorize JSON
# -M: Monochrome (don't colorize JSON)
# -r: Output raw strings, not JSON texts
# -s: Read (slurp) all inputs into an array; apply filter to it
# -R: Read raw strings, not JSON texts
```

### Getting keys

Consider the following JSON data returned by an API:

```shell
> curl https://api.example.org/characters/professor-fansworth
{
  "id": "1",
  "name": "Professor Fansworth",
  "catch_phrase": "Good news, everyone!",
  "dob": "Apr 9, 2841",
  "inventions": ["What-If Machine", "Smell-O-Scope", "Parallel Universe Box"],
  "features": {
    "age": 180,
    "profession": "CEO, Planet Express"
  }
}
```

**`.key`** filter produces the value at the key `key`, or `null` if there's none present. **`.key.subkey`** lets you select elements in a JSON document like it’s a JavaScript object. Use `."key"` or `.["key"]` if the key contains special characters or if it starts with a digit.

```shell
> curl <API> | jq '.name'
> curl <API> | jq '."name"' # Equivalent to above
> curl <API> | jq '.["name"]' # Equivalent to above
Professor Fansworth

> curl <API> | jq '.username'
null

> curl <API> | jq '.features.age'
> curl <API> | jq '.features | .age' # Equivalent to above
180
```

**`.key?`** works just like `.key`, but no errors will be output if `.` is not an array or an object.

### Working with JSON arrays

Consider the following data returned by an API:

```shell
> curl https://api.example.org/characters
[
  {
    "id": "1",
    "name": "Professor Fansworth",
    "catch_phrase": "Good news, everyone!",
    "dob": "Apr 9, 2841",
    "inventions": [
      "What-If Machine",
      "Smell-O-Scope",
      "Parallel Universe Box"
    ],
    "features": {
      "age": 180,
      "profession": "CEO, Planet Express"
    }
  },
  {
    "id": "2",
    "name": "Hermes Conrad",
    "catch_phrase": "Sweet lamprey of Santa Fe!",
    ...
  }
  ...
]
```

Use **`.[<index>]`** filter to index arrays.

```shell
> curl <API> | jq '.[0]'
{
  "id": "1",
  "name": "Professor Fansworth",
  "catch_phrase": "Good news, everyone!",
  ...
}
```

To slice the array/string, use **`.[<start>:<end>]`**. This will return a subarray or substring containing the elements from index `start` (inclusive) to index `end` (exclusive).

```shell
> curl <API> | jq '.[0].name[0:5]'
Profe
```

Using the **`.[]`** filter will return all of the elements of an array **as separate results** rather than a single array.

```shell
> curl <API> | jq '.[]'
{
  "id": "1",
  "name": "Professor Fansworth",
  "catch_phrase": "Good news, everyone!",
  ...
}
{
  "id": "2",
  "name": "Hermes Conrad",
  "catch_phrase": "Sweet lamprey of Santa Fe!",
  ...
}

> curl <API> | jq '.[0].inventions[]'
What-If Machine
Smell-O-Scope
Parallel Universe Box
```

**`.[]?`** works just like `.[]`, but no errors will be output if `.` is not an array or object.

### Other filters

Similar to Unix pipelines, **`|`** combines two filters by feeding the output(s) of the one on the left into the input of the one on the right. It would mean that `.key.subkey.subsubkey` is the same as `.key | .subkey | .subsubkey`.

```shell
> curl <API> | jq '.[] | .name'
Professor Fansworth
Hermes Conrad
...
```

If two filters are separated by a comma (**`,`**), then the same input will be fed into both and the two filters' output value streams will be concatenated in order from left to right.

```shell
> curl <API> | jq '.[0] | .name, .features.profession'
Professor Fansworth
CEO, Planet Express
```

Parenthesis work as a grouping operator.

```shell
> curl <API> | jq '(.[0].features.age + 20) * 5'
1000
# Here, `+` and `*` are built-in operators. See below.
```

## Array construction

The `[<filter>]` expression can be used to contruct an array and return as output.

```shell
> curl <API> | jq '[.name, .inventions[]]'
[
  "Professor Fansworth",
  "What-If Machine",
  "Smell-O-Scope",
  "Parallel Universe Box"
]
```

## Object construction

The `{<filter>}` expression can be used to contruct an object.

```shell
> curl <API> | jq '.[0:2] | {name: .name, catch_phrase: .catch_phrase}'
> curl <API> | jq '.[0:2] | {name, catch_phrase}' # Equivalent to above
{
  "name": "Professor Fansworth",
  "catch_phrase": "Good news, everyone!"
}
{
  "name": "Hermes Conrad",
  "catch_phrase": "Sweet lamprey of Santa Fe!"
}

> curl <API> | jq '.[0:2] | {name: .name, profession: .features.profession}'
{
  "name": "Professor Fansworth",
  "profession": "CEO, Planet Express"
}
{
  "name": "Hermes Conrad",
  "profession": "Accountant, Planet Express"
}
```

## Built-in operators

The built-in operators (**`+`**,**`-`**,**`*`**,**`/`**,**`%`**) work as expected on numerical inputs.
Exceptions to these are:

- **`+`**

  - Concatenates arrays/strings into one large array/string.
  - Merges objects into a single object.

- **`-`**

  - Removes all occurences of the second array from the first array.

- **`/`**

  - Division by zero raises an error.
  - Dividing a string by another splits the first using the second as separator.

- **`*`**

  - Multiplying a string by a number produces the concatenation of that string that many times. `"x" * 0` produces `null`.
  - Multiplying two objects will merge them recursively.

  <br />

  ```shell
  > curl <API> | jq '.[0].features.age + 20'
  200 # 180 + 20

  > curl <API> | jq '.[0].features.age % 17'
  10 # 180 % 17

  > curl <API> | jq '.[0] | .name + ": " + .catch_phrase'
  "Professor Fansworth: Good news, everyone!" # String concatenation

  > curl <API> | jq '(.[0].name + " ") * 3'
  "Professor Fansworth Professor Fansworth Professor Fansworth " # String repetition
  ```

## Built-in functions

[Builtin operators and functions - jq Manual](https://stedolan.github.io/jq/manual/#Builtinoperatorsandfunctions)

### `length`

```shell
> curl <API> | jq '.[0].inventions | length'
3 # Array

> curl <API> | jq '.[0].name | length'
19 # String

> curl <API> | jq '.[0].features | length'
3 # Object

> curl <API> | jq '.[0].username | length'
null # username doesn't exist
```

### `sort`

```shell
> curl <API> | jq '.[0].inventions | sort'
[
  "Parallel Universe Box",
  "Smell-O-Scope",
  "What-If Machine"
] # Alphabetically sorted array
```

### `toString`

```shell
> curl <API> | jq '.[0].features.age | toString'
"180"
```

### `map`

`map(<filter>)` is eqivalent to `.[] | <filter>`.

```shell
> curl <API> | jq 'map("- " + .name )'
- Professor Fansworth
- Hermes Conrad
...
```
