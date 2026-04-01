# Deployment Guide

This guide provides step-by-step instructions to deploy your portfolio website to Vercel or Netlify.

## Prerequisites

Before deploying, make sure you have:
1. A GitHub account
2. Your portfolio code pushed to a GitHub repository
3. EmailJS account (optional, for contact form)

---

## Deploy to Vercel (Recommended)

Vercel is the easiest way to deploy Next.js applications.

### Step 1: Push to GitHub

```bash
# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit changes
git commit -m "Initial commit: Portfolio website"

# Add your GitHub repository as remote
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO.git

# Push to GitHub
git push -u origin main
```

### Step 2: Deploy on Vercel

1. Go to [vercel.com](https://vercel.com) and sign in with GitHub
2. Click "Add New..." → "Project"
3. Import your GitHub repository
4. Configure your project:
   - Framework Preset: Next.js (auto-detected)
   - Root Directory: ./
   - Build Command: `npm run build`
   - Output Directory: `.next`

### Step 3: Add Environment Variables

In Vercel dashboard:
1. Go to your project → Settings → Environment Variables
2. Add the following variables:
   ```
   NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
   NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
   NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=your_public_key
   NEXT_PUBLIC_SITE_URL=https://your-domain.vercel.app
   ```

### Step 4: Deploy

Click "Deploy" and wait for the build to complete. Your site will be live at `https://your-project.vercel.app`

### Step 5: Custom Domain (Optional)

1. Go to your project → Settings → Domains
2. Add your custom domain
3. Update DNS records as instructed
4. Enable HTTPS (automatic)

---

## Deploy to Netlify

Alternative deployment option with similar features.

### Step 1: Push to GitHub

Same as Vercel Step 1 above.

### Step 2: Connect to Netlify

1. Go to [netlify.com](https://netlify.com) and sign in with GitHub
2. Click "Add new site" → "Import an existing project"
3. Select your GitHub repository

### Step 3: Configure Build Settings

- Build command: `npm run build`
- Publish directory: `.next`
- Node version: 18.x (in Environment Variables: `NODE_VERSION=18`)

### Step 4: Add Environment Variables

In Netlify dashboard:
1. Go to Site settings → Environment variables
2. Add the same variables as Vercel Step 3

### Step 5: Deploy

Click "Deploy site" and wait for the build. Your site will be live at `https://your-project.netlify.app`

---

## EmailJS Setup (Contact Form)

To make the contact form work:

### Step 1: Create EmailJS Account

1. Go to [emailjs.com](https://www.emailjs.com/)
2. Sign up for a free account

### Step 2: Add Email Service

1. Go to Dashboard → Email Services
2. Add your email service (Gmail, Outlook, etc.)
3. Note the Service ID

### Step 3: Create Email Template

1. Go to Dashboard → Email Templates
2. Create a new template with variables:
   ```
   From: {{from_email}}
   Subject: {{subject}}

   Message from: {{from_name}}
   Email: {{from_email}}

   {{message}}
   ```
3. Note the Template ID

### Step 4: Get Public Key

1. Go to Account → API Keys
2. Copy your Public Key

### Step 5: Update Environment Variables

Add these to your `.env.local` and deployment platform:
```
NEXT_PUBLIC_EMAILJS_SERVICE_ID=service_xxx
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=template_xxx
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=xxx
```

---

## Post-Deployment Checklist

- [ ] Verify all pages load correctly
- [ ] Test dark/light mode toggle
- [ ] Test contact form submission
- [ ] Check mobile responsiveness
- [ ] Verify all links work
- [ ] Test social media share cards (Open Graph)
- [ ] Submit sitemap to Google Search Console
- [ ] Add Google Analytics (optional)

---

## Troubleshooting

### Build Fails

- Check Node.js version (must be 18.17+)
- Clear npm cache: `npm cache clean --force`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Contact Form Not Working

- Verify EmailJS environment variables
- Check browser console for errors
- Ensure EmailJS service is connected

### Dark Mode Not Persisting

- Check localStorage in browser DevTools
- Verify theme toggle is working

### Slow Performance

- Optimize images in `/public`
- Enable Next.js Image Optimization
- Check bundle size with `npm run build`

---

## Support

If you encounter issues:
1. Check the deployment logs
2. Review browser console for errors
3. Verify environment variables are set correctly
4. Create an issue on GitHub

Happy deploying! 🚀