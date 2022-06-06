---
id: vim
title: Vim
---

## Basic commands

### Quiting Vim

| Command         | Description                                                       |
| --------------- | ----------------------------------------------------------------- |
| `:q[uit]`       | Quit                                                              |
| `:q[uit]!`      | Quit without writing                                              |
| `:cq[uit]`      | Quit without writing (exit with error)                            |
| `:wq`           | Write the current file and exit                                   |
| `:x`            | Write the current file and exit (only write if there are changes) |
| `:wq!`          | Write the current file and exit (force write)                     |
| `:wq {file}`    | Write to {file} and quit                                          |
| `:wq! {file}`   | Write to {file} and quit (force write)                            |
| `qa`            | Quit all                                                          |
| `:[range]wq[!]` | [file] Same as above, but only write the lines in [range]         |
| `ZZ`            | Write current file, if modified, and exit                         |
| `ZQ`            | Quit current file and exit (same as ":q!")                        |

### Left-right motions

| Command      | Description                                                                    |
| ------------ | ------------------------------------------------------------------------------ |
| `<N>h`       | Left (also: `Ctrl-h`, `BS`, or Left key)                                       |
| `<N>l`       | Right (also: `Space` or Right key)                                             |
| `0`          | To first character in the line (also: Home key)                                |
| `^`          | To first non-blank character in the line                                       |
| `<N>$`       | To the last character in the line (N-1 lines lower) (also: End key)            |
| `g0`         | To first character in screen line (differs from "0" when lines wrap)           |
| `g^`         | To first non-blank character in screen line (differs from "^" when lines wrap) |
| `<N>g$`      | To last character in screen line (differs from "$" when lines wrap)            |
| `gm`         | To middle of the screen line                                                   |
| `<N>`\|      | To column N (default: 1)                                                       |
| `<N>f{char}` | To the Nth occurrence of {char} to the right                                   |
| `<N>F{char}` | To the Nth occurrence of {char} to the left                                    |
| `<N>t{char}` | Till before the Nth occurrence of {char} to the right                          |
| `<N>T{char}` | Till before the Nth occurrence of {char} to the left                           |
| `<N>;`       | Repeat the last "f", "F", "t", or "T" N times                                  |
| `<N>,`       | Repeat the last "f", "F", "t", or "T" N times in opposite direction            |
| `g,`         | Move forward through the change list                                           |
| `g;`         | Move backward through the change list                                          |
| `:changes`   | Print the change list                                                          |

### Up-down motions

| Command | Description                                                                               |
| ------- | ----------------------------------------------------------------------------------------- |
| `<N>k`  | Up N lines (also: Ctrl-P and Up)                                                          |
| `<N>j`  | Down N lines (also: Ctrl-J, Ctrl-N, NL, and Down)                                         |
| `<N>-`  | Up N lines, on the first non-blank character                                              |
| `<N>+`  | Down N lines, on the first non-blank character (also: Ctrl-M and CR)                      |
| `<N>_`  | Down N-1 lines, on the first non-blank character                                          |
| `<N>G ` | Goto line N (default: last line), on the first non-blank character                        |
| `<N>gg` | Goto line N (default: first line), on the first non-blank character                       |
| `<N>%`  | Goto line N percentage down in the file; N must be given, otherwise it is the `%` command |
| `<N>gk` | Up N screen lines (differs from "k" when line wraps)                                      |
| `<N>gj` | Down N screen lines (differs from "j" when line wraps)                                    |

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
| `<N>/{pattern}[/[offset]]<CR>` | Search forward for the Nth occurrence of {pattern}     |
| `<N>?{pattern}[?[offset]]<CR>` | Search backward for the Nth occurrence of {pattern}    |
| `<N>/<CR>`                     | Repeat last search, in the forward direction           |
| `<N>?<CR>`                     | Repeat last search, in the backward direction          |
| `<N>n`                         | Repeat last search                                     |
| `<N>N`                         | Repeat last search, in opposite direction              |
| `<N>*`                         | Search forward for the identifier under the cursor     |
| `<N>#`                         | Search backward for the identifier under the cursor    |
| `<N>g*`                        | Like "\*", but also find partial matches               |
| `<N>g#`                        | Like "#", but also find partial matches                |
| `gd`                           | Goto local declaration of identifier under the cursor  |
| `gD`                           | Goto global declaration of identifier under the cursor |

