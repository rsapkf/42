---
id: vim
title: Vim
---

[How to exit Vim?](https://stackoverflow.com/a/11828573)

## Basic commands

### Left-right motions

| Command      | Description                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| `<N>h`       | left (also: Ctrl-h, BS, or Left key)                                           |
| `<N>l`       | right (also: Space or Right key)                                               |
| `0`          | to first character in the line (also: Home key)                                |
| `^`          | to first non-blank character in the line                                       |
| `<N>$`       | to the last character in the line (N-1 lines lower) (also: End key)            |
| `g0`         | to first character in screen line (differs from "0" when lines wrap)           |
| `g^`         | to first non-blank character in screen line (differs from "^" when lines wrap) |
| `<N>g$`      | to last character in screen line (differs from "$" when lines wrap)            |
| `gm`         | to middle of the screen line                                                   |
| `<N>`\|      | to column N (default: 1)                                                       |
| `<N>f{char}` | to the Nth occurrence of {char} to the right                                   |
| `<N>F{char}` | to the Nth occurrence of {char} to the left                                    |
| `<N>t{char}` | till before the Nth occurrence of {char} to the right                          |
| `<N>T{char}` | till before the Nth occurrence of {char} to the left                           |
| `<N>;`       | repeat the last "f", "F", "t", or "T" N times                                  |
| `<N>,`       | repeat the last "f", "F", "t", or "T" N times in opposite direction            |

### Up-down motions

| Command | Description                                                                               |
| ------- | ----------------------------------------------------------------------------------------- |
| `<N>k`  | up N lines (also: Ctrl-P and Up)                                                          |
| `<N>j`  | down N lines (also: Ctrl-J, Ctrl-N, NL, and Down)                                         |
| `<N>-`  | up N lines, on the first non-blank character                                              |
| `<N>+`  | down N lines, on the first non-blank character (also: Ctrl-M and CR)                      |
| `<N>_`  | down N-1 lines, on the first non-blank character                                          |
| `<N>G ` | goto line N (default: last line), on the first non-blank character                        |
| `<N>gg` | goto line N (default: first line), on the first non-blank character                       |
| `<N>%`  | goto line N percentage down in the file; N must be given, otherwise it is the `%` command |
| `<N>gk` | up N screen lines (differs from "k" when line wraps)                                      |
| `<N>gj` | down N screen lines (differs from "j" when line wraps)                                    |

### Text object motions

| Command | Description                                                 |
| ------- | ----------------------------------------------------------- |
| `<N>w`  | N words forward                                             |
| `<N>W`  | N blank-separated WORDs forward                             |
| `<N>e`  | N words forward to the end of the Nth word                  |
| `<N>E`  | N words forward to the end of the Nth blank-separated WORD  |
| `<N>b`  | N words backward                                            |
| `<N>B`  | N blank-separated WORDs backward                            |
| `<N>ge` | N words backward to the end of the Nth word                 |
| `<N>gE` | N words backward to the end of the Nth blank-separated WORD |
| `<N>)`  | N sentences forward                                         |
| `<N>(`  | N sentences backward                                        |
| `<N>}`  | N paragraphs forward                                        |
| `<N>{`  | N paragraphs backward                                       |
| `<N>]]` | N sections forward, at start of section                     |
| `<N>[[` | N sections backward, at start of section                    |
| `<N>][` | N sections forward, at end of section                       |
| `<N>[]` | N sections backward, at end of section                      |
| `<N>[(` | N times back to unclosed '('                                |
| `<N>[{` | N times back to unclosed '{'                                |
| `<N>[m` | N times back to start of method (for Java)                  |
| `<N>[M` | N times back to end of method (for Java)                    |
| `<N>])` | N times forward to unclosed ')'                             |
| `<N>]}` | N times forward to unclosed '}'                             |
| `<N>]m` | N times forward to start of method (for Java)               |
| `<N>]M` | N times forward to end of method (for Java)                 |
| `<N>[#` | N times back to unclosed "#if" or "#else"                   |
| `<N>]#` | N times forward to unclosed "#else" or "#endif"             |
| `<N>[*` | N times back to start of a C comment "/\*"                  |
| `<N>]*` | N times forward to end of a C comment "\*/"                 |

### Pattern searches

| Command                        | Description                                            |
| ------------------------------ | ------------------------------------------------------ |
| `<N>/{pattern}[/[offset]]<CR>` | search forward for the Nth occurrence of {pattern}     |
| `<N>?{pattern}[?[offset]]<CR>` | search backward for the Nth occurrence of {pattern}    |
| `<N>/<CR>`                     | repeat last search, in the forward direction           |
| `<N>?<CR>`                     | repeat last search, in the backward direction          |
| `<N>n`                         | repeat last search                                     |
| `<N>N`                         | repeat last search, in opposite direction              |
| `<N>*`                         | search forward for the identifier under the cursor     |
| `<N>#`                         | search backward for the identifier under the cursor    |
| `<N>g*`                        | like "\*", but also find partial matches               |
| `<N>g#`                        | like "#", but also find partial matches                |
| `gd`                           | goto local declaration of identifier under the cursor  |
| `gD`                           | goto global declaration of identifier under the cursor |

### Marks and motions

| Command               | Description                                            |
| --------------------- | ------------------------------------------------------ |
| `m{a-zA-Z}`           | mark current position with mark {a-zA-Z}               |
| `{a-z}                | go to mark {a-z} within current file                   |
| `{A-Z}                | go to mark {A-Z} in any file                           |
| `{0-9}                | go to the position where Vim was previously exited     |
| ``                    | go to the position before the last jump                |
| `"                    | go to the position when last editing this file         |
| `[                    | go to the start of the previously operated or put text |
| '[                    | go to the start of the previously operated or put text |
| `]                    | go to the end of the previously operated or put text   |
| ']                    | go to the end of the previously operated or put text   |
| `<                    | go to the start of the (previous) Visual area          |
| `>                    | go to the end of the (previous) Visual area            |
| `.                    | go to the position of the last change in this file     |
| `'.`                  | go to the position of the last change in this file     |
| `'{a-zA-Z0-9[]'"<>.}` | same as `, but on the first non-blank in the line      |
| `:marks`              | print the active marks                                 |
| `<N>Ctrl-o`           | go to Nth older position in jump list                  |
| `<N>Ctrl-i`           | go to Nth newer position in jump list                  |
| `:ju[mps]`            | print the jump list                                    |

### Various motions

| Command               | Description                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| `%`                   | find the next brace, bracket, comment, or "#if"/ "#else"/"#endif" in this line and go to its match |
| `<N>H`                | go to the Nth line in the window, on the first non-blank                                           |
| `M`                   | go to the middle line in the window, on the first non-blank                                        |
| `<N>L`                | go to the Nth line from the bottom, on the first non-blank                                         |
| `<N>go`               | go to Nth byte in the buffer                                                                       |
| `:[range]go[to][off]` | go to [off] byte in the buffer                                                                     |

### Using tags

| Command                  | Description                                                           |
| ------------------------ | --------------------------------------------------------------------- |
| `:ta[g][!] {tag}`        | jump to tag {tag}                                                     |
| `:[count]ta[g][!]`       | jump to [count]'th newer tag in tag list                              |
| `Ctrl-]`                 | jump to the tag under cursor, unless changes have been made           |
| `:ts[elect][!] [tag]`    | list matching tags and select one to jump to                          |
| `:tj[ump][!] [tag]`      | jump to tag [tag] or select from list when there are multiple matches |
| `:lt[ag][!] [tag]`       | jump to tag [tag] and add matching tags to the location list          |
| `:tagsa`                 | print tag list                                                        |
| `<N>Ctrl-t`              | jump back from Nth older tag in tag list                              |
| `:[count]po[p][!]`       | jump back from [count]'th older tag in tag list                       |
| `:[count]tn[ext][!]`     | jump to [count]'th next matching tag                                  |
| `:[count]tp[revious][!]` | jump to [count]'th previous matching tag                              |
| `:[count]tr[ewind][!]`   | jump to [count]'th matching tag                                       |
| `:tl[ast][!]`            | jump to last matching tag                                             |
| `:pt[ag] {tag}`          | open a preview window to show tag {tag}                               |
| `Ctrl-w }`               | like Ctrl-] but show tag in preview window                            |
| `:pts[elect]`            | like ":tselect" but show tag in preview window                        |
| `:ptj[ump]`              | like ":tjump" but show tag in preview window                          |
| `:pc[lose]`              | close tag preview window                                              |
| `Ctrl-w z`               | close tag preview window`                                             |

