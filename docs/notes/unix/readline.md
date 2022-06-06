---
id: readline
title: GNU Readline
---

## vi mode

### Entering input mode

| Shortcut              | Command                                                                                                  |
| --------------------- | -------------------------------------------------------------------------------------------------------- |
| `i`                   | Insert before cursor                                                                                     |
| `a`                   | Insert after cursor                                                                                      |
| `I`                   | Insert at the beginning of line                                                                          |
| `A`                   | Insert at the end of line                                                                                |
| `c<movement command>` | Change text of a movement command                                                                        |
| `C` or `c$`           | Change text to the end of line                                                                           |
| `cc` or `S` or `0c$`  | Change current line                                                                                      |
| `s` or c[SPACE]       | Delete a single character under the cursor and enter input mode                                          |
| `r`                   | Replace a single character under the cursor(without leaving the command mode)                            |
| `R`                   | Replace characters under the cursor                                                                      |
| `v`                   | Edit(and execute) the current command in a text editor(an editor in $VISUAL and $EDITOR variables or vi) |

### Moving

| Shortcut       | Command                                           |
| -------------- | ------------------------------------------------- |
| `l` or `SPACE` | Move one character right                          |
| `h`            | Move one character left                           |
| `w`            | Move one word/token right                         |
| `b`            | Move one word/token left                          |
| `W`            | Move one non-blank word right                     |
| `B`            | Move one non-blank word left                      |
| `e`            | Move to the end of the current word               |
| `E`            | Move to the end of the current non-blank word     |
| `0`            | Move to the beginning of line                     |
| `ˆ`            | Move to the first non-blank character of line     |
| `$`            | Move to the end of line                           |
| `%`            | Move to the corresponding opening/closing bracket |

### Searching

| Shortcut | Command                                                         |
| -------- | --------------------------------------------------------------- |
| `fc`     | Move right to the next occurance of c                           |
| `Fc`     | Move left to the previous occurance of c                        |
| `tc`     | Move right to the next occurance of c, then one char backward   |
| `Tc`     | Move left to the previous occurance of c, then one char forward |
| `;`      | Redo the last character finding command                         |
| `,`      | Redo the last character finding command in opposite direction   |

### Deleting

| Shortcut              | Command                                         |
| --------------------- | ----------------------------------------------- |
| `x`                   | Delete a single character under the cursor      |
| `X`                   | Delete a character before the cursor            |
| `d<movement command>` | Delete text of a movement command               |
| `D` or `d$`           | Delete to the end of the line                   |
| `dd` or `0d$`         | Delete current line                             |
| `Ctrl-w`              | Delete the previous word                        |
| `Ctrl-u`              | Delete from the cursor to the beginning of line |

### Undo/Redo

| Shortcut | Command                                           |
| -------- | ------------------------------------------------- |
| `u`      | Undo previous text modification.                  |
| `U`      | Undo all previous text modifications on the line. |
| `.`      | Redo the last text modification.                  |

### Yanking and pasting

| Shortcut              | Command                                  |
| --------------------- | ---------------------------------------- |
| `y<movement command>` | Yank a movement into buffer              |
| `yy`                  | Yank the whole line                      |
| `p`                   | Insert the yanked text at the cursor     |
| `P`                   | Insert the yanked text before the cursor |

### History

