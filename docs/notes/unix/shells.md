---
id: shells
title: Shells
---

## bash

```shell
<Ctrl-r> # reverse-i-search
set -o vi # Enable vi mode in Bash
```

Bash scripting tip:

```shell
> var="apple orange"
> echo $var
apple orange

> echo $var | awk '{print $1}'
apple
> time ( echo $var | awk '{print $1}' )
apple
( echo $var | awk '{print $1}'; )  0.01s user 0.00s system 107% cpu 0.008 total

> echo $var | awk '{print $2}'
orange
> time ( echo $var | awk '{print $2}' )
orange
( echo $var | awk '{print $2}'; )  0.00s user 0.01s system 107% cpu 0.008 total
```

awk takes ~0.008 seconds whereas these builtin alternatives take just ~0.002 seconds

```shell
> echo "${var%% *}"
apple
> time ( echo "${var%% *}" )
apple
( echo "${var%% *}"; )  0.00s user 0.00s system 71% cpu 0.002 total

> echo "${var##* }"
orange
> time ( echo "${var##* }" )
orange
( echo "${var##* }"; )  0.00s user 0.00s system 72% cpu 0.002 total
```

## zsh

```shell
bindkey -v # vi mode in zsh shell
bindkey '^R' history-incremental-search-backward # Backward reverse search in zsh
take <dir_name> # Create a new directory `dir_name` and changes to it

# Batch rename files with `zmv`
autoload zmv
zmv -n '(*).log' '$1.txt' # Preview the result of a move without making any actual changes

<Ctrl-q>
# "Parks" the command you're currently typing and takes you back to the prompt,
# letting you start over and type another command. Once you run that other command,
# the original command is un-parked and refills the command line.
```

## fish

- On Ubuntu, I had problems with `ripgrep` completions while installing `fish`.
  Fixed it by doing:

  ```
  apt -o Dpkg::Options::="--force-overwrite" -f upgrade
  ```

  ```
  dpkg-divert --add --divert  /usr/share/fish/completions/rg.fish.0 --rename --package ripgrep /usr/share/fish/completions/rg.fish
  dpkg-divert --add --divert  /usr/share/fish/completions/bat.fish.0 --rename --package bat /usr/share/fish/completions/bat.fish
  ```

  More info: https://github.com/fish-shell/fish-shell/issues/5822
