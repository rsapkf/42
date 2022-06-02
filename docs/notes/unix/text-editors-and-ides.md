---
id: text-editors-and-ides
title: Text editors and IDEs
---

## VSCode

[Keyboard shortcuts for Linux](https://code.visualstudio.com/shortcuts/keyboard-shortcuts-linux.pdf)

| Shortcut            | Action                          |
| ------------------- | ------------------------------- |
| `Ctrl-Shift-p`      | Open Command Palette.           |
| `Ctrl-,`            | Open user settings.             |
| `Ctrl-b`            | Toggle Explorer.                |
| `Ctrl-Shift-d`      | Open Run and debug.             |
| `Ctrl-j`            | Toggle built-in terminal.       |
| `Ctrl-p`            | Open a file.                    |
| `Ctrl-Tab`          | Tab through open files.         |
| `Ctrl-\`            | Move file to split windows.     |
| `Ctrl-f`            | Search/Replace in file.         |
| `Ctrl-Shift-f`      | Open Global Search.             |
| `Ctrl-/`            | Toggle comment.                 |
| `Shift-Alt-Up/Down` | Duplicate line.                 |
| `Ctrl-Click`        | Multiple cursors.               |
| `Ctrl-d`            | Select word under the cursor.   |
| `Ctrl-Shift-l`      | Select all instances of a word. |
| `Ctrl-Click`        | Jump to function definition.    |
| `Ctrl-k z`          | Zen Mode.                       |

## Sublime Text

To enable Vim mode, go to user settings (**Settings** > **Preferences**) and remove `Vintage` from `ignored_packages` array.

## gedit

- `Ctrl-;`: Open emoji window.
- `F9`: Toggle side panel.
- Install [Dracula theme](https://draculatheme.com/gedit)
  ```shell
  wget https://raw.githubusercontent.com/dracula/gedit/master/dracula.xml
  mv dracula.xml $HOME/.local/share/gedit/styles/
  # Activate in gedit's preferences dialog.
  ```
