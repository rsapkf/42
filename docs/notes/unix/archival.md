---
id: archival
title: Compression and archival
---

## `zip`

- Extension: `.zip`

```shell
zip -r file.zip file.txt dir1 dir2 # Package and compress files and directories (r)ecursively
zip -r file.zip dir1 -x path/to/exclude # E(x)clude unwanted files from being added to the compressed archive
zip -r -9 file.zip path/to/directory # Archive a directory and its contents with the highest level(9) of compression
zip -e -r file.zip path/to/directory # Create an encrypted archive
zip file.zip path/to/file # Add files to an existing archive
zip -d file.zip "foo/*.tmp" # Delete files from an existing archive
zip -r -s 3g file.zip path/to/directory # Archive a directory and its contents to multi-part (s)plit archives (e.g. 3GB parts)
zip -sf file.zip # List files within a specified archive (without extracting them)

unzip file.zip # Extract a zip file
unzip compressed_file(s) -d path/to/put/extracted_file(s) # Extract zip files(s) to given path
unzip -l file.zip # List the contents of a zip file without extracting
unzip -c file.zip # Extract the contents of the file(s) to stdout alongside the extracted file names
```

## `gzip`

- Extension: `.gz`
- Algorithm: [DEFLATE](https://en.wikipedia.org/wiki/Deflate).
- Released in 1992.

```shell
gzip file # Compress `file` and rename it to `file.gz`
gzip -d file.gz # Decompress `file.gz` and replace it with original compressed version
gzip -r dir # Recursively compress files in directory `dir`
gzip -l file.gz # Get information about `file.gz`
gzip -c file > file.gz # Pipe the result to another utility
gzip -c file > compressed_file.gz # Compress a file specifying the output filename
gzip -c -d file.gz > uncompressed_file # Decompress a gzipped file specifying the output filename
gzip -9 file # Specify the compression level: 1 (fastest/worst) - 9 (slowest/best), Default = 6
```

## `bzip2`

- Extension: `.bz2`
- Algorithm: [Burrows–Wheeler transform](https://en.wikipedia.org/wiki/Burrows–Wheeler_transform).
- Released in 1996.

```shell
bzip2 file # Compress `file` and rename it to `file.bz2`
bzip2 -d file.bz2 # Decompress `file.gz` and replace it with original compressed version
bzip2 -s file # Use reduced memory mode
bzip2 -6 file # Specify the memory usage: 1 (lowest/worst) - 9 (highest/best), Default = 9
```

## `xz`

- Extension: `.xz`/`.lzma`
- Algorithm: [LZMA2](https://en.wikipedia.org/wiki/Lempel%E2%80%93Ziv%E2%80%93Markov_chain_algorithm#LZMA2_format).
- Released in 2009.

```shell
xz file # Compress `file` to the xz file format
xz -d file.xz # Decompress a xz file
xz --format=lzma file # Compress a file to the lzma file format
xz -d --format=lzma file.lzma # Decompress an lzma file
xz -l file.xz # Get information about `file.xz`
xz -dc file.xz # Decompress a file and write to stdout
xz -k file # Compress a file, but don't delete the original
xz -0 file # Compress a file using the fastest compression
xz -9 file # Compress a file using the best compression
```

## `tar`

- Extension: `.tar`

Other archival methods are usually paired with `tar` which allows us to preserve directory structures, timestamps, ownership, file-access permissions, etc. of the files we compress.

The leading `-` is optional in `tar` flags.

```shell
tar cvf archive.tar dir # (C)reate a tar archive from directory `dir`, create (v)erbose output to (f)ile `archive.tar`
tar tvf archive.tar # List all files in `archive.tar` verbosely
tar xf archive.tar # Extract all files from `archive.tar`

tar czvf archive.tar.gz dir # (C)reate a tar archive from directory `dir`, compress it with g(z)ip, create (v)erbose output to (f)ile `archive.tar.gz`
tar tzvf archive.tar.gz # List all files in `archive.tar.gz`
tar xzvf archive.tar.gz # Decompress `archive.tar.gz`

tar cjvf archive.tar.bz2 dir # Use bzip2
tar tjvf archive.tar.bz2 # List all files in `archive.tar.bz2`
tar xjvf archive.tar.bz2 # Decompress `archive.tar.bz2`

tar cJvf archive.tar.xz dir # Use xz
tar tJvf archive.tar.xz # List all files in `archive.tar.xz`
tar xJvf archive.tar.xz # Decompress `archive.tar.xz`
```
