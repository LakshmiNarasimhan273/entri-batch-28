# Git Local Basic Commands

Git is a version control system used to track changes in code and manage project history. These basic Git commands are essential for beginners.

## Git Commands

### git init
Used to initialize a new Git repository in the current folder.  
It creates a hidden `.git` directory which allows Git to start tracking files.

Command:
```bash
git init
```

---

### git add .
Used to add (stage) all files in the project for commit.  
It includes new files, modified files, and deleted files.

Command:
```bash
git add .
```

---

### git add <file-name>
Used to add (stage) a specific file for commit.

Command:
```bash
git add index.html
```

---

### git commit
Used to save the staged changes into Git history.  
Each commit represents a snapshot of the project.

Command:
```bash
git commit -m "Commit message"
```

---

### git remote add origin <repository-url>
Used to connect the local repository to a remote repository like GitHub.  
`origin` is the default remote name.

Command:
```bash
git remote add origin https://github.com/username/repo-name.git
```

---

### git push origin master
Used to push local commits to the remote repository from the `master` branch.

Command:
```bash
git push origin master
```

Note: In many new repositories, the default branch name is `main`.
```bash
git push origin main
```

---

## Simple Git Work Flow
```bash
git init
git add .
git commit -m "Initial commit"
git remote add origin <repository-url>
git push origin master
```

---

## Key Points to Remember
- `git init` → start Git tracking  
- `git add` → stage files  
- `git commit` → save changes  
- `git push` → upload to GitHub  

---

## End Notes
These commands are commonly used in projects, interviews, and daily development work.