### Marks and motions

| Command               | Description                                            |
| --------------------- | ------------------------------------------------------ |
| `m{a-zA-Z}`           | Mark current position with mark {a-zA-Z}               |
| `{a-z}                | Go to mark {a-z} within current file                   |
| `{A-Z}                | Go to mark {A-Z} in any file                           |
| `{0-9}                | Go to the position where Vim was previously exited     |
| ``                    | Go to the position before the last jump                |
| `"                    | Go to the position when last editing this file         |
| `[                    | Go to the start of the previously operated or put text |
| '[                    | Go to the start of the previously operated or put text |
| `]                    | Go to the end of the previously operated or put text   |
| ']                    | Go to the end of the previously operated or put text   |
| `<                    | Go to the start of the (previous) Visual area          |
| `>                    | Go to the end of the (previous) Visual area            |
| `.                    | Go to the position of the last change in this file     |
| `'.`                  | Go to the position of the last change in this file     |
| `'{a-zA-Z0-9[]'"<>.}` | Same as `, but on the first non-blank in the line      |
| `:marks`              | Print the active marks                                 |
| `<N>Ctrl-o`           | Go to Nth older position in jump list                  |
| `<N>Ctrl-i`           | Go to Nth newer position in jump list                  |
| `:ju[mps]`            | Print the jump list                                    |
| `:cle[arjumps]`       | Clear the jump list of the current window              |

### Various motions

| Command               | Description                                                                                        |
| --------------------- | -------------------------------------------------------------------------------------------------- |
| `%`                   | Find the next brace, bracket, comment, or "#if"/ "#else"/"#endif" in this line and go to its match |
| `<N>H`                | Go to the Nth line in the window, on the first non-blank                                           |
| `M`                   | Go to the middle line in the window, on the first non-blank                                        |
| `<N>L`                | Go to the Nth line from the bottom, on the first non-blank                                         |
| `<N>go`               | Go to Nth byte in the buffer                                                                       |
| `:[range]go[to][off]` | Go to [off] byte in the buffer                                                                     |

### Using tags

| Command                  | Description                                                           |
| ------------------------ | --------------------------------------------------------------------- |
| `:ta[g][!] {tag}`        | Jump to tag {tag}                                                     |
| `:[count]ta[g][!]`       | Jump to [count]'th newer tag in tag list                              |
| `Ctrl-]`                 | Jump to the tag under cursor, unless changes have been made           |
| `:ts[elect][!] [tag]`    | List matching tags and select one to jump to                          |
| `:tj[ump][!] [tag]`      | Jump to tag [tag] or select from list when there are multiple matches |
| `:lt[ag][!] [tag]`       | Jump to tag [tag] and add matching tags to the location list          |
| `:tagsa`                 | Print tag list                                                        |
| `<N>Ctrl-t`              | Jump back from Nth older tag in tag list                              |
| `:[count]po[p][!]`       | Jump back from [count]'th older tag in tag list                       |
| `:[count]tn[ext][!]`     | Jump to [count]'th next matching tag                                  |
| `:[count]tp[revious][!]` | Jump to [count]'th previous matching tag                              |
| `:[count]tr[ewind][!]`   | Jump to [count]'th matching tag                                       |
| `:tl[ast][!]`            | Jump to last matching tag                                             |
| `:pt[ag] {tag}`          | Open a preview window to show tag {tag}                               |
| `Ctrl-w }`               | Like Ctrl-] but show tag in preview window                            |
| `:pts[elect]`            | Like ":tselect" but show tag in preview window                        |
| `:ptj[ump]`              | Like ":tjump" but show tag in preview window                          |
| `:pc[lose]`              | Close tag preview window                                              |
| `Ctrl-w z`               | Close tag preview window`                                             |

