---
id: unix
title: '*nix'
---

## Some useful commands

```shell
# Free memory (2.2G/7.6G)
free -h | awk '/^Mem:/ {print $3 "/" $2}'

# Top 10 memory intensive processes
ps axch -o cmd:15,%mem --sort=-%mem | sed 10q

# Top 10 CPU intensive processes
ps axch -o cmd:15,%cpu --sort=-%cpu | sed 10q

# Does your terminal emulator support _italics_?
echo -e "\e[3m foo \e[23m"

# `dd` command usage to burn an iso to a flash drive
dd if=Downloads/archlinux-x86_64.iso of=/dev/sdb status=progress

# Display the SSID of connected network
nmcli -t -f active,ssid dev wifi | egrep '^yes' | cut -d\' -f2

# Colormap in terminal
msgcat --color=test

# Set a random wallpaper from r/earthporn
wget -O - -q reddit.com/r/earthporn.json | jq '.data.children[] | .data.url' | sed 1q | xargs feh --bg-fill

# Browse memes from r/memes
wget -O - -q reddit.com/r/memes.json | jq '.data.children[] | .data.url' | xargs feh

# See your most run commands
history | awk '{print $2}' | sort | uniq -c | sort -rn | sed 10q

# Runs `command1` 1 out of 10 times
[ $[$RANDOM % 10] = 0 ] && command1 || command2
[ $[$RANDOM % 10] = 0 ] && cmatrix || clear # will run `cmatrix` 1 out of 10 times you execute this command

# Find out which shell you are on
echo $0 # or one of these
echo $SHELL
pstree $$
cat /proc/$$/cmdline
ps -p $$
ps -p $$ -oargs=
ps -p $$ -ocomm=

# Count number of lines in a file
cat <file> | wc -l # or one of these
cat <file> | nl -ba
grep -c ".*" <file>
sed -n '$=' <file>
awk 'END{print NR}' <file>
cat -n <file> | tail -n 1 | cut -f1

# Find your IP address
# Private IP
hostname -I # or one of these
ip addr
ifconfig
# Public IP
curl ipinfo.io # or one of these
curl -s https://icanhazip.com
wget -qO- https://checkip.amazonaws.com
host myip.opendns.com resolver1.opendns.com | grep "myip.opendns.com has" | awk '{print $4}'
dig +short myip.opendns.com @resolver1.opendns.com
```