### Scrolling

| Command        | Description                                    |
| -------------- | ---------------------------------------------- |
| `<N>Ctrl-e`    | window N lines downwards (default: 1)          |
| `<N>Ctrl-d`    | window N lines Downwards (default: 1/2 window) |
| `<N>Ctrl-f`    | window N pages Forwards (downwards)            |
| `<N>Ctrl-y`    | window N lines upwards (default: 1)            |
| `<N>Ctrl-u`    | window N lines Upwards (default: 1/2 window)   |
| `<N>Ctrl-b`    | window N pages Backwards (upwards)             |
| `z CR` or `zt` | redraw, current line at top of window          |
| `z.` or `zz`   | redraw, current line at center of window       |
| `z-` or `zb`   | redraw, current line at bottom of window       |
| `<N>zh`        | scroll screen N characters to the right        |
| `<N>zl`        | scroll screen N characters to the left         |
| `<N>zH`        | scroll screen half a screenwidth to the right  |
| `<N>zL`        | scroll screen half a screenwidth to the left   |

### Inserting text

| Command | Description                                                   |
| ------- | ------------------------------------------------------------- |
| `<N>a`  | append text after the cursor (N times)                        |
| `<N>A`  | append text at the end of the line (N times)                  |
| `<N>i`  | insert text before the cursor (N times) (also: Insert)        |
| `<N>I`  | insert text before the first non-blank in the line (N times)  |
| `<N>gI` | insert text in column 1 (N times)                             |
| `gi`    | insert at the end of the last change                          |
| `<N>o`  | open a new line below the current line, append text (N times) |
| `<N>O`  | open a new line above the current line, append text (N times) |

