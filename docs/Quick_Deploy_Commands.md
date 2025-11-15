# 🚀 Quick Deployment Commands for Claude Code

## Copy & Paste This Into Claude Code Terminal

```bash
# Navigate to your repo
cd C:\Users\facel\Downloads\GitHub\ermits-advisory.com

# Create steel directory
mkdir steel 2>nul

# Download the enhanced file from Claude.ai first, then:
# Copy it to your repo (adjust path if needed)
copy "%USERPROFILE%\Downloads\STEEL_Assessment_Platform_Complete.html" steel\index.html

# Verify file exists
dir steel\index.html

# Add to git
git add steel/

# Commit
git commit -m "Add enhanced STEEL Assessment Platform - Strategic Threat & Enterprise Evaluation Layer"

# Push to GitHub
git push origin main

# Check status
git status
```

---

## 🎯 Alternative: If File Already in Repo Folder

```bash
# Just commit and push
cd C:\Users\facel\Downloads\GitHub\ermits-advisory.com
git add steel/
git commit -m "Update STEEL platform with new branding and enhancements"
git push origin main
```

---

## ✅ Verification Steps

After pushing:

1. **Check GitHub**: https://github.com/Facely1er/ermits-advisory.com
2. **Enable GitHub Pages** (if not already):
   - Settings → Pages
   - Source: main branch
   - Save
3. **Access Live Site**: https://facely1er.github.io/ermits-advisory.com/steel/

---

## 🔧 Test Locally First (Optional)

```bash
# Open file in default browser
start steel\index.html

# Or open in specific browser
start chrome steel\index.html
start firefox steel\index.html
```

---

## 💡 Quick Tips

- File is self-contained (single HTML)
- No build process needed
- Works offline
- Zero dependencies (except CDN for Chart.js/jsPDF)
- Mobile-ready out of the box

---

**That's it! Deploy in under 60 seconds.** ⚡
