---
id: git
title: Git
---

## Basics

```shell
git config # Set user-specific configuration values like email, username, editor, etc
git clone # Clone a repository into a new directory
git init # Create an empty Git repository

git add # Add files for staging
git rm # Remove files from the working tree and from the index
git status # Show changes staged for next commit
git diff # Show changes between commits, commit and working tree, etc
git show # Show information about any git object
git log # Show commit logs
git bisect # Use binary search to find the commit that introduced a bug

git commit # Record changes to the repository
git branch # List, create, or delete branches
git checkout # Switch to another branch
git merge # Join two or more branches together
git rebase # Reapply commits on top of another base tip
git reset # Reset current HEAD to the specified state
git stash # Stash the changes in a dirty working directory away
git tag # Create, list, delete or verify a tag object signed with GPG

git remote # View all remote
git fetch # Fetch all objects from the remote repository that don’t currently reside in the local working directory
git pull # Merge all the changes present in the remote repository to the local working directory
git push # Update remote with committed changes
```

## Useful options

```shell
git log --oneline # Display single commit information per line
git rev-list HEAD --count # Total number of commits
git shortlog # Summarize `git log` output
git commit --amend -m "New commit message" # Edit the last commit message
```

## Miscellaneous

- Remove a file from history

  ```shell
  $ git filter-branch --force --index-filter \
    "git rm --cached --ignore-unmatch PATH-TO-YOUR-FILE-WITH-SENSITIVE-DATA" \
    --prune-empty --tag-name-filter cat -- --all
  ```

- Get a list of the deleted files in history

  ```shell
  ## without commit hashes
  git log --diff-filter=D --summary | grep delete

  ## with commit hashes
  git log --diff-filter=D --summary | grep -E 'delete|^commit\s+\S+'
  ```

- Amend older or multiple commit messages

  - Display a list of the last n commits in the default text editor:

    ```shell
    git rebase -i HEAD~n
    ```

  - Replace `pick` with `reword` before each commit message you want to change, save and close the commit list file.
  - In each resulting commit file, type the new commit message, save the file, and close it.
  - Push the amended commits:

    ```shell
    git push --force
    ```

- Amend the very first commit message [[\*](https://stackoverflow.com/a/14630424)]

  ```shell
  git rebase -i --root
  ```

- Squash all previous commits into one [[\*](https://stackoverflow.com/a/23486788)]

  ```shell
  git reset $(git commit-tree HEAD^{tree} -m "A new start")
  ```

- See the diff for a commit [[\*](https://stackoverflow.com/a/17563864)]

  ```shell
  git show <commit> # or one of these
  git show --color --pretty=format:%b <commit>
  git diff-tree -p <commit>
  ```

- Print a leaderboard of authors based on number of commits in a repository

  ```shell
  git log --format='%aN' | sort | uniq -c | sort -nr
  git log --format='%aN' | sort -u # Print all contributors in alphabetical order
  ```

- Working with multiple GitHub accounts with SSH [[\*](https://code.tutsplus.com/tutorials/quick-tip-how-to-work-with-github-and-multiple-accounts--net-22574)]

  - [Create a new SSH key](./ssh) and add it to GitHub account #2. Save the private key file as something like `id_rsa_2`.

  - Update the SSH config:

    ```shell title=".ssh/config"
    # Default GitHub
    Host github.com
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa

    # GitHub account #2
    Host github-alt
    HostName github.com
    User git
    IdentityFile ~/.ssh/id_rsa_2
    ```

  - When pushing to GitHub account #2, change the remote to reflect the new host:

    ```shell
    # git remote add origin git@github.com:username/repository.git
    git remote add origin git@github-alt:username/repository.git
    git push origin main
    ```
