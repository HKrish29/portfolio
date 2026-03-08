# 🚀 Deployment Guide - Hitarth Mankodia Portfolio

## Option 1: Deploy to Vercel (RECOMMENDED - Easiest)

1. Push your code to GitHub (see below)
2. Go to https://vercel.com
3. Sign up with GitHub
4. Click "Add New Project"
5. Select your repository
6. Click "Deploy"
7. Done! You'll get a URL like: `hitarth-portfolio.vercel.app`

**Advantages:**
- Automatic deployments on every push
- Custom domain support
- Zero configuration needed
- Instant global CDN

---

## Option 2: Deploy to GitHub Pages

### Step 1: Install gh-pages
```bash
npm install --save-dev gh-pages
```

### Step 2: Push to GitHub
```bash
git init
git add .
git commit -m "Initial commit - Hitarth Portfolio"
git branch -M main
git remote add origin https://github.com/HKrish29/portfolio.git
git push -u origin main
```

### Step 3: Deploy
```bash
npm run deploy
```

Your site will be live at: `https://HKrish29.github.io/portfolio`

### Step 4: Enable GitHub Pages
1. Go to your repo settings
2. Click "Pages" in sidebar
3. Select branch: `gh-pages`
4. Click Save

---

## Option 3: Deploy to Netlify

1. Push code to GitHub
2. Go to https://netlify.com
3. Click "Add new site" → "Import from Git"
4. Select your repository
5. Build command: `npm run build`
6. Publish directory: `dist`
7. Click "Deploy"

---

## 📱 Mobile Installation

Once deployed, users can install your portfolio as a PWA:

**On Android (Chrome):**
1. Open the site
2. Tap menu (3 dots)
3. Tap "Install app" or "Add to Home screen"

**On iOS (Safari):**
1. Open the site
2. Tap Share button
3. Tap "Add to Home Screen"

---

## 🔧 Before Deploying

Make sure to:
- [ ] Replace Formspree form ID in Contact page
- [ ] Add your actual resume PDF (if you have one)
- [ ] Test on mobile browser
- [ ] Check all links work

---

## 🌐 Custom Domain (Optional)

After deploying to Vercel/Netlify:
1. Buy a domain (e.g., hitarthmankodia.com)
2. Add it in your hosting dashboard
3. Update DNS records
4. Done!

---

## 📊 Analytics (Optional)

Add Google Analytics:
1. Get tracking ID from analytics.google.com
2. Add to index.html in `<head>`:
```html
<script async src="https://www.googletagmanager.com/gtag/js?id=YOUR-ID"></script>
```

---

## Need Help?

- Vercel Docs: https://vercel.com/docs
- GitHub Pages: https://pages.github.com
- Netlify Docs: https://docs.netlify.com