### Scrolling

| Command        | Description                                    |
| -------------- | ---------------------------------------------- |
| `<N>Ctrl-e`    | Window N lines downwards (default: 1)          |
| `<N>Ctrl-d`    | Window N lines Downwards (default: 1/2 window) |
| `<N>Ctrl-f`    | Window N pages Forwards (downwards)            |
| `<N>Ctrl-y`    | Window N lines upwards (default: 1)            |
| `<N>Ctrl-u`    | Window N lines Upwards (default: 1/2 window)   |
| `<N>Ctrl-b`    | Window N pages Backwards (upwards)             |
| `z CR` or `zt` | Redraw, current line at top of window          |
| `z.` or `zz`   | Redraw, current line at center of window       |
| `z-` or `zb`   | Redraw, current line at bottom of window       |
| `<N>zh`        | Scroll screen N characters to the right        |
| `<N>zl`        | Scroll screen N characters to the left         |
| `<N>zH`        | Scroll screen half a screenwidth to the right  |
| `<N>zL`        | Scroll screen half a screenwidth to the left   |

### Inserting text

| Command | Description                                                   |
| ------- | ------------------------------------------------------------- |
| `<N>a`  | Append text after the cursor (N times)                        |
| `<N>A`  | Append text at the end of the line (N times)                  |
| `<N>i`  | Insert text before the cursor (N times) (also: Insert)        |
| `<N>I`  | Insert text before the first non-blank in the line (N times)  |
| `<N>gI` | Insert text in column 1 (N times)                             |
| `gi`    | Insert at the end of the last change                          |
| `<N>o`  | Open a new line below the current line, append text (N times) |
| `<N>O`  | Open a new line above the current line, append text (N times) |

in Visual block mode:

| Command | Description                                             |
| ------- | ------------------------------------------------------- |
| `I`     | Insert the same text in front of all the selected lines |
| `A`     | Append the same text after all the selected lines       |

### Insert mode keys

leaving Insert mode:

| Command            | Description                                 |
| ------------------ | ------------------------------------------- |
| `Esc`              | End Insert mode, back to Normal mode        |
| `Ctrl-c`           | Like Esc, but do not use an abbreviation    |
| `Ctrl-o {command}` | Execute {command} and return to Insert mode |

moving around:

| Command            | Description                             |
| ------------------ | --------------------------------------- |
| cursor keys        | Move cursor left/right/up/down          |
| `Shift-left/right` | One word left/right                     |
| `Shift-up/down`    | One screenful backward/forward          |
| `End`              | Cursor after last character in the line |
| `Home`             | Cursor to first character in the line   |

### Special keys in Insert mode

| Command                              | Description                                                        |
| ------------------------------------ | ------------------------------------------------------------------ |
| `Ctrl-v {char}..`                    | Insert character literally, or enter decimal byte value            |
| `NL` or `CR` or `Ctrl-m` or `Ctrl-j` | Begin new line                                                     |
| `Ctrl-e`                             | Insert the character from below the cursor                         |
| `Ctrl-y`                             | Insert the character from above the cursor                         |
| `Ctrl-a`                             | Insert previously inserted text                                    |
| `Ctrl-@`                             | Insert previously inserted text and stop Insert mode               |
| `Ctrl-r {0-9a-z%#:.-="}`             | Insert the contents of a register                                  |
| `Ctrl-n`                             | Insert next match of identifier before the cursor                  |
| `Ctrl-p`                             | Insert previous match of identifier before the cursor              |
| `Ctrl-x ...`                         | Complete the word before the cursor in various ways                |
| `BS` or `Ctrl-H`                     | Delete the character before the cursor                             |
| `Del`                                | Delete the character under the cursor                              |
| `Ctrl-w`                             | Delete word before the cursor                                      |
| `Ctrl-u`                             | Delete all entered characters in the current line                  |
| `Ctrl-t`                             | Insert one shiftwidth of indent in front of the current line       |
| `Ctrl-d`                             | Delete one shiftwidth of indent in front of the current line       |
| `0 Ctrl-d`                           | Delete all indent in the current line                              |
| `^ Ctrl-d`                           | Delete all indent in the current line, restore indent in next line |

