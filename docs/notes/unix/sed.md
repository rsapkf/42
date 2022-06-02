---
id: sed
title: sed
---

```shell
sed [options] commands [file] # Basic usage
sed '' <file> # Print contents of file; Automatically prints without options
cat <file> | sed '' # Equivalent to above
```

## Printing

```shell
sed 'p' <file> # Prints each line in file _twice_
sed -n 'p' <file> # Suppress automatic printing; Print each line once
sed 20q <file> # Print the first 20 lines of file
```

## Address ranges

```shell
sed -n '1p' <file> # Print first line
sed -n '1,5p' <file> # Print first 5 lines
sed -n '1,+4p' <file> # Equivalent to above
sed -n '1~2p' <file> # Print every other line
```

## Deleting text

```shell
sed '5p' <file> # Delete line 5
sed '1~2d' <file> # Delete every other line starting from the first
sed '6,$d' <file> # Delete from line 6 to end of file
sed -i '1~2d' <file> # Change file in-place
sed -i.bak '1~2d' <file> # Create a backup prior to editing file in-place
```

## Substituting text

```shell
sed 's/<regexp>/<replacement>/g' <file> # Basic usage

sed 's/prev/next/' <file> # Substitute the first instance of `prev` in each line with `next`
sed 's/prev/next/g' <file> # Substitute all instances of `prev` with `next`
sed 's/prev/next/2' <file> # Substitute the second instance of `prev` in each line with `next`
sed -n 's/prev/next/2p' <file> # Print only lines that were substituted
sed 's/PreV/next/i' <file> # Ignore case
sed 's_com/index_org/home_g' <file> # Use _ as delimiter; Replace `com/index` with `org/home`

sed 's/^.*at/(&)/' <file> # Referencing matched text in replacement string
sed 's/\([^ ][^ ]*\) \([^ ][^ ]*\)/\2 \1/' <file> # Referencing regex groups; Switch the first two words of each line

sed 's/and/\&/' <file> | sed 's/people/horses/' # Multiple editing sequences
sed -e 's/and/\&/' -e 's/people/horses/' <file> # Equivalent to above
sed 's/and/\&/;s/people/horses/' <file> # Equivalent to above

sed '=' <file> # Insert a line-number on a new line between each existing line
sed 'G' <file> # Insert a blank line between each line

sed '1,3s/.*/Hello/' <file> # Replace the first 3 lines with `Hello`
sed -n '/bash$/p' <file> # Address matching with regex; Print lines ending with `bash`
sed '/^$/d' <file> # Delete blank lines
sed '/^START$/,/^END$/d' <file> # Delete lines between START and END
```

## Hold space and pattern space

```shell
# h/H: Copy/Append pattern space to hold space.
# g/G: Copy/Append hold space to pattern space.
# x: Swap the contents of pattern and hold spaces.

sed -n '1~2h;2~2{H;g;s/\n/ /;p}' <file> # Join adjacent lines
sed -n 'N;s/\n/ /p' <file> # Equivalent to above
```

## Scripting

```shell
sed -f script.sed <file> # Run script.sed on file
```

## Links

- [Chess implemented in sed](https://github.com/bolknote/SedChess)
- [2048 implemented in sed](https://github.com/themattrix/sed2048)
