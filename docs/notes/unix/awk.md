---
id: awk
title: awk
---

## Basics

```shell
# Basic usage
awk [options] '/<search_pattern>/ { <action_1>; <action_2>; }' <file>
# Either of the search pattern or the action can be omited.
# Default action is print, default pattern is every line.

awk '{print}' <file> # Print every line
awk '/spam/' <file> # Print lines containing `spam`
awk '/^spam/' <file> # Print lines starting with `spam`

awk '/^spam/ {print $1;}' <file> # Print only the first column ($1)
# $2 refers to the second column, $0 to the entire line
```

## Built-in variables

:::info `awk` built-in variables

- **FILENAME**: Current input file.
- **NF**: Number of fields in the current record.
- **NR**: Number of the current record.
- **FNR**: Number of the current record relative to the current input file.
- **FS**: Current field separator (default: whitespace).
- **OFS**: Field separator for the output (default: whitespace).
- **RS**: Record separator for the input file (default: newline).
- **ORS**: Record separator for the output (default: newline).

:::

```shell
# Print the first column of `/etc/passwd`
# Change the field separator variable to `:` before processing
awk 'BEGIN { FS=":"; }
{ print $1; }' /etc/passwd

awk -F ':' '{print $1;}' /etc/passwd # Equivalent to above
awk -F: '{print $1;}' /etc/passwd # Equivalent to above

# Transform the data into a table
awk 'BEGIN { FS=":"; print "User\t\tUID\t\tGID\t\tHome\t\tShell\n--------------"; }
{print $1,"\t\t",$3,"\t\t",$4,"\t\t",$6,"\t\t",$7;}
END { print "---------\nFile Complete" }' /etc/passwd
```

## Field searching

```shell
awk '$2 ~ /^bin/' <file> # Print lines where the second field starts with `bin`
awk '$2 !~ /^bin/' <file> # The second field does _not_ start with `bin`
awk '$2 !~ /^bin/ && $1 < 5' <file> # The second field does not start with `bin` _and_ the value of the first column is less than 5
```

## Scripting

```shell
awk -f script.awk <file> # Run script.awk on file
```