### Digraphs

| Command                                   | Description                   |
| ----------------------------------------- | ----------------------------- |
| `:dig[raphs]`                             | Show current list of digraphs |
| `:dig[raphs] {char1}{char2} {number} ...` | Add digraph(s) to the list    |

### Special inserts

| Command         | Description                                              |
| --------------- | -------------------------------------------------------- |
| `:r [file]`     | Insert the contents of [file] below the cursor           |
| `:r! {command}` | Insert the standard output of {command} below the cursor |

### Deleting text

| Command         | Description                                        |
| --------------- | -------------------------------------------------- |
| `<N>x`          | Delete N characters under and after the cursor     |
| `<N>Del`        | Delete N characters under and after the cursor     |
| `<N>X`          | Delete N characters before the cursor              |
| `<N>d{motion}`  | Delete the text that is moved over with {motion}   |
| `{visual}d`     | Delete the highlighted text                        |
| `<N>dd`         | Delete N lines                                     |
| `<N>D`          | Delete to the end of the line (and N-1 more lines) |
| `<N>J`          | Join N-1 lines (delete EOLs)                       |
| `{visual}J`     | Join the highlighted lines                         |
| `<N>gJ`         | Like "J", but without inserting spaces             |
| `{visual}gJ`    | Like "{visual}J", but without inserting spaces     |
| `:[range]d [x]` | Delete [range] lines [into register x]             |

### Copying and moving text

| Command        | Description                                                                               |
| -------------- | ----------------------------------------------------------------------------------------- |
| `"{char}`      | Use register {char} for the next delete, yank, or put                                     |
| `"*`           | Use register `*` to access system clipboard                                               |
| `:reg`         | Show the contents of all registers                                                        |
| `:reg {arg}`   | Show the contents of registers mentioned in {arg}                                         |
| `<N>y{motion}` | Yank the text moved over with {motion} into a register                                    |
| `{visual}y`    | Yank the highlighted text into a register                                                 |
| `<N>yy`        | Yank N lines into a register                                                              |
| `<N>Y`         | Yank N lines into a register                                                              |
| `<N>p`         | Put a register after the cursor position (N times)                                        |
| `<N>P`         | Put a register before the cursor position (N times)                                       |
| `<N>]p`        | Like p, but adjust indent to current line                                                 |
| `<N>[p`        | Like P, but adjust indent to current line                                                 |
| `<N>gp`        | Like p, but leave cursor after the new text                                               |
| `<N>gP`        | Like P, but leave cursor after the new text                                               |
| `:[range]t.`   | Yank and paste text in range under current line. Prefix range with `-` for relativenumber |

### Changing text

