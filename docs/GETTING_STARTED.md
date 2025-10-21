# 🚀 Getting Started

Welcome to your new portfolio! This guide will help you get up and running in minutes.

## ✅ Prerequisites

Make sure you have these installed:
- **Node.js** (v18 or higher) - [Download here](https://nodejs.org/)
- **npm** (comes with Node.js)
- A code editor (VS Code recommended)

Check your versions:
```bash
node --version  # Should be v18.0.0 or higher
npm --version   # Should be 9.0.0 or higher
```

---

## 📦 Installation

1. **Open your terminal** and navigate to the project folder:
   ```bash
   cd /Users/zandermarenberg/Desktop/Burgertime/personal-website
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
   This will take 1-2 minutes and install all necessary packages.

---

## 🎬 Running the Development Server

Start the local development server:
```bash
npm run dev
```

You should see:
```
  VITE v5.3.1  ready in XXX ms

  ➜  Local:   http://localhost:3000/
  ➜  Network: use --host to expose
```

Open **http://localhost:3000** in your browser. The site will automatically reload when you make changes!

---

## 🎨 First Customizations

Let's make some quick changes to see the site update in real-time:

### 1. Update Your Name (2 minutes)

Open `src/components/Hero.jsx` and find line 43:

**Before:**
```jsx
<span className="text-mint">Zander Marenberg</span>
```

**After:**
```jsx
<span className="text-mint">Your Name</span>
```

Save the file and watch your browser update automatically! ✨

### 2. Update Your Email (1 minute)

Open `src/components/About.jsx` and find line 11:

**Before:**
```jsx
{ label: 'Email', value: 'zander@example.com', link: 'mailto:zander@example.com' },
```

**After:**
```jsx
{ label: 'Email', value: 'your@email.com', link: 'mailto:your@email.com' },
```

### 3. Test Dark Mode

Click the moon/sun icon in the top right to toggle dark mode. It should persist even after refreshing!

---

## 📂 Project Structure

Here's what's in your project:

```
personal-website/
├── public/                  # Static files
│   ├── images/             # Your images go here
│   │   ├── projects/       # Project screenshots
│   │   ├── drone/          # Drone photos
│   │   └── pickleball/     # Pickleball photos
│   ├── resume.pdf          # Your resume (replace this)
│   └── robots.txt          # SEO configuration
├── src/
│   ├── components/         # React components
│   │   ├── Navigation.jsx  # Top navigation bar
│   │   ├── Hero.jsx        # Landing section
│   │   ├── About.jsx       # About section
│   │   ├── Projects.jsx    # Projects showcase
│   │   ├── Drone.jsx       # Drone photography
│   │   ├── Pickleball.jsx  # Pickleball journey
│   │   ├── Contact.jsx     # Contact section
│   │   └── Footer.jsx      # Footer
│   ├── hooks/              # Custom React hooks
│   │   ├── useDarkMode.js  # Dark mode functionality
│   │   └── useScrollSpy.js # Active nav highlighting
│   ├── App.jsx             # Main application
│   ├── main.jsx            # Entry point
│   └── index.css           # Global styles
├── index.html              # HTML template
├── tailwind.config.js      # Tailwind configuration
├── vite.config.js          # Vite configuration
├── package.json            # Dependencies
├── README.md               # Documentation
├── CUSTOMIZATION_GUIDE.md  # Detailed customization guide
└── GETTING_STARTED.md      # This file
```

---

## 🛠️ Available Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📝 Next Steps

Now that you have the site running, follow these steps:

### ✅ Step 1: Update Content (30 minutes)
1. Read `CUSTOMIZATION_GUIDE.md` for detailed instructions
2. Update your personal information in each component
3. Update social media links in `Navigation.jsx` and `Contact.jsx`

### ✅ Step 2: Add Your Images (1 hour)
1. Gather your photos and project screenshots
2. Optimize them (use TinyPNG.com to compress)
3. Add them to the appropriate folders in `public/images/`
4. Update image paths in components

### ✅ Step 3: Add Your Projects (1 hour)
1. Open `src/components/Projects.jsx`
2. Replace the dummy data with your actual projects
3. Add project screenshots
4. Update links to live demos and GitHub repos

### ✅ Step 4: Customize Colors (15 minutes)
1. Open `tailwind.config.js`
2. Update the color scheme to match your brand
3. Test in both light and dark modes

### ✅ Step 5: Test Everything (30 minutes)
- Click all navigation links
- Test on mobile (browser dev tools → device toolbar)
- Check all external links work
- Test the contact form
- Verify dark mode works properly

### ✅ Step 6: Deploy (30 minutes)
See the deployment section in `README.md`

---

## 🆘 Troubleshooting

### Port 3000 Already in Use
If you see an error about port 3000, kill the existing process or use a different port:
```bash
# Kill process on port 3000 (Mac/Linux)
lsof -ti:3000 | xargs kill -9

# Or specify a different port
npm run dev -- --port 3001
```

### Module Not Found Errors
If you see "Module not found" errors:
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Changes Not Showing Up
1. Hard refresh your browser: `Cmd+Shift+R` (Mac) or `Ctrl+Shift+R` (Windows)
2. Clear your browser cache
3. Stop the dev server (`Ctrl+C`) and restart it

### Styling Looks Wrong
Make sure Tailwind is working:
1. Check that `tailwind.config.js` exists
2. Make sure `index.css` has the `@tailwind` directives
3. Restart the dev server

---

## 💡 Pro Tips

1. **Use VS Code:** Install the recommended extensions (`.vscode/extensions.json`)
2. **Keep dev server running:** Leave it running while you work for instant updates
3. **Use browser dev tools:** Press F12 to inspect elements and debug
4. **Git commit often:** Save your progress with meaningful commit messages
5. **Test mobile first:** Most visitors will be on mobile devices

---

## 🎓 Learning Resources

New to React or Tailwind? Check these out:

- **React Basics:** [react.dev/learn](https://react.dev/learn)
- **Tailwind CSS:** [tailwindcss.com/docs](https://tailwindcss.com/docs)
- **Framer Motion:** [framer.com/motion](https://www.framer.com/motion/)
- **MDN Web Docs:** [developer.mozilla.org](https://developer.mozilla.org/)

---

## 🎉 You're Ready!

You now have a fully functional portfolio website running locally. Follow the next steps above to customize it and make it your own.

**Questions or issues?** Check the `CUSTOMIZATION_GUIDE.md` for detailed help.

Good luck building your portfolio! 🚀

---

**Quick Reference:**

| Task | File to Edit |
|------|-------------|
| Change name/headline | `src/components/Hero.jsx` |
| Update bio | `src/components/About.jsx` |
| Add projects | `src/components/Projects.jsx` |
| Update social links | `src/components/Navigation.jsx` |
| Change colors | `tailwind.config.js` |
| Add images | `public/images/` folders |
| Update resume | `public/resume.pdf` |

