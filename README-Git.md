
# 🛠️ Using Two GitHub Accounts on a Single System (Work + Personal)

This guide explains how to manage two GitHub accounts (Work + Personal) on the same system with SSH keys, Git, and Visual Studio Code (VS Code).

---

## 📋 GitHub Accounts

| Account Type | Username           | Email                  |
|--------------|--------------------|------------------------|
| Work         | jd74552             | junaid@inboxlogy.com    |
| Personal     | EASEMYEMAIL-ORG     | easemyemail@gmail.com  |

---

## ✅ Setup Steps

### 1. Generate SSH Keys
```bash
# Work GitHub
ssh-keygen -t ed25519 -C "junaid@inboxlogy.com" -f ~/.ssh/id_ed25519_work

# Personal GitHub
ssh-keygen -t ed25519 -C "easemyemail@gmail.com" -f ~/.ssh/id_ed25519_personal
```

### 2. Add SSH Keys to the SSH Agent
```bash
eval "$(ssh-agent -s)"
ssh-add ~/.ssh/id_ed25519_work
ssh-add ~/.ssh/id_ed25519_personal
```

### 3. Configure SSH for Multiple Accounts
Edit your `~/.ssh/config`:

```bash
# Work GitHub
Host github.com-work
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_work
  IdentitiesOnly yes

# Personal GitHub
Host github.com-personal
  HostName github.com
  User git
  IdentityFile ~/.ssh/id_ed25519_personal
  IdentitiesOnly yes
```

### 4. Add SSH Keys to GitHub
- Log into **each GitHub account**.
- Go to **Settings** > **SSH and GPG Keys** > **New SSH Key**.
- Add your corresponding `.pub` file.

---

## 🪙 Git Operations

### 🔃 Cloning Repositories
```bash
# Work repository
git clone git@github.com-work:jd74552/repo-name.git

# Personal repository
git clone git@github.com-personal:EASEMYEMAIL-ORG/repo-name.git
```

### 📤 Pushing Changes
```bash
git add .
git commit -m "your commit message"
git push
```

### 📥 Pulling Changes
```bash
git pull
```

### ⚙️ Setting Git Identity Per Repository
```bash
# Inside Work repo
git config user.name "Your Work Name"
git config user.email "junaid@inboxlogy.com"

# Inside Personal repo
git config user.name "Your Personal Name"
git config user.email "easemyemail@gmail.com"
```

---

## 🛳️ Switching Between Accounts in VS Code
- Open the **repo folder** (work or personal) in VS Code.
- VS Code will automatically use the correct SSH key based on your repo’s remote URL.
- Use the **Source Control panel** for Pull, Push, and Commit.
- No need to manually log out or switch profiles inside VS Code!

---

## 🧹 Remove Both Git Profiles Completely

### 1. Remove Global Git Config
```bash
git config --global --unset user.name
git config --global --unset user.email
rm ~/.gitconfig
```

### 2. Remove SSH Keys and SSH Agent Keys
```bash
ssh-add -D
rm ~/.ssh/id_ed25519_work ~/.ssh/id_ed25519_work.pub
rm ~/.ssh/id_ed25519_personal ~/.ssh/id_ed25519_personal.pub
```

### 3. Clean SSH Config
- Edit `~/.ssh/config` and **delete** entries for `github.com-work` and `github.com-personal`.

### 4. Remove Saved HTTPS Credentials (if any)
```bash
rm ~/.git-credentials
rm ~/.config/git/credentials
```

### 5. Sign Out from VS Code (Optional)
- Open **Command Palette** (Ctrl + Shift + P)
- Run: `GitHub: Sign Out`

---

## ✅ Final Checklist

| Task                                | Status     |
|-------------------------------------|------------|
| SSH Keys generated                  | ✅         |
| SSH Keys added to GitHub            | ✅         |
| .ssh/config created                 | ✅         |
| Clone, Push, Pull working in VS Code | ✅         |
| Separate Git Identity per repo set  | ✅         |

---

# 🌟 Now you are ready to manage multiple GitHub accounts on a single machine!

---

> ⚡ Pro Tip: Always double-check which Git remote URL and Git identity your project is using by running `git remote -v` and `git config user.name` inside the repo.