| Command                   | Description                                                                                       |
| ------------------------- | ------------------------------------------------------------------------------------------------- |
| `<N>r{char}`              | Replace N characters with {char}                                                                  |
| `<N>gr{char}`             | Replace N characters without affecting layout                                                     |
| `<N>R`                    | Enter Replace mode (repeat the entered text N times)                                              |
| `<N>gR`                   | Enter virtual Replace mode: Like Replace mode but without affecting layout                        |
| `{visual}r{char}`         | In Visual block, visual, or visual line modes: Replace each char of the selected text with {char} |
| `<N>c{motion}`            | Change the text that is moved over with {motion}                                                  |
| `{visual}c`               | Change the highlighted text                                                                       |
| `<N>cc`                   | Change N lines                                                                                    |
| `<N>S`                    | Change N lines                                                                                    |
| `<N>C`                    | Change to the end of the line (and N-1 more lines)                                                |
| `<N>s`                    | Change N characters                                                                               |
| `{visual}c`               | In Visual block mode: Change each of the selected lines with the entered text                     |
| `{visual}C`               | In Visual block mode: Change each of the selected lines until end-of-line with the entered text   |
| `{visual}~`               | Switch case for highlighted text                                                                  |
| `{visual}u`               | Make highlighted text lowercase                                                                   |
| `{visual}U`               | Make highlighted text uppercase                                                                   |
| `g~{motion}`              | Switch case for the text that is moved over with {motion}                                         |
| `gu{motion}`              | Make the text that is moved over with {motion} lowercase                                          |
| `gU{motion}`              | Make the text that is moved over with {motion} uppercase                                          |
| `{visual}g?`              | Perform rot13 encoding on highlighted text                                                        |
| `g?{motion}`              | Perform rot13 encoding on the text that is moved over with {motion}                               |
| `<N>Ctrl-a`               | Add N to the number at or after the cursor                                                        |
| `<N>Ctrl-x`               | Subtract N from the number at or after the cursor                                                 |
| `<N><{motion}`            | Move the lines that are moved over with {motion} one shiftwidth left                              |
| `<N><<`                   | Move N lines one shiftwidth left                                                                  |
| `<N>>{motion}`            | Move the lines that are moved over with {motion} one shiftwidth right                             |
| `<N>>>`                   | Move N lines one shiftwidth right                                                                 |
| `<N>gq{motion}`           | Format the lines that are moved over with {motion} to 'textwidth' length                          |
| `:[range]ce[nter][width]` | Center the lines in [range]                                                                       |
| `:[range]le[ft][indent]`  | Left-align the lines in [range] (with [indent])                                                   |
| `:[range]ri[ght][width]`  | Right-align the lines in [range]                                                                  |

### Complex changes

| Command                                          | Description                                                                                                                                   |
| ------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------- |
| `<N>!{motion}{command}<CR>`                      | Filter the lines that are moved over through {command}                                                                                        |
| `<N>!!{command}<CR>`                             | Filter N lines through {command}                                                                                                              |
| `{visual}!{command}<CR>`                         | Filter the highlighted lines through {command}                                                                                                |
| `:[range]! {command}<CR>`                        | Filter [range] lines through {command}                                                                                                        |
| `<N>={motion}`                                   | Filter the lines that are moved over through 'equalprg'                                                                                       |
| `<N>==`                                          | Filter N lines through 'equalprg'                                                                                                             |
| `{visual}=`                                      | Filter the highlighted lines through 'equalprg'                                                                                               |
| `:[range]s[ubstitute]/{pattern}/{string}/[g][c]` | Substitute {pattern} by {string} in [range] lines; with [g], replace all occurrences of {pattern}; with [c], confirm each replacement         |
| `:[range]s[ubstitute][g][c]`                     | Repeat previous ":s" with new range and options                                                                                               |
| `&`                                              | Repeat previous ":s" on current line without options                                                                                          |
| `:&&`                                            | Repeat the last substitution with its flags                                                                                                   |
| `:~`                                             | Repeat the last substitute command with the same replacement, but with the last used search pattern                                           |
| `:[range]ret[ab][!] [tabstop]`                   | Set 'tabstop' to new value and adjust white space accordingly                                                                                 |
| `&`                                              | Repeat the last substitute, without its range and flags                                                                                       |
| `g&`                                             | Repeat the last substitute with the same flags but without the same range (it’s global), and replace its pattern with the last search pattern |

### Visual mode

