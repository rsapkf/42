---
id: grep
title: g/re/p
---

## `grep`

### Basics

```shell
grep [options] <pattern> <file> # Basic usage
grep "spam" <file> # Search for lines that contain `spam` in file
grep -v "spam" <file> # Search for lines that do _not_ contain `spam` in file
grep -i "spam" <file> # Case-insentive search
grep -n "spam" <file> # Print line numbers
grep -nr 'string*' . # Recursively search current directory for `string`
```

### Regular expressions

See also: [/notes/programming/regex](/notes/programming/regex)

```shell
grep "^eggs" <file> # Find all lines starting with `eggs`
grep "eggs$" <file> # Lines ending with `eggs`
grep "^[A-Z]" <file> # Lines beginning with an uppercase letter
grep "^[[:upper:]]" <file> # Equivalent to above; Using POSIX classes
```

### Extended regular expressions

Along with basic regular expressions (BREs, which is the default), `grep` also supports [extended regular expressions (EREs)](https://en.wikipedia.org/wiki/Regular_expression#Standards) by using the `-E` option or by calling the `egrep` command.

```shell
grep "\(group\)" <file> # Grouping
grep -E "(group)" <file> # Equivalent to above
grep -E "(GPL|General Public License)" <file> # Alternation
grep -E "(copy)?right" <file> # Quantification; Match `copy` zero or one time
grep -E "free[^[:space:]]+" <file> # Match the string `free` plus one or more characters that are not white space characters
grep -E "[AEIOUaeiou]{3}" <file> # Match lines that contain triple-vowels
grep -E "[[:alpha:]]{16,20}" <file> # Match any words that have between 16 and 20 characters
```

### Miscellaneous

```shell
grep . * # cat a bunch of files
```

- Find lines in one file that are not in another [[\*](https://stackoverflow.com/questions/18204904/fast-way-of-finding-lines-in-one-file-that-are-not-in-another)]

  ```shell
  grep -v -f file1 file2
  ```

## `ripgrep`

```shell
rg -S 'string' # Case-insentive search
```
