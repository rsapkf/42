---
id: ssh
title: SSH
---

### Check for existing keys

```shell
ls -al ~/.ssh
```

### Generate a new key

```shell
ssh-keygen -t ed25519 -C "your_email@example.org" # Recommended
ssh-keygen -t rsa -b 4096 -C "your_email@example.org" # For legacy systems
```

### Add your key to the ssh-agent

```shell
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/<Private key file>
```