| Command  | Description                                         |
| -------- | --------------------------------------------------- |
| `v`      | Start highlighting characters or stop highlighting  |
| `V`      | Start highlighting linewise or stop highlighting    |
| `Ctrl-v` | Start highlighting blockwise or stop highlighting   |
| `o`      | Exchange cursor position with start of highlighting |
| `gv`     | Start highlighting on previous visual area          |

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
| `<N>.`                              | Repeat last change (with count replaced with N)                                                    |
| `q{a-z}`                            | Record typed characters into register {a-z}                                                        |
| `q{A-Z}`                            | Record typed characters, appended to register {a-z}                                                |
| `q`                                 | Stop recording                                                                                     |
| `<N>@{a-z}`                         | Execute the contents of register {a-z} (N times)                                                   |
| `<N>@@`                             | Repeat previous @{a-z} (N times)                                                                   |
| `:@{a-z}`                           | Execute the contents of register {a-z} as an Ex command                                            |
| `:@@`                               | Repeat previous :@{a-z}                                                                            |
| `:[range]g[lobal]/{pattern}/[cmd]`  | Execute Ex command [cmd](default: ":p") on the lines within [range] where {pattern} matches        |
| `:[range]g[lobal]!/{pattern}/[cmd]` | Execute Ex command [cmd](default: ":p") on the lines within [range] where {pattern} does NOT match |
| `:so[urce] {file}`                  | Read Ex commands from {file}                                                                       |
| `:so[urce]! {file}`                 | Read Vim commands from {file}                                                                      |
| `:sl[eep][sec]`                     | Don't do anything for [sec] seconds                                                                |
| `<N>gs`                             | Goto Sleep for N seconds                                                                           |
| `q/`/`q:`                           | Open commandline window                                                                            |

Note: Pressing `Ctrl-f` in commandline mode opens the commandline window.

### Undo/Redo commands

| Command     | Description                |
| ----------- | -------------------------- |
| `<N>u`      | Undo last N changes        |
| `<N>Ctrl-r` | Redo last N undone changes |
| `U`         | Restore last changed line  |

### External commands

| Command       | Description                                                                |
| ------------- | -------------------------------------------------------------------------- |
| `:sh[ell]`    | Start a shell                                                              |
| `:!{command}` | Execute {command} with a shell                                             |
| `K`           | Lookup keyword under the cursor with 'keywordprg' program (default: "man") |

### Ex ranges

| Command         | Description                                                                  |
| --------------- | ---------------------------------------------------------------------------- |
| `,`             | Separates two line numbers                                                   |
| `;`             | Idem, set cursor to the first line number before interpreting the second one |
| `{number}`      | An absolute line number                                                      |
| `.`             | The current line                                                             |
| `$`             | The last line in the file                                                    |
| `%`             | Equal to `1,$` (the entire file)                                             |
| `*`             | Equal to `'<,'>` (visual area)                                               |
| `'t`            | Position of mark t                                                           |
| `/{pattern}[/]` | The next line where {pattern} matches                                        |
| `?{pattern}[?]` | The previous line where {pattern} matches                                    |
| `+[num]`        | Add [num] to the preceding line number (default: 1)                          |
| `-[num]`        | Subtract [num] from the preceding line number (default: 1)                   |

### Buffers

| Command               | Description                     |
| --------------------- | ------------------------------- |
| `:ls`                 | See a list of current buffers   |
| `:e[dit] ../file.txt` | Open ../file.txt                |
| `:bn`                 | Open next buffer                |
| `:bp`                 | Open previous buffer            |
| `:b {file}`           | Switch between all open buffers |
| `:b#`                 | Open last buffer                |

### Windows

| Command                              | Description                                                            |
| ------------------------------------ | ---------------------------------------------------------------------- |
| `<Ctrl-w> hl`                        | Switching between windows                                              |
| `<Ctrl-w> [HJKL]`                    | Move current window left/right/top/bottom                              |
| `:sp {file}`/`:split`                | Horizontal split                                                       |
| `:new`                               | Create a new window horizontally and start editing an empty file in it |
| `:10sp`                              | 10 lines high horizontal split                                         |
| `Ctrl-w _`                           | Maximize a horizontal split                                            |
| `:resize +5`/`:res +5`               | Increase a split width by 5 lines                                      |
| `:vs[p]`/`:vsplit`                   | Vertical split                                                         |
| `:vne[w]`                            | Create a new window vertically and start editing an empty file in it   |
| <code>Ctrl-w &#124;</code>           | Maximize a vertical split                                              |
| `:vertical resize +5`/`:vert res +5` | Increase a split height by 5 lines                                     |
| `<Ctrl-w> s`                         | Split current window in two                                            |
| `<Ctrl-w> v`                         | Split vertically current window in two                                 |
| `<Ctrl-w> o` / `:only`               | Close other editor groups                                              |
| `<Ctrl-w> =`                         | Equalize the sizes of all windows                                      |
| `Ctrl-w c`                           | Close a window                                                         |
| `Ctrl-w r`                           | Rotate windows                                                         |
| `Ctrl-w R`                           | Rotate windows in opposite direction                                   |
| `Ctrl-w x`                           | Swap current window with its neighbor                                  |
| `Ctrl-w T`                           | Move current window to new tab                                         |

