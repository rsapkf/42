---
id: xargs
title: xargs
---

## `xargs`

`xargs` (short for "eXtended ARGumentS") converts input from stdin into arguments to a command.

Unlike `grep` or `awk` which can take input either as command-line arguments or stdin, commands like `rm`, `cp` or `echo` can only take input as arguments, which is why `xargs` is necessary.

### Basic usage

```shell
xargs [options] [command [initial-arguments]]

find /path -type f -name '*.js' | xargs rm
# Find all files ending in `.js` in `/path` and remove them

find . -name '*.py' | xargs wc -l
# Recursively find Python files and count number of lines in them

find . -name '*.json' | xargs grep 'user'
# Recursively find JSON files and search them for `user`
```

### Separator problem

Line-oriented utilities will work with `xargs` as long as records do not contain spaces in them. But since `xargs` is not line-oriented (by default, it separates on newlines and blanks within lines), it may treat a single record as separate.

If records do contain spaces, you must use [`NUL`](https://en.wikipedia.org/wiki/Null_character) as the record separator. This can be set using

- `-0` for Perl,
- `-0` for `locate`,
- `-z`/`-Z` for `grep`,
- `-z` for `sort`,
- `-print0` for `find`

And then use the `-0` option with `xargs`:

```shell
find . -name "*.txt" -print0 | xargs -0 rm
# Separate entries by `NUL` instead of a newline

find . -name "*.txt" -print0 | xargs -d '\n' rm
# Equivalent to above, `-0` is preferred since this won't work on filenames with newline
```

### Placement of arguments

To insert the listed arguments at some position other than the end of the command line, pass a string to the `-I` option that will be replaced with the supplied input.

```shell
find /path -type f -name '*~' -print0 | xargs -0 -I % cp -a % ~/backups
```

### Operating on a subset of arguments at a time

```shell
echo {0..9} | xargs -n 2 # Break up the input into two arguments per line
# Useful for commands like `diff` that operate on 2 files at time
```

### Parallelize operations

```shell
time echo {1..5} | xargs -n 1 -P 5 sleep # ~5 seconds
time echo {1..5} | xargs -n 1 sleep # ~15 seconds

find /path -name '*.foo' | xargs -P 24 -I '{}' /cpu/bound/process '{}' -o '{}'.out
# Queue 24 processes and wait on each to finish before launching another
# To ensure output streams are synchronized, use `--output file` where possible
```

## GNU `parallel`

GNU [`parallel`](https://www.gnu.org/software/parallel/) is an alternative to `xargs` that is designed to have the same options, but is line-oriented.

It does have the `-0` option like `xargs` but it is only needed if there are newlines in filenames you are dealing with.