in Visual block mode:

| Command | Description                                             |
| ------- | ------------------------------------------------------- |
| `I`     | insert the same text in front of all the selected lines |
| `A`     | append the same text after all the selected lines       |

### Insert mode keys

leaving Insert mode:

| Command            | Description                                 |
| ------------------ | ------------------------------------------- |
| `Esc`              | end Insert mode, back to Normal mode        |
| `Ctrl-c`           | like Esc, but do not use an abbreviation    |
| `Ctrl-o {command}` | execute {command} and return to Insert mode |

moving around:

| Command            | Description                             |
| ------------------ | --------------------------------------- |
| cursor keys        | move cursor left/right/up/down          |
| `Shift-left/right` | one word left/right                     |
| `Shift-up/down`    | one screenful backward/forward          |
| `End`              | cursor after last character in the line |
| `Home`             | cursor to first character in the line   |

### Special keys in Insert mode

| Command                              | Description                                                        |
| ------------------------------------ | ------------------------------------------------------------------ |
| `Ctrl-v {char}..`                    | insert character literally, or enter decimal byte value            |
| `NL` or `CR` or `Ctrl-m` or `Ctrl-j` | begin new line                                                     |
| `Ctrl-e`                             | insert the character from below the cursor                         |
| `Ctrl-y`                             | insert the character from above the cursor                         |
| `Ctrl-a`                             | insert previously inserted text                                    |
| `Ctrl-@`                             | insert previously inserted text and stop Insert mode               |
| `Ctrl-r {0-9a-z%#:.-="}`             | insert the contents of a register                                  |
| `Ctrl-n`                             | insert next match of identifier before the cursor                  |
| `Ctrl-p`                             | insert previous match of identifier before the cursor              |
| `Ctrl-x ...`                         | complete the word before the cursor in various ways                |
| `BS` or `Ctrl-H`                     | delete the character before the cursor                             |
| `Del`                                | delete the character under the cursor                              |
| `Ctrl-w`                             | delete word before the cursor                                      |
| `Ctrl-u`                             | delete all entered characters in the current line                  |
| `Ctrl-t`                             | insert one shiftwidth of indent in front of the current line       |
| `Ctrl-d`                             | delete one shiftwidth of indent in front of the current line       |
| `0 Ctrl-d`                           | delete all indent in the current line                              |
| `^ Ctrl-d`                           | delete all indent in the current line, restore indent in next line |

### Digraphs

