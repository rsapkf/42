---
id: tmux
title: tmux
---

## Configuration

```shell title="~/.tmux.conf"
# Default prefix is `Ctrl+b`
# Remap prefix to `Ctrl+a`
set-option -g prefix C-a
unbind-key C-b
bind-key C-a send-prefix

# Reload tmux config
bind r source-file ~/.tmux.conf \; display-message '~/.tmux.conf sourced!'

# Use Alt-arrow keys without prefix key to switch panes
bind -n M-Left select-pane -L
bind -n M-Right select-pane -R
bind -n M-Up select-pane -U
bind -n M-Down select-pane -D

# Vim style pane selection
bind h select-pane -L
bind j select-pane -D
bind k select-pane -U
bind l select-pane -R

# Use Alt-vim keys without prefix key to switch panes
bind -n M-h select-pane -L
bind -n M-j select-pane -D
bind -n M-k select-pane -U
bind -n M-l select-pane -R

# Use `|` and `-` to split pane horizontally and vertically, respectively
bind-key | split-window -h
bind-key - split-window -v
```

## Key bindings

```shell
<prefix> ? # List all key bindings

# Panes
<prefix> q # Briefly display pane indexes
<prefix> x # Kill the current pane
<prefix> C-a " # Split vertically
<prefix> C-a % # Split horizontally

# Windows
<prefix> c # Create a new window
<prefix> & # Kill the current window
<prefix> n # Move to the next window
<prefix> p # Move to the previous window
<prefix> , # Rename the current window
<prefix> w # Choose the current window interactively
<prefix> M-n # Move to the next window with a bell or activity marker
<prefix> M-p # Move to the previous window with a bell or activity marker
<prefix> [0-9] # Select windows 0-9
<prefix> ! # Move the current pane into a new separate window

<prefix> t # Show the time
<prefix> [ # Enter copy mode to copy text or view the history
<prefix> ] # Paste the most recently copied buffer of text
```

## Miscellaneous

```shell
tmux list-sessions # List all sessions
<prefix> d # Detach from a session
tmux attach -t <session_name> # Re-attach to a session
tmux kill-server # Kill the tmux server and clients and destroy all sessions
tmux list-commands # List the syntax of all commands supported by tmux
```
