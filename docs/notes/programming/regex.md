---
id: regex
title: Regular expressions
---

- [Regex cheatsheet - MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Regular_Expressions/Cheatsheet)
- [Regex cheatsheet - docs.linuxfoundation.org](https://docs.linuxfoundation.org/v2/security-service/manage-false-positives/regular-expressions-cheat-sheet)

## Character classes

| Character | Meaning                      |
| --------- | ---------------------------- |
| `.`       | Any character except newline |
| `\d`      | One digit                    |
| `\D`      | One non-digit                |
| `\s`      | One whitespace               |
| `\S`      | One non-whitespace           |
| `\w`      | One word character           |
| `\W`      | One non-word character       |
| `\t`      | Horizontal tab               |
| `\v`      | Vertical tab                 |
| `\r`      | Carriage return              |
| `\n`      | Newline/Linefeed             |
| `\f`      | Form-feed                    |
| `[\b]`    | Backspace character          |
| `\0`      | NUL character                |
| `\`       | Escape a special character   |

## Assertions

| Character | Meaning                                                              |
| --------- | -------------------------------------------------------------------- |
| `^`       | Start of string                                                      |
| `$`       | End of string                                                        |
| `\b`      | Word boundary                                                        |
| `\B`      | Non-word boundary                                                    |
| `x(?=y)`  | Positive lookahead (Matches "x" only if "x" is followed by "y")      |
| `x(?!y)`  | Negative lookahead (Matches "x" only if "x" is not followed by "y")  |
| `(?<=y)x` | Positive lookbehind (Matches "x" only if "x" is preceded by "y")     |
| `(?<!y)x` | Negative lookbehind (Matches "x" only if "x" is not preceded by "y") |

## Groups and ranges

| Character         | Meaning                                                                                     |
| ----------------- | ------------------------------------------------------------------------------------------- |
| x\|y              | Either "x" or "y"                                                                           |
| `[xyz]` `[a-c]`   | Any one of the enclosed characters                                                          |
| `[^xyz]` `[^a-c]` | Anything that is not enclosed in the brackets                                               |
| `(x)`             | Capturing group (matches "x" and remembers the match)                                       |
| `(?<Name>x)`      | Named capturing group (matches "x" and stores it as "Name")                                 |
| `(?:x)`           | Non-capturing group (matches "x" but does not remember the match)                           |
| `\N`              | Match the Nth captured group                                                                |
| `\k<Name>`        | Back reference to the last substring matching the named capturing group specified by "Name" |

## Quantifiers

| Character | Meaning                                                           |
| --------- | ----------------------------------------------------------------- |
| `*`       | 0 or more                                                         |
| `+`       | 1 or more                                                         |
| `?`       | 0 or 1                                                            |
| `x{n}`    | Exactly n occurences of x                                         |
| `x{n, m}` | Between n and m occurences of x                                   |
| `x{n,}`   | n or more occurences of x                                         |
| `?`       | Make the quantifier non-greedy (stop as soon as it finds a match) |

## POSIX classes

| Character    | Meaning                          |
| ------------ | -------------------------------- |
| `[:alnum:]`  | Letters and digits               |
| `[:alpha:]`  | Letters                          |
| `[:ascii:]`  | Ascii codes 0 - 127              |
| `[:blank:]`  | Space or tab only                |
| `[:cntrl:]`  | Control characters               |
| `[:digit:]`  | Decimal digits                   |
| `[:graph:]`  | Visible characters, except space |
| `[:upper:]`  | Uppercase letters                |
| `[:lower:]`  | Lowercase letters                |
| `[:word:]`   | Word characters                  |
| `[:print:]`  | Visible characters               |
| `[:punct:]`  | Visible punctuation characters   |
| `[:space:]`  | Whitespace                       |
| `[:xdigit:]` | Hexadecimal digits               |