- Find and replace all occurences of a string/pattern in text files in a directory recursively [[\*](https://stackoverflow.com/a/1585189)]

  ```shell
  find /home/<username>/ -type f | xargs sed -i  's/<old>/<new>/g'
  ```

## Map `Caps Lock` to `Ctrl` and vice versa

- [Moving The Ctrl Key - EmacsWiki](https://www.emacswiki.org/emacs/MovingTheCtrlKey)
- [Remap Caps Lock - WikiWikiWeb](http://wiki.c2.com/?RemapCapsLock)

```shell
# On Debian
vim /etc/default/keyboard
# Change the line that reads `XKBOPTIONS=""` to `XKBOPTIONS="ctrl:swapcaps"`
sudo dpkg-reconfigure -phigh console-setup
```

## Suckless

### Patching suckless tools

```shell
# For tarballs
patch -p1 < path/to/patch.diff

# For git repositories
git apply path/to/patch.diff
```

### sent

- Make sure to install [`farbfeld`](https://tools.suckless.org/farbfeld/) to
  have images show up on slides.

## Change username and usergroup

[[\*](https://askubuntu.com/a/317008)]

1. Drop into a tty (`Ctrl + Alt + F3`).
2. Login with username and password.
3. Set a password for root account:
   ```shell
   sudo passwd root
   ```
4. Log out:
   ```shell
   exit
   ```
5. Login with root account.
6. Change the username and home folder:
   ```shell
   usermod -l <new_username> -d /home/<new_username> -m <old_username>
   ```
7. Change the group name:
   ```shell
   groupmod -n <new_group> <old_group>
   ```
8. Lock the root account.
9. Log out.
10. Exit tty.

## Connect to Wi-Fi network with `nmcli`

```shell
nmcli dev wifi # Show available access points
nmcli dev wifi connect <access_point> password <password> # Connect
```

## Connect to a hidden Wi-Fi network with `nmcli`

```shell
nmcli c add type wifi con-name <connect name> ifname wlp1s0 ssid <SSID>
nmcli con modify <connect name> wifi-sec.key-mgmt wpa-psk
nmcli con modify <connect name> wifi-sec.psk <password>
nmcli con up <connect name>
```

## Change MAC address with `macchanger`

```shell
sudo service network-manager stop
sudo ifconfig wlan0 down
sudo macchanger -r wlan0
sudo ifconfig wlan0 up
sudo service network-manager start
```

## Desktop entry template

[[\*](https://specifications.freedesktop.org/desktop-entry-spec/desktop-entry-spec-latest.html#recognized-keys), [\*](https://wiki.archlinux.org/index.php/Desktop_entries)]

Example:

```\ title="~/.local/share/applications/firefox_dev.desktop"
[Desktop Entry]
Name=Firefox Developer
GenericName=Firefox Developer Edition
Exec=/opt/firefox_dev/firefox/firefox
Terminal=false
Icon=/opt/firefox_dev/firefox/browser/chrome/icons/default/default128.png
Type=Application
Categories=Application;Network;X-Developer;
Comment=Firefox Developer Edition Web Browser.
```

## Redirection

Standard I/O streams:

| Stream | Description     | File descriptor |
| ------ | --------------- | --------------- |
| stdin  | Standard input  | 0               |
| stdout | Standard output | 1               |
| stderr | Standard error  | 2               |

### Redirecting input `<`

**stdin** usually takes input from the keyboard.

```shell
$ command < file.txt # Executing `command` with `file.txt` as the source of input
```

The output of one command can be redirected as the input for another with the `|` (pipe) character.

```shell
$ echo 'one two three' | tr a-z A-Z
ONE TWO THREE
```

Using [here document](https://en.wikipedia.org/wiki/Here_document) and [here string](https://en.wikipedia.org/wiki/Here_string) with `<<` and `<<<` respectively:

```shell
$ tr a-z A-Z << END_TEXT
one two three
uno dos tres
END_TEXT
ONE TWO THREE
UNO DOS TRES

$ tr a-z A-Z <<< "one two three"
ONE TWO THREE
```

### Redirecting output `>`

Unless redirected, **stdout** shows its output to the terminal.

```shell
$ command > file.txt # Redirect output of `command` to `file.txt`
# This will clobber (overwrite) any existing data in `file.txt`

# To avoid clobbering, use `>>`
$ command >> file.txt
# This will append the output to the end of `file.txt`
```

Clobbering can be disabled by `set -o noclobber` [[\*](https://unix.stackexchange.com/questions/452865/are-there-any-disadvantages-of-setting-noclobber)]. If this is enabled but you want to temporary turn off noclobber for a single operation, use `>|`. To re-enable, use `set +o noclobber`.

### Redirecting error `2>`

Unless redirected, **stderr** shows the error messages to the terminal.

```shell
$ command 2> file.txt # Redirect errors from `command` to `file.txt`
$ command 2>> file.txt # Avoid clobbering

# To redirect stdout and stderr to the same file, use `2>&1`
$ command 2>&1 file.txt

$ ls | xargs du -sk 2> /dev/null
# Redirecting stderr to the `/dev/null` device
```

## Useful programs

### `tr`

Translate or delete characters.

```shell
> echo 'reddit' | tr 'a-z' 'A-Z' # Change case from lowercase to uppercase
> echo 'reddit' | tr [:lower:] [:upper:] # Equivalent to above
REDDIT
```

### `tee`

Read from standard input and write to both standard output and one or more files.

```shell
# This will write the JSON response to `response.json` as well as stdout
> curl https://api.github.com/repos/google/zx | tee response.json
{
  "id": 364474335,
  "name": "zx",
  "full_name": "google/zx",
  "visibility": "public",
  "forks": 469,
  "owner": {
    "login": "google",
    "id": 1342004,
    ...
  ...
}
> cat response.json
{
  "id": 364474335,
  "name": "zx",
  "full_name": "google/zx",
  "visibility": "public",
  "forks": 469,
  "owner": {
    "login": "google",
    "id": 1342004,
    ...
  ...
}

# Useful options
# -a, --append: Append to the given file(s), do not overwrite
```

### `cut`

Remove sections from each line of files.

```shell
> cut -f 5 main.tsv # Output the fifth field from `main.tsv`

# Custom delimiter
> cut -d ":" -f 3- main.txt # Output the third through the last field from `main.txt`; Use `:` as delimiter
> cut -d "," -f 2,3 ratings.csv # Output only the 2nd and 3rd fields from `ratings.csv`; Use `,` as delimiter
> cut -d, -f 2,3 ratings.csv # Equivalent to above

> echo "This is an example." | cut -c3- # Output the third through the last character of the input
is is an example.

> cut -c1-20 <file> # Output the first through the 20th character of _each line_ of file
```

### `seq`

Print a sequence of numbers.

```shell
> seq 3 # Generate numbers upto 3
1
2
3

> seq -s " | " 7 # Use custom separator (default: `\n`)
1 | 2 | 3 | 4 | 5 | 6 | 7

> seq -s " " 10 14 # Generate numbers from 10 upto 14
10 11 12 13 14

> seq -s " " 10 2 14 # Skip every other number
10 12 14

> seq -s " " 10 -2 6 # Going backwards
10 8 6

> seq -w 7 12 # Equalize width by padding with leading zeroes
07
08
09
10
11
12

> echo {0..9} # Alternative to `seq`
0 1 2 3 4 5 6 7 8 9
```

### System monitoring

- `ps`: Report a snapshot of the current processes.
  - `ps aux | grep nginx`: Search for "nginx" in `ps` output.
- `htop`: Interactive process viewer.
- `top`: Display running processes.
- `cat /proc/loadavg`: Load average.
- `uptime`: Tell how long the system has been running.
- `w`: See who is logged on and what they are doing.
- `acpi`: Shows battery status and other ACPI information.
  - (upower -i \`upower -e | grep 'BAT'\`): Battery information.
- `pidof [program]`: Find the process ID of a running program.

### System info

- `lsb_release -a`: Print distribution-specific information.
- `cat /etc/*release`
- `uname -a`: Print system information.
- `cat /etc/fstab`: Static file system information.

### Networking

- `vim /etc/resolv.conf`: Change DNS server.
- `ip`: Show/Manipulate routing, network devices, interfaces and tunnels.
  - `ip addr`: Display IP addresses and property information.
- `ss`: Investigate sockets.

### Misc

- `man [program]`: View man pages for programs.
- `apropos`: Search the manual page names and descriptions.
- `[program] --help/-h`
- `cat`
- `tac`
- `less`
- `echo`
- `head <file>`: Output the first 10 lines of file.
  - `head -N <file>`: Output the first N lines of file.
  - `cat <file> | sed Nq`: Output the first N lines of file.
- `tail <file>`: Output the last 10 lines of file.
- `rm`: Remove files or directories.
  - `rm -f !(test.txt)`: Remove all files in the directory except `test.txt`.
- `ls`
  - `ls -d */`: List directories only.
- `date`: Print or set the system date and time.
  - `date +%s`: Unix timestamp.
- `time`: Run programs and summarize system resource usage.
- `cal`: Displays a calendar.
- `cd`: Change working directory.
  - `cd -`: Change to previous working directory.
  - `cd ~-`: Same thing as `cd -` without echoing the path.
- `pwd`: Print name of current/working directory.
- `passwd`: Change user password.
- `alias`: List and create aliases.
- `mkdir -p folder/{sub1,sub2}/{sub1,sub2,sub3}`: Make directories/subdirectories quickly.
- `chsh`: Change login shell.
- `fdisk`: Disk partition utility.
- `cfdisk`: Disk partition utility.
- `dd`: Convert or copy a file, create bootable USBs from ISOs. **use cautiously. can destroy data irreversibly.** To monitor the progress of an operation, add the `status=progress` option to the command.
- `wc`: Print newline, word and byte counts for files.
  - `ls ~/docs | wc -l`: Print the number of files/folders in `~/docs`.
- `history`: Show history.
  - `<space>man man`: Don't add `man man` command to history.
  - `fc`: Fix a long command that you messed up.
  - `!666`: Run 666th command in history.
  - `!-n`: Refer to the command _n_ lines back.
  - `!-1` / `!!`: Refer to the previous command.
  - `sudo !!`: Run previous command but append `sudo` at the beginning.
  - `[program] !!`: Run previous command using [program].
- `lsusb`: List USB devices.
- `lsblk`: List information about block devices.
- `env` / `printenv`: List all environmental variables.
- `free`: Display amount of free and used memory in the system.
- `df`: Report file system disk space usage.
- `du`: Estimate file space usage.
  - `du -sh dir/`: Check size of dir/ on disk.
- `fc-list`: List available fonts.
- `timedatectl`: Control the system time and date.
  - `cat /etc/timezone`: (On Debian) Print current timezone.
- `xprop`: Property displayer for X.
- `shred`: Overwrite the specified file(s) repeatedly, in order to make it harder for even very expensive hardware probing to recover the data.
- `mount`: Mount a filesystem.
- `clear`: Clear the terminal screen.
- `file`: Determine file type.
- `basename`: Given a pathname, returns the basename of a file or directory.
- `tree`: List contents of directories in a tree-like format.
- `xev`: Print contents of X events.
- `yes`: Output a string repeatedly until killed.
- `split`: Split a file into pieces.
- `csplit`: Split a file into sections determined by context lines.

## Easter eggs

- `calendar -f /usr/share/calendar/calendar.lotr -A 365`

## Misc

- Drop into a tty (tty3): `Ctrl + Alt + F3`
- Move between different ttys: `Alt + Left/Right`
- Mod keys:
  - Mod1: Left Alt
  - Mod3: Right Alt
  - Mod4: Super/Windows