### Tabs

| Command                               | Description                                                                  |
| ------------------------------------- | ---------------------------------------------------------------------------- |
| `:tabn[ext]<N>`                       | Go to next tab page or tab page {count}. The first tab page has number one   |
| `{count}<C-PageDown>`, `{count}gt`    | Same as above                                                                |
| `:tabp[revious]<N>`                   | Go to the previous tab page. Wraps around from the first one to the last one |
| `:tabN[ext]<N>`                       | Same as above                                                                |
| `{count}<C-PageUp>`, `{count}gT`      | Same as above                                                                |
| `:tabfir[st]`                         | Go to the first tab page                                                     |
| `:tabl[ast]`                          | Go to the last tab page                                                      |
| `:tabe[dit] {file}`                   | Open a new tab page with an empty window, after the current tab page         |
| `:[count]tabe[dit]`, `:[count]tabnew` | Same as above                                                                |
| `:tabnew {file}`                      | Open a new tab page with an empty window, after the current tab page         |
| `:[count]tab {cmd}`                   | Execute {cmd} and when it opens a new window open a new tab page instead     |
| `:tabc[lose][!]<N>`                   | Close current tab page or close tab page {count}                             |
| `:tabo[nly][!]`                       | Close all other tab pages                                                    |
| `:tabm[ove][n]`                       | Move the current tab page to after tab page N                                |
| `:tabs`                               | List the tab pages and the windows they contain                              |
| `:tabd[o] {cmd}`                      | Execute {cmd} in each tab page                                               |
| `gt`                                  | Go to next tab                                                               |
| `gT`                                  | Go to previous tab                                                           |
| `<N>gt`                               | Go to Nth tab                                                                |

### Folding

| Command                      | Description                                                                                                 |
| ---------------------------- | ----------------------------------------------------------------------------------------------------------- |
| `zf{motion}` or `{Visual}zf` | Operator to create a fold                                                                                   |
| `zF`                         | Create a fold for [count] lines. Works like "zf"                                                            |
| `zd`                         | Delete one fold at the cursor                                                                               |
| `zD`                         | Delete folds recursively at the cursor                                                                      |
| `zE`                         | Eliminate all folds in the window                                                                           |
| `zo`                         | Open one fold under the cursor.When a count is given, that many folds deep will be opened                   |
| `zO`                         | Open all folds under the cursor recursively                                                                 |
| `zc`                         | Close one fold under the cursor. When a count is given, that many folds deep are closed                     |
| `zC`                         | Close all folds under the cursor recursively                                                                |
| `za`                         | When on a closed fold: open it. When on an open fold: close it and set 'foldenable'                         |
| `zA`                         | When on a closed fold: open it recursively. When on an open fold: close it recursively and set 'foldenable' |
| `zv`                         | View cursor line: Open just enough folds to make the line in which the cursor is located not folded         |
| `zx`                         | Update folds: Undo manually opened and closed folds: re-apply 'foldlevel', then do "zv": View cursor line   |
| `zX`                         | Undo manually opened and closed folds                                                                       |
| `zm`                         | Fold more: Subtract one from 'foldlevel'                                                                    |
| `zM`                         | Close all folds: set 'foldlevel' to 0. 'foldenable' will be set                                             |
| `zr`                         | Reduce folding: Add one to 'foldlevel'                                                                      |
| `zR`                         | Open all folds. This sets 'foldlevel' to highest fold level                                                 |
| `zn`                         | Fold none: reset 'foldenable'. All folds will be open                                                       |
| `zN`                         | Fold normal: set 'foldenable'. All folds will be as they were before                                        |
| `zi`                         | Invert 'foldenable'                                                                                         |
| `[z`                         | Move to the start of the current open fold                                                                  |
| `]z`                         | Move to the end of the current open fold                                                                    |
| `zj`                         | Move downwards to the start of the next fold                                                                |
| `zk`                         | Move upwards to the end of the previous fold                                                                |