| Shortcut              | Command                                                                                                                                                     |
| --------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `k`                   | Move backward one command in history                                                                                                                        |
| `j`                   | Move forward one command in history                                                                                                                         |
| `G`                   | Move to the history line n (you may specify the argument n by typing it on number keys, for example, 15G)                                                   |
| `/string` or `Ctrl-r` | Search history backward for a command matching string                                                                                                       |
| `?string` or `Ctrl-s` | Search history forward for a command matching string (remember that on most machines Ctrl-s stops the output to the terminal (Ctrl-q starts output) and you |
| `n`                   | Repeat search in the same direction as previous                                                                                                             |
| `N`                   | Repeat search in the opposite direction as previous                                                                                                         |

### Completing

| Shortcut                 | Command                         |
| ------------------------ | ------------------------------- |
| `TAB` or `Ctrl-i` or `=` | List possible completions       |
| `-`                      | Insert all possible completions |

### Misc

| Shortcut       | Command                                                                   |
| -------------- | ------------------------------------------------------------------------- |
| `∼`            | Invert the case of the character under cursor, and move a character right |
| `#`            | Prepend # (comment character) to the line and send it to the history list |
| `_`            | Inserts the n-th word of the previous command in the current line         |
| `0, 1, 2, ...` | Sets the numeric argument                                                 |
| `Ctrl-v`       | Insert a character literally (quoted insert)                              |
| `Ctrl-t`       | Transpose (exchange) two characters                                       |

## Emacs mode

### Moving

| Shortcut | Command                                                                    |
| -------- | -------------------------------------------------------------------------- |
| `Ctrl-a` | Move to the start of the current line                                      |
| `Ctrl-e` | Move to the end of the line                                                |
| `Ctrl-f` | Move forward a character                                                   |
| `Ctrl-b` | Move back a character                                                      |
| `Alt-f`  | Move forward to the end of the next word Words are alphanumeric            |
| `Alt-b`  | Move back to the start of the current/previous word Words are alphanumeric |
| `Ctrl-l` | Clear the screen                                                           |

### History

| Shortcut           | Command                                                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------------------------- |
| `Ctrl-p`           | Fetch the previous command from the history list                                                                    |
| `Ctrl-n`           | Fetch the next command from the history list                                                                        |
| `Alt-<`            | Move to the first line in the history                                                                               |
| `Alt->`            | Move to the last line in the history                                                                                |
| `Ctrl-r`           | Search backward through history                                                                                     |
| `Ctrl-s`           | Search forward through history                                                                                      |
| `Alt-p`            | Search backward through history for a given string                                                                  |
| `Alt-n`            | Search forward through history for a given string                                                                   |
| `Ctrl-Alt-y`       | Insert the first argument to the previous command With an argument n, insert the nth word from the previous command |
| `Alt-.` or `Alt-_` | Insert the last argument to the previous command With an argument n, insert the nth word from the previous command  |

### Changing text

| Shortcut          | Command                                  |
| ----------------- | ---------------------------------------- |
| `Ctrl-d`          | Delete the character under the cursor    |
| `Delete`          | Delete the character before the cursor   |
| `Ctrl-v`/`Ctrl-q` | Add the next character you type verbatim |
| `Ctrl-t`          | Transpose characters                     |
| `Alt-t`           | Transpose words                          |
| `Alt-u`           | Uppercase the current word               |
| `Alt-l`           | Lowercase the current word               |
| `Alt-c`           | Capitalize the current word              |

### Killing and yanking

| Shortcut                      | Command                                                                     |
| ----------------------------- | --------------------------------------------------------------------------- |
| `Ctrl-k`                      | Kill (cut) forwards to the end of the line                                  |
| `Ctrl-u` or `Ctrl-x`/`Delete` | Kill (cut) backwards to the start of the line                               |
| `Alt-d`                       | Kill (cut) forwards to the end of the current word                          |
| `Alt-Delete` or `Ctrl-w`      | Kill (cut) backwards to the start of the current word                       |
| `Alt-\`                       | Delete whitespace around the cursor                                         |
| `Ctrl-y`                      | Yank (paste) the top of the kill ring                                       |
| `Alt-y`                       | Rotate the kill ring, and yank (paste) the new top. Only works after a yank |

### Completing

| Shortcut | Command                      |
| -------- | ---------------------------- |
| `TAB`    | Autocomplete.                |
| `Alt-?`  | List possible completions.   |
| `Alt-*`  | Insert possible completions. |

### Macros

| Shortcut   | Command                                       |
| ---------- | --------------------------------------------- |
| `Ctrl-x (` | Begin saving the characters typed as a macro. |
| `Ctrl-x )` | Stop saving the characters typed as a macro.  |
| `Ctrl-x e` | Execute the most recent macro.                |

### Misc

| Shortcut                         | Command                                                                                                                           |
| -------------------------------- | --------------------------------------------------------------------------------------------------------------------------------- |
| `Ctrl-x` or `Ctrl-r`             | Read in the contents of the inputrc file.                                                                                         |
| `Ctrl-g`                         | Abort current editing command.                                                                                                    |
| `Ctrl-_` or `Ctrl-x` or `Ctrl-u` | Incremental undo, separately remembered for each line.                                                                            |
| `Alt-r`                          | Undo all changes made to this line. This is like executing the undo command enough times to return the line to its initial state. |
| `Alt-Space` or `Ctrl-@`          | Set the mark (save this location).                                                                                                |
| `Ctrl-x` or `Ctrl-x`             | Set the mark and jump to the previous mark.                                                                                       |
| `Ctrl-]`                         | Search forwards for a single character in the current line and jump to that location.                                             |
| `Ctrl-Alt-]`                     | Search backwards for a single character in the current line and jump to that location.                                            |
| `Alt-#`                          | Comment the current line and start a new one.                                                                                     |
| `Ctrl-e`                         | Enter Emacs editing mode.                                                                                                         |
| `Ctrl-Alt-j`                     | Enter Vi editing mode.                                                                                                            |