| Command                                   | Description                   |
| ----------------------------------------- | ----------------------------- |
| `:dig[raphs]`                             | show current list of digraphs |
| `:dig[raphs] {char1}{char2} {number} ...` | add digraph(s) to the list    |

### Special inserts

| Command         | Description                                              |
| --------------- | -------------------------------------------------------- |
| `:r [file]`     | insert the contents of [file] below the cursor           |
| `:r! {command}` | insert the standard output of {command} below the cursor |

### Deleting text

| Command         | Description                                        |
| --------------- | -------------------------------------------------- |
| `<N>x`          | delete N characters under and after the cursor     |
| `<N>Del`        | delete N characters under and after the cursor     |
| `<N>X`          | delete N characters before the cursor              |
| `<N>d{motion}`  | delete the text that is moved over with {motion}   |
| `{visual}d`     | delete the highlighted text                        |
| `<N>dd`         | delete N lines                                     |
| `<N>D`          | delete to the end of the line (and N-1 more lines) |
| `<N>J`          | join N-1 lines (delete EOLs)                       |
| `{visual}J`     | join the highlighted lines                         |
| `<N>gJ`         | like "J", but without inserting spaces             |
| `{visual}gJ`    | like "{visual}J", but without inserting spaces     |
| `:[range]d [x]` | delete [range] lines [into register x]             |

### Copying and moving text

| Command        | Description                                            |
| -------------- | ------------------------------------------------------ |
| `"{char}`      | use register {char} for the next delete, yank, or put  |
| `"*`           | use register `*` to access system clipboard            |
| `:reg`         | show the contents of all registers                     |
| `:reg {arg}`   | show the contents of registers mentioned in {arg}      |
| `<N>y{motion}` | yank the text moved over with {motion} into a register |
| `{visual}y`    | yank the highlighted text into a register              |
| `<N>yy`        | yank N lines into a register                           |
| `<N>Y`         | yank N lines into a register                           |
| `<N>p`         | put a register after the cursor position (N times)     |
| `<N>P`         | put a register before the cursor position (N times)    |
| `<N>]p`        | like p, but adjust indent to current line              |
| `<N>[p`        | like P, but adjust indent to current line              |
| `<N>gp`        | like p, but leave cursor after the new text            |
| `<N>gP`        | like P, but leave cursor after the new text            |

### Changing text

| Command                   | Description                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `<N>r{char}`              | replace N characters with {char}                                                                  |
| `<N>gr{char}`             | replace N characters without affecting layout                                                     |
| `<N>R`                    | enter Replace mode (repeat the entered text N times)                                              |
| `<N>gR`                   | enter virtual Replace mode: Like Replace mode but without affecting layout                        |
| `{visual}r{char}`         | in Visual block, visual, or visual line modes: Replace each char of the selected text with {char} |
| `<N>c{motion}`            | change the text that is moved over with {motion}                                                  |
| `{visual}c`               | change the highlighted text                                                                       |
| `<N>cc`                   | change N lines                                                                                    |
| `<N>S`                    | change N lines                                                                                    |
| `<N>C`                    | change to the end of the line (and N-1 more lines)                                                |
| `<N>s`                    | change N characters                                                                               |
| `{visual}c`               | in Visual block mode: Change each of the selected lines with the entered text                     |
| `{visual}C`               | in Visual block mode: Change each of the selected lines until end-of-line with the entered text   |
| `{visual}~`               | switch case for highlighted text                                                                  |
| `{visual}u`               | make highlighted text lowercase                                                                   |
| `{visual}U`               | make highlighted text uppercase                                                                   |
| `g~{motion}`              | switch case for the text that is moved over with {motion}                                         |
| `gu{motion}`              | make the text that is moved over with {motion} lowercase                                          |
| `gU{motion}`              | make the text that is moved over with {motion} uppercase                                          |
| `{visual}g?`              | perform rot13 encoding on highlighted text                                                        |
| `g?{motion}`              | perform rot13 encoding on the text that is moved over with {motion}                               |
| `<N>Ctrl-a`               | add N to the number at or after the cursor                                                        |
| `<N>Ctrl-x`               | subtract N from the number at or after the cursor                                                 |
| `<N><{motion}`            | move the lines that are moved over with {motion} one shiftwidth left                              |
| `<N><<`                   | move N lines one shiftwidth left                                                                  |
| `<N>>{motion}`            | move the lines that are moved over with {motion} one shiftwidth right                             |
| `<N>>>`                   | move N lines one shiftwidth right                                                                 |
| `<N>gq{motion}`           | format the lines that are moved over with {motion} to 'textwidth' length                          |
| `:[range]ce[nter][width]` | center the lines in [range]                                                                       |
| `:[range]le[ft][indent]`  | left-align the lines in [range] (with [indent])                                                   |
| `:[range]ri[ght][width]`  | right-align the lines in [range]                                                                  |

