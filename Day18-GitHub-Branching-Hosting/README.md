# Git Branching

## What is Branching?
Branching in Git allows you to create separate versions of your project to work on features or fixes without affecting the main code.

---

## Create Branches (Example: development & main)

### 1. Create a new branch
git branch development

### 2. Switch to that branch
git checkout development

### 3. Create another branch (main already exists by default, but shown for example)
git branch main

### 4. Switch to main branch
git checkout main

### 5. Check available branches
git branch

---

## Work Inside Each Branch

### Add files to staging
git add .

### Commit your changes
git commit -m "your message"

### Push a branch to remote
git push origin development
git push origin main

---

## Merge Branches

### Switch to main
git checkout main

### Merge development changes into main
git merge development

---

# Hosting Using GitHub Pages (Steps)

1. Go to your GitHub Repository.
2. Open the **Settings** tab.
3. Scroll down to **Pages** (left-side menu → "Pages").
4. Under **Source**, choose:
   - **Deploy from a branch**
5. Select the branch to host:
   - Choose **main** (recommended)
   - Select **/ (root)** folder
6. Click **Save**.
7. GitHub will generate a live URL like:
   **https://your-username.github.io/your-repository-name/**
8. Wait for 30–60 seconds → Website goes live.

---

## Important Points

- Always push your latest changes before enabling GitHub Pages.
- Hosting works only when files exist in the chosen branch.
- If the index.html is inside a folder, GitHub Pages will not detect it. Keep it in the root.
- You can host from **main** or **docs** branches.

