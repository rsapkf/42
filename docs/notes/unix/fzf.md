---
id: fzf
title: fzf
---

## `fzf`

[`fzf`](https://github.com/junegunn/fzf) is a command line fuzzy finder. It can search through the entries in a list of files, command history, processes, hostnames, bookmarks, git commits, etc.

`fzf` provides 3 keyboard shortcuts:

### **`Ctrl-t`**

Paste the selected **files and directories** onto the command-line.

By default, `fzf` uses `find` to search for files. This can be re-configured by setting `FZF_CTRL_T_COMMAND` in `.bashrc`/`.zshrc`:

```shell title="~/.zshrc"
# Set fd as the default source for fzf
export FZF_DEFAULT_COMMAND='fd -type f --follow --hidden --exclude .git'

# Apply the command to CTRL-T as well
export FZF_CTRL_T_COMMAND="$FZF_DEFAULT_COMMAND"

# Preview contents of files
export FZF_CTRL_T_OPTS="--preview '(highlight -O ansi -l {} 2> /dev/null || cat {} || tree -C {}) 2> /dev/null | head -200'"

# Set color scheme to Dracula
export FZF_DEFAULT_OPTS=$FZF_DEFAULT_OPTS'
--color=dark
--color=fg:-1,bg:-1,hl:#5fff87,fg+:-1,bg+:-1,hl+:#ffaf5f
--color=info:#af87ff,prompt:#5fff87,pointer:#ff87d7,marker:#ff87d7,spinner:#ff87d7
'

# Start the finder in a tmux split pane
export FZF_TMUX=1
```

### **`Ctrl-r`**

Paste the selected **command from history** onto the command-line.

Pressing `Ctrl-r` again will show the commands in chronological order.

### **`Alt-c`**

**cd** into the selected directory.

```shell title="~/.zshrc"
# Use fd here as well
export FZF_ALT_C_COMMAND="fd -t d"

# Preview files
export FZF_ALT_C_OPTS="--preview 'tree -C {} | head -200'"
```

### Using the finder

- `Ctrl-k` / `Ctrl-j` (or `Ctrl-p` / `Ctrl-n`): Move cursor up/down.
- `Enter`: Select the item.
- `CTRL-C` / `CTRL-G` / `ESC`: Exit.
- On multi-select mode (`-m`), `Tab` and `Shift-Tab`: Mark multiple items.

## `fzf.vim`

`fzf.vim` provides `fzf`-like capabilities inside Vim. Some useful [commands](https://github.com/junegunn/fzf.vim#commands):

```shell
:Files # $FZF_DEFAULT_COMMAND
:GFiles # `git ls-files`
:GFiles? # `git status`
:Buffers # Open buffers
:Histoy: # Command history
:Maps # Normal mode mappings
:Colors # Color schemes
:Rg # Search in files (ripgrep)
:Tags # `ctags -R`
:Snippets # Snippets (UltiSnips)
:Commits # Git commits (fugitive.vim)
```

### Key bindings

- `Ctrl-t`: Open in a new tab.
- `Ctrl-x`: Open in a new split.
- `Ctrl-v`: Open in a new vertical split.

Append `!` to commands to open `fzf` in fullscreen.
