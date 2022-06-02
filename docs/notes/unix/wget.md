---
id: wget
title: Wget
---

```shell
wget [options] <URL> # Basic usage
wget https://example.org # Download a web page to local disk
wget -O main.html https://example.org # Save the file as `main.html`
wget -P ~/src/docs/ <URL> # Save the file to `~/src/docs/` directory
wget -o <logfile> <URL> # Log all messages to logfile

wget --limit-rate=500k <URL> # Limit download speed to 500 KBps
wget -tries=100 <URL> # Specify retry attempts

wget -b <URL> # Download in background.
# If no output file is specified via the -o, output is redirected to `wget-log`

wget -i <file> # Read URLs to download from file
wget -w 20 -i <file> # Wait 20 seconds between retrievals

wget --ftp-user=<username> --ftp-password=<password> ftp://example.org/spam.tar # Download via FTP
wget -c https://example.org/archive.tar.gz # Continue interrupted downloads

wget -m -k -p -np -P ~/docs/web/ https://example.org # Download entire website
# -m, --mirror: Turn on options (recursion, time-stamping, etc) suitable for mirroring
# -k, --convert-links: Convert the links to make them suitable for local browsing
# -p, --page-requisites: Download all the files necessary for local browsing (stylesheets, images, sounds, etc)
# -np, --no-parent: Ensure that directories above the hierarchy are not retrieved
```

- Find broken links on your website [[\*](https://www.digitalocean.com/community/tutorials/how-to-find-broken-links-on-your-website-using-wget-on-debian-7)]

  ```shell
  wget --spider -r -nd -nv -H -l 1 -w 2 -o run1.log http://your_server_ip/index.html
  ```