### Options

| Command                    | Description                                                                                                       |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------- |
| `:se[t]`                   | Show all modified options                                                                                         |
| `:se[t] all`               | Show all non-termcap options                                                                                      |
| `:se[t] termcap`           | Show all termcap options                                                                                          |
| `:se[t] {option}`          | Set boolean option (switch it on), show string or number option                                                   |
| `:se[t] no{option}`        | Reset boolean option (switch it off)                                                                              |
| `:se[t] inv{option}`       | Invert boolean option                                                                                             |
| `:se[t] {option}={value}`  | Set string/number option to {value}                                                                               |
| `:se[t] {option}+={value}` | Append {value} to string option, add {value} to number option                                                     |
| `:se[t] {option}-={value}` | Remove {value} to string option, subtract {value} from number option                                              |
| `:se[t] {option}?`         | Show value of {option}                                                                                            |
| `:se[t] {option}&`         | Reset {option} to its default value                                                                               |
| `:setl[ocal]`              | Like ":set" but set the local value for options that have one                                                     |
| `:setg[lobal]`             | Like ":set" but set the global value of a local option                                                            |
| `:fix[del]`                | Set value of 't_kD' according to value of 't_kb'                                                                  |
| `:opt[ions]`               | Open a new window to view and set options, grouped by functionality, a one line explanation and links to the help |
| `tabstop (ts)`             | Number of spaces that &lt;Tab> in file uses                                                                       |
| `hlsearch (hls)`           | When there is a previous search pattern, highlight all its matches                                                |
| `ignorecase (ic)`          | Ignore case in search patterns                                                                                    |
| `smartcase (scs)`          | override the 'ignorecase' option if the search pattern contains upper case characters                             |
| `iskeyword (isk)`          | Keywords contain alphanumeric characters and '\_'                                                                 |
| `scroll (scr)`             | Number of lines to scroll with `Ctrl-u` and `Ctrl-d` commands                                                     |
| `expandtab (et)`           | Use spaces when `<Tab>` is inserted                                                                               |
| `autoindent`               | Keep indentation when doing `cc` or `S` in normal mode to replace a line                                          |
| `wrap`                     | Wrap lines                                                                                                        |

## Enable _italics_ in Vim

- Add `highlight Comment cterm=italic` to `~/.vimrc` (**after the colorscheme declaration**).
- If using [jellybeans.vim](https://github.com/nanotech/jellybeans.vim) colorscheme, make sure to add `let g:jellybeans_use_term_italics = 1` too.

## Misc

- `:earlier 10m`: Time travel in time to 10 minutes ago inside Vim.
- `:later 10m`: Time travel in time to 10 minutes later inside Vim.
- `:ab`: View all abbreviations.
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

- Start Vim by ignoring `.vimrc`: `vim -u NONE`
- Default `leader` is `\` (recommended remappings: `<space>`/`,`).
- Alternative to `Esc`: `Ctrl-c` or `Ctrl-[` (recommended remappings: `jk`/`jj`).
- `<CR>` (aka carriage return/cartridge return) means `Enter`/`Return`.

## Easter eggs

- `:set rightleft`
- `:help 42`
- `:help holy-grail`
- `:help uganda`
- `:help quotes`
- `:smile` (doesn't work on Neovim)

## Links

- [vim_diff - Neovim docs](https://neovim.io/doc/user/vim_diff.html)
