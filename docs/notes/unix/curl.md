---
id: curl
title: curl
---

### GET

```shell
curl [options] <URL> # Basic usage
curl https://github.com/robots.txt # Display the contents of remote file
curl -O https://github.com/robots.txt # Save the file with the original filename
curl -o main.txt https://github.com/robots.txt # Save the file as `main.txt`
curl -L https://github.com/robots.txt # Follow redirects

curl https://api.github.com/repos/3b1b/manim # Basic GET request to the GitHub API
curl -i https://github.com/robots.txt # Include HTTP-header in the output
curl -I https://github.com/robots.txt # Fetch HTTP-header only
curl -C - -O http://example.org/archive.tar.gz # Resume interrrupted download

# -u, --user: Specify the user name and password for server authentication
curl -u <username:password> https://api.example.com/endpoint # Basic authentication
curl -u <username> https://api.example.com/endpoint # Prompt for password; Avoid having password in history

# -m, --max-time: Set maximum time in seconds that you allow the whole operation to take
curl -m 1800 <URL> # Set a 30 minute timeout
```

### POST

```shell
# -d, --data: Send data in a POST request
curl -d '{"name": "Professor Fansworth", "phone": "1234567890"}' <URL>
curl -d "name=Professor%20Fansworth&phone=1234567890" <URL> # Equivalent to above
curl -d @data.json <URL> # Read data to POST from file

# -H, --header: Specify headers
curl -H "Content-Type: application/json" -H "Authorization: <token>" -d @data.json <URL>
# Can be used multiple times to add/replace/remove multiple headers

# -b, --cookie: Pass the data to the HTTP server as a cookie
curl -b "name=Fry" <URL>
curl --dump-header <file> <URL> # Save cookies received from the server to file
curl -b <file> <URL> # Use cookies from file
curl -c <file> <URL> # Save the incoming cookies using Netscape cookie format

# -x, --proxy: Use the specified HTTP proxy and port number (default: 1080)
curl -u <username:password> -x <proxyhost[:port]> <URL>

# -U, --proxy-user: Specify the user name and password for proxy authentication
curl -U <username:password> -x <proxyhost[:port]> <URL>

# -v, --verbose: Make the fetching more verbose/talkative
# -s, --silent: Make curl silent
```