### Complex changes

| Command                                          | Description                                                                                                                           |
| ------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------- |
| `<N>!{motion}{command}<CR>`                      | filter the lines that are moved over through {command}                                                                                |
| `<N>!!{command}<CR>`                             | filter N lines through {command}                                                                                                      |
| `{visual}!{command}<CR>`                         | filter the highlighted lines through {command}                                                                                        |
| `:[range]! {command}<CR>`                        | filter [range] lines through {command}                                                                                                |
| `<N>={motion}`                                   | filter the lines that are moved over through 'equalprg'                                                                               |
| `<N>==`                                          | filter N lines through 'equalprg'                                                                                                     |
| `{visual}=`                                      | filter the highlighted lines through 'equalprg'                                                                                       |
| `:[range]s[ubstitute]/{pattern}/{string}/[g][c]` | substitute {pattern} by {string} in [range] lines; with [g], replace all occurrences of {pattern}; with [c], confirm each replacement |
| `:[range]s[ubstitute][g][c]`                     | repeat previous ":s" with new range and options                                                                                       |
| `&`                                              | Repeat previous ":s" on current line without options                                                                                  |
| `:[range]ret[ab][!] [tabstop]`                   | set 'tabstop' to new value and adjust white space accordingly                                                                         |

### Visual mode

| Command  | Description                                         |
| -------- | --------------------------------------------------- |
| `v`      | start highlighting characters or stop highlighting  |
| `V`      | start highlighting linewise or stop highlighting    |
| `Ctrl-v` | start highlighting blockwise or stop highlighting   |
| `o`      | exchange cursor position with start of highlighting |
| `gv`     | start highlighting on previous visual area          |

### Text objects (only in Visual mode or after an operator)

