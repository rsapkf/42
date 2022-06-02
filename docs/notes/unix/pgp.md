---
id: pgp
title: PGP
---

## GnuPG

[Official documentation](https://www.gnupg.org/gph/en/manual.html)

### Generate a GPG key

```shell
gpg --full-generate-key
gpg --gen-key # Equivalent to above
```

### Generate a revocation certificate

```shell
gpg --gen-revoke --output revoke.asc <user ID>
```

[Ways to specify a user ID](https://www.gnupg.org/documentation/manuals/gnupg/Specify-a-User-ID.html)

### List all keys

```shell
gpg --list-secret-keys
gpg --list-key # Equivalent to above
gpg -k # Equivalent to above
gpg --list-secret-keys --keyid-format=long # List the long form of the keys
```

### Export a public key

```shell
gpg --armor --export <user ID> # Print the GPG public key in ASCII armor format
gpg --output username.gpg --export <user ID> # Export in binary format
```

### Import a public key

```shell
gpg --import alice.gpg
```

### Export a fingerprint

```shell
gpg --fingerprint <user ID>
```

### Encrypt a document

```shell
gpg --output doc.gpg --encrypt --recipient <recipient_email> doc
```

### Decrypt a document

```shell
gpg --output doc --decrypt doc.gpg
```
