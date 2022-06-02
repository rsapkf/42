---
id: rsync
title: rsync
---

## `rsync`

```shell
rsync -r dir1/ dir2
# Sync dir1 with dir2 on the same system; Recurse into directories
# Trailing slash means "the contents of dir1"

# Useful options
# -a, --archive: Preserve symlinks, modification times, group, owner, permissions, etc
# -n, --dry-run: Perform a trial run that doesn't make any changes
# -v, --verbose: Increase the amount of information you are given during the transfer
# -z, --compress: Compress file data during the transfer
# --progress: Show progress during transfer
# --partial: Keep partially transferred files
# -P: Same as --partial --progress
# --delete: Delete extraneous files from dest dirs

rsync -a --delete --backup --backup-dir=<path_to_backup> <source> <destination>
# Store backups of important files

rsync -a --exclude=<pattern_to_exclude> <source> <destination>
# Exclude certain files

rsync -a --exclude=<pattern_to_exclude> --include=<pattern_to_include> <source> <destination>
# Exclude files matching pattern_to_exclude but include files matching pattern_to_include
```

### Push

```shell
rsync [options] <source> <username@host>:<destination>
```

### Pull

```shell
rsync [options] <username@host>:<source> <destination>
```

## `rclone`

```shell
rclone config # Enter an interactive configuration session.
rclone listremotes # List remotes
rclone ls remote:path [options] # List objects in path
rclone lsd remote:path [options] # List directories in path
rclone copy <source> remote:<destination> # Copy source to the remote
rclone sync -i <source> remote:<destination> # Sync source to the remote

# Useful options
# -P: Show progress during transfer
# -i: Enable interactive mode
# -n, --dry-run: Do a trial run with no permanent changes
```