| Command             | Description                                                                                  |
| ------------------- | -------------------------------------------------------------------------------------------- |
| `<N>aw`             | Select "a word"                                                                              |
| `<N>iw`             | Select "inner word"                                                                          |
| `<N>aW`             | Select "a WORD"                                                                              |
| `<N>iW`             | Select "inner WORD"                                                                          |
| `<N>as`             | Select "a sentence"                                                                          |
| `<N>is`             | Select "inner sentence"                                                                      |
| `<N>ap`             | Select "a paragraph"                                                                         |
| `<N>ip`             | Select "inner paragraph"                                                                     |
| `<N>a]`, `a[`       | select '[' ']' blocks                                                                        |
| `<N>i]`, `i[`       | select inner '[' ']' blocks                                                                  |
| `<N>ab`, `a(`, `a)` | Select "a block" (from "[(" to "])")                                                         |
| `<N>ib`, `i)`, `i(` | Select "inner block" (from "[(" to "])")                                                     |
| `<N>a>`, `a<`       | Select "a `<>` block"                                                                        |
| `<N>i>`, `i<`       | Select "inner `<>` block"                                                                    |
| `<N>aB`, `a{`, `a}` | Select "a Block" (from "[{" to "]}")                                                         |
| `<N>iB`, `i{`, `i}` | Select "inner Block" (from "[{" to "]}")                                                     |
| `<N>at`             | Select "a tag block" (from <aaa> to </aaa>)                                                  |
| `<N>it`             | Select "inner tag block" (from <aaa> to </aaa>)                                              |
| `<N>a'`             | Select "a single quoted string"                                                              |
| `<N>i'`             | Select "inner single quoted string"                                                          |
| `<N>a"`             | Select "a double quoted string"                                                              |
| `<N>i"`             | Select "inner double quoted string"                                                          |
| `<N>`a`             | Select "a backward quoted string"                                                            |
| `<N>`i`             | Select "inner backward quoted string"                                                        |
| `<N>ia`             | Select "inner argument" from the [targets.vim plugin](https://github.com/wellle/targets.vim) |
| `<N>aa`             | Select "an argument" from the [targets.vim plugin](https://github.com/wellle/targets.vim)    |

### Repeating commands

| Command                             | Description                                                                                        |
| ----------------------------------- | -------------------------------------------------------------------------------------------------- |
| `<N>.`                              | repeat last change (with count replaced with N)                                                    |
| `q{a-z}`                            | record typed characters into register {a-z}                                                        |
| `q{A-Z}`                            | record typed characters, appended to register {a-z}                                                |
| `q`                                 | stop recording                                                                                     |
| `<N>@{a-z}`                         | execute the contents of register {a-z} (N times)                                                   |
| `<N>@@`                             | repeat previous @{a-z} (N times)                                                                   |
| `:@{a-z}`                           | execute the contents of register {a-z} as an Ex command                                            |
| `:@@`                               | repeat previous :@{a-z}                                                                            |
| `:[range]g[lobal]/{pattern}/[cmd]`  | execute Ex command [cmd](default: ':p') on the lines within [range] where {pattern} matches        |
| `:[range]g[lobal]!/{pattern}/[cmd]` | execute Ex command [cmd](default: ':p') on the lines within [range] where {pattern} does NOT match |
| `:so[urce] {file}`                  | read Ex commands from {file}                                                                       |
| `:so[urce]! {file}`                 | read Vim commands from {file}                                                                      |
| `:sl[eep][sec]`                     | don't do anything for [sec] seconds                                                                |
| `<N>gs`                             | goto Sleep for N seconds                                                                           |

### Undo/Redo commands

| Command     | Description                |
| ----------- | -------------------------- |
| `<N>u`      | undo last N changes        |
| `<N>Ctrl-r` | redo last N undone changes |
| `U`         | restore last changed line  |

### External commands

| Command       | Description                                                                |
| ------------- | -------------------------------------------------------------------------- |
| `:sh[ell]`    | start a shell                                                              |
| `:!{command}` | execute {command} with a shell                                             |
| `K`           | lookup keyword under the cursor with 'keywordprg' program (default: "man") |

### Ex ranges

| Command         | Description                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| `,`             | separates two line numbers                                                   |
| `;`             | idem, set cursor to the first line number before interpreting the second one |
| `{number}`      | an absolute line number                                                      |
| `.`             | the current line                                                             |
| `$`             | the last line in the file                                                    |
| `%`             | equal to 1,$ (the entire file)                                               |
| `*`             | equal to '<,'> (visual area)                                                 |
| `'t`            | position of mark t                                                           |
| `/{pattern}[/]` | the next line where {pattern} matches                                        |
| `?{pattern}[?]` | the previous line where {pattern} matches                                    |
| `+[num]`        | add [num] to the preceding line number (default: 1)                          |
| `-[num]`        | subtract [num] from the preceding line number (default: 1)                   |

### Editing a file

| Command          | Description  | Note                                                                                        |
| ---------------- | ------------ | ------------------------------------------------------------------------------------------- |
| `:e[dit] {file}` | Edit {file}. | We will open file in a new Tab of current Grouped Editor instead of opening in current tab. |

### Multi-window commands

| Command          | Description                                                             |
| ---------------- | ----------------------------------------------------------------------- |
| `:e[dit] {file}` | Edit {file}.                                                            |
| `<Ctrl-w> hl`    | Switching between windows.                                              |
| `:sp {file}`     | Split current window in two.                                            |
| `:vsp {file}`    | Split vertically current window in two.                                 |
| `<Ctrl-w> s`     | Split current window in two.                                            |
| `<Ctrl-w> v`     | Split vertically current window in two.                                 |
| `<Ctrl-w> o`     | Close other editor groups.                                              |
| `:new`           | Create a new window horizontally and start editing an empty file in it. |
| `:vne[w]`        | Create a new window vertically and start editing an empty file in it.   |

### Tabs

| Command                               | Description                                                                   |
| ------------------------------------- | ----------------------------------------------------------------------------- |
| `:tabn[ext]<N>`                       | Go to next tab page or tab page {count}. The first tab page has number one.   |
| `{count}<C-PageDown>`, `{count}gt`    | Same as above                                                                 |
| `:tabp[revious]<N>`                   | Go to the previous tab page. Wraps around from the first one to the last one. |
| `:tabN[ext]<N>`                       | Same as above                                                                 |
| `{count}<C-PageUp>`, `{count}gT`      | Same as above                                                                 |
| `:tabfir[st]`                         | Go to the first tab page.                                                     |
| `:tabl[ast]`                          | Go to the last tab page.                                                      |
| `:tabe[dit] {file}`                   | Open a new tab page with an empty window, after the current tab page          |
| `:[count]tabe[dit]`, `:[count]tabnew` | Same as above                                                                 |
| `:tabnew {file}`                      | Open a new tab page with an empty window, after the current tab page          |
| `:[count]tab {cmd}`                   | Execute {cmd} and when it opens a new window open a new tab page instead.     |
| `:tabc[lose][!]<N>`                   | Close current tab page or close tab page {count}.                             |
| `:tabo[nly][!]`                       | Close all other tab pages.                                                    |
| `:tabm[ove][n]`                       | Move the current tab page to after tab page N.                                |
| `:tabs`                               | List the tab pages and the windows they contain.                              |
| `:tabd[o] {cmd}`                      | Execute {cmd} in each tab page.                                               |

### Folding

| Command                      | Description                                                                                                  |
| ---------------------------- | ------------------------------------------------------------------------------------------------------------ |
| `zf{motion}` or `{Visual}zf` | Operator to create a fold.                                                                                   |
| `zF`                         | Create a fold for [count] lines. Works like "zf".                                                            |
| `zd`                         | Delete one fold at the cursor.                                                                               |
| `zD`                         | Delete folds recursively at the cursor.                                                                      |
| `zE`                         | Eliminate all folds in the window.                                                                           |
| `zo`                         | Open one fold under the cursor.When a count is given, that many folds deep will be opened.                   |
| `zO`                         | Open all folds under the cursor recursively.                                                                 |
| `zc`                         | Close one fold under the cursor. When a count is given, that many folds deep are closed.                     |
| `zC`                         | Close all folds under the cursor recursively.                                                                |
| `za`                         | When on a closed fold: open it. When on an open fold: close it and set 'foldenable'.                         |
| `zA`                         | When on a closed fold: open it recursively. When on an open fold: close it recursively and set 'foldenable'. |
| `zv`                         | View cursor line: Open just enough folds to make the line in which the cursor is located not folded.         |
| `zx`                         | Update folds: Undo manually opened and closed folds: re-apply 'foldlevel', then do "zv": View cursor line.   |
| `zX`                         | Undo manually opened and closed folds                                                                        |
| `zm`                         | Fold more: Subtract one from 'foldlevel'.                                                                    |
| `zM`                         | Close all folds: set 'foldlevel' to 0. 'foldenable' will be set.                                             |
| `zr`                         | Reduce folding: Add one to 'foldlevel'.                                                                      |
| `zR`                         | Open all folds. This sets 'foldlevel' to highest fold level.                                                 |
| `zn`                         | Fold none: reset 'foldenable'. All folds will be open.                                                       |
| `zN`                         | Fold normal: set 'foldenable'. All folds will be as they were before.                                        |
| `zi`                         | Invert 'foldenable'.                                                                                         |
| `[z`                         | Move to the start of the current open fold.                                                                  |
| `]z`                         | Move to the end of the current open fold.                                                                    |
| `zj`                         | Move downwards to the start of the next fold.                                                                |
| `zk`                         | Move upwards to the end of the previous fold.                                                                |

### Options

| Command                    | Description                                                                                                       |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `:se[t]`                   | show all modified options                                                                                         |
| `:se[t] all`               | show all non-termcap options                                                                                      |
| `:se[t] termcap`           | show all termcap options                                                                                          |
| `:se[t] {option}`          | set boolean option (switch it on), show string or number option                                                   |
| `:se[t] no{option}`        | reset boolean option (switch it off)                                                                              |
| `:se[t] inv{option}`       | invert boolean option                                                                                             |
| `:se[t] {option}={value}`  | set string/number option to {value}                                                                               |
| `:se[t] {option}+={value}` | append {value} to string option, add {value} to number option                                                     |
| `:se[t] {option}-={value}` | remove {value} to string option, subtract {value} from number option                                              |
| `:se[t] {option}?`         | show value of {option}                                                                                            |
| `:se[t] {option}&`         | reset {option} to its default value                                                                               |
| `:setl[ocal]`              | like ":set" but set the local value for options that have one                                                     |
| `:setg[lobal]`             | like ":set" but set the global value of a local option                                                            |
| `:fix[del]`                | set value of 't_kD' according to value of 't_kb'                                                                  |
| `:opt[ions]`               | open a new window to view and set options, grouped by functionality, a one line explanation and links to the help |
| `tabstop (ts)`             | number of spaces that &lt;Tab> in file uses                                                                       |
| `hlsearch (hls)`           | When there is a previous search pattern, highlight all its matches.                                               |
| `ignorecase (ic)`          | Ignore case in search patterns.                                                                                   |
| `smartcase (scs)`          | Override the 'ignorecase' option if the search pattern contains upper case characters.                            |
| `iskeyword (isk)`          | keywords contain alphanumeric characters and '\_'.                                                                |
| `scroll (scr)`             | Number of lines to scroll with `Ctrl-u` and `Ctrl-d` commands.                                                    |
| `expandtab (et)`           | use spaces when `<Tab>` is inserted                                                                               |
| `autoindent`               | Keep indentation when doing `cc` or `S` in normal mode to replace a line.                                         |
| `wrap`                     | Wrap lines.                                                                                                       |

_List copied and modified from [VSCodeVim/Vim](https://github.com/VSCodeVim/Vim/blob/master/ROADMAP.md)._

## Enable _italics_ in Vim

- Add `highlight Comment cterm=italic` to `~/.vimrc` (**after the colorscheme declaration**).
- If using [jellybeans.vim](https://github.com/nanotech/jellybeans.vim) colorscheme, make sure to add `let g:jellybeans_use_term_italics = 1` too.

## Buffers

- `:ls`: See a list of current buffers.
- `:e ../file.txt`: Open ../file.txt.
- `:b file`: Switch between all open files.
- `:b#`: Open last visited file.

In normal mode:

- `gt`: Go to next tab.
- `gT`: Go to previous tab.
- `<i>gt`: Go to tab in position `i`.

## Splits

- `:split`/`:sp`: Horizontal split.
  - `:10sp`: 10 lines high horizontal split.
  - `Ctrl-w _`: Maximize a horizontal split.
  - `Ctrl-w =`: Equalize splits.
  - `:resize +5`/`:res +5`: Increase a split height by 5 lines.
- `:vsplit`/`:vs`: Vertical split.
  - `Ctrl-w |`: Maximize a vertical split.
  - `Ctrl-w =`: Equalize splits.
  - `:vertical resize +5`/`:vert res +5`: Increase a split height by 5 lines.
- `Ctrl-w c`: Close a split.
- `Ctrl-w R`: Swap splits.

## Command mode

- `:earlier 10m`: Time travel in time to 10 minutes ago inside Vim.
- `:later 10m`: Time travel in time to 10 minutes later inside Vim.
- `:norm Ibegin`: Go to the beginning of a line and enter `begin`, then repeat across all selected lines.
- `!pwd`: Run `pwd` terminal command from vim.
- `:read date`: Insert the output of `date` command in current line.
  - `:30read date`: Insert the output of `date` command in line 30.
  - `:$read date`: Insert the output of `date` command in the last line.
- `:10,15s/old/new/g`: Substitute all occurences of `old` with `new` from line 10 to 15.
- `:.,.+5s/old/new/g`: Substitute all occurences of `old` with `new` from the current line to the next 5 lines.
- `:g/import/d`: Delete all lines including the word `import`.
- `:g!/import/d`: Delete all lines not including the word `import`.
- `:g/^@/m$`: Move all lines starting with `@` to the end of the document.
- `:g/^$/d`: Delete all blank lines in a document.

## Misc

- Start Vim by ignoring `.vimrc`: `vim -u NONE`
- Default `leader` is `\` (recommended remappings: `<space>`/`,`).
- Alternative to `Esc`: `Ctrl-c` or `Ctrl-[` (recommended remappings: `jk`/`jj`).
- `<CR>` (aka carriage return/cartridge return) means `Enter`/`Return`.

## Easter eggs

- `:help 42`
- `:smile` (doesn't work on Neovim)

## Links

- [vim_diff - Neovim docs](https://neovim.io/doc/user/vim_diff.html)
