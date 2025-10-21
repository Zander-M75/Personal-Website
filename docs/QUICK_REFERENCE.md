# ⚡ Quick Reference Card

Your go-to cheat sheet for common tasks and file locations.

---

## 🚀 Essential Commands

```bash
# Install everything
npm install

# Start dev server (http://localhost:3000)
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

---

## 📝 Common Edits & File Locations

| What to Change | File | Line(s) |
|----------------|------|---------|
| **Your name** | `src/components/Hero.jsx` | 43 |
| **Headline/tagline** | `src/components/Hero.jsx` | 43-48 |
| **Bio paragraph** | `src/components/About.jsx` | 52-60 |
| **Email address** | `src/components/About.jsx` | 11 |
| **Email address** | `src/components/Contact.jsx` | 8 |
| **Social links (nav)** | `src/components/Navigation.jsx` | 22-27 |
| **Social links (footer)** | `src/components/Footer.jsx` | 20-30 |
| **Tech stack chips** | `src/components/Hero.jsx` | 9-18 |
| **Quick facts** | `src/components/About.jsx` | 5-12 |
| **Projects** | `src/components/Projects.jsx` | 5-48 |
| **Drone photos** | `src/components/Drone.jsx` | 7-42 |
| **Pickleball stats** | `src/components/Pickleball.jsx` | 24-29 |
| **Pickleball milestones** | `src/components/Pickleball.jsx` | 5-22 |
| **Colors** | `tailwind.config.js` | 12-16 |
| **Fonts** | `tailwind.config.js` | 17-20 |
| **Meta tags** | `index.html` | 5-10 |

---

## 🖼️ Image Locations

```
public/
├── images/
│   ├── profile.jpg              → Your headshot (About section)
│   ├── projects/
│   │   ├── project1.jpg         → Project screenshots
│   │   ├── project2.jpg
│   │   └── project3.jpg
│   ├── drone/
│   │   ├── photo1.jpg           → Drone photography
│   │   ├── photo2.jpg
│   │   └── photo3.jpg
│   └── pickleball/
│       ├── action1.jpg          → Pickleball photos
│       └── action2.jpg
└── resume.pdf                   → Your resume
```

---

## 🎨 Color Variables

Current colors in `tailwind.config.js`:

```javascript
navy: '#0D1B2A'      // Primary dark
mint: '#2EE6A6'      // Accent/highlights
offwhite: '#F6F8FA'  // Background/light
```

Use in components:
```jsx
className="bg-navy text-mint border-offwhite"
className="dark:bg-offwhite dark:text-navy"
```

---

## 📱 Responsive Breakpoints

| Size | Width | Tailwind Class |
|------|-------|----------------|
| Mobile | Default | (no prefix) |
| Tablet | ≥768px | `md:` |
| Desktop | ≥1024px | `lg:` |
| Large | ≥1280px | `xl:` |

Example:
```jsx
className="text-sm md:text-base lg:text-lg"
```

---

## 🎭 Common Framer Motion Patterns

### Fade In on Scroll
```jsx
const ref = useRef(null);
const isInView = useInView(ref, { once: true, margin: '-100px' });

<motion.div
  ref={ref}
  initial={{ opacity: 0, y: 20 }}
  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
  transition={{ duration: 0.6 }}
>
```

### Staggered Children
```jsx
<motion.div
  variants={container}
  initial="hidden"
  animate="show"
>
  {items.map(item => (
    <motion.div variants={item} key={item.id}>
  ))}
</motion.div>
```

---

## 🐛 Troubleshooting

### Site won't start
```bash
# Delete node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run dev
```

### Styles not updating
```bash
# Hard refresh browser
Cmd+Shift+R (Mac) or Ctrl+Shift+R (Windows)

# Restart dev server
Ctrl+C
npm run dev
```

### Images not loading
- Check path starts with `/`: `/images/photo.jpg`
- Verify file is in `public/` folder
- Check file name matches exactly (case-sensitive)

### Dark mode not working
- Clear localStorage in browser DevTools
- Check `class="dark"` exists on `<html>` element

### Nav not highlighting
- Verify section has `id="sectionname"`
- Check ID is in `sectionIds` array in `App.jsx`

---

## 📋 Pre-Launch Checklist

Quick things to verify before going live:

- [ ] All placeholder text replaced
- [ ] All images added
- [ ] All links work
- [ ] Email addresses updated
- [ ] Resume uploaded
- [ ] Tested on mobile
- [ ] No console errors
- [ ] Meta tags updated
- [ ] Ran `npm run build` successfully

---

## 🎯 File Structure at a Glance

```
personal-website/
├── 📄 Configuration
│   ├── package.json
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── .eslintrc.cjs
│
├── 📖 Documentation
│   ├── README.md
│   ├── GETTING_STARTED.md
│   ├── CUSTOMIZATION_GUIDE.md
│   ├── CUSTOMIZATION_CHECKLIST.md
│   ├── PROJECT_SUMMARY.md
│   ├── COMPONENT_STRUCTURE.md
│   └── QUICK_REFERENCE.md (this file)
│
├── 🎨 Source Code
│   ├── src/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   ├── index.css
│   │   ├── components/ (8 files)
│   │   └── hooks/ (2 files)
│   └── index.html
│
└── 📦 Public Assets
    └── public/
        ├── images/
        ├── resume.pdf
        └── robots.txt
```

---

## 🔗 Important Links to Update

1. **Navigation.jsx** (line 22-27): Social media links
2. **Footer.jsx** (line 20-40): Social links
3. **About.jsx** (line 11): Email
4. **Contact.jsx** (line 8): Email
5. **Drone.jsx** (line 55): Instagram gallery link
6. **Pickleball.jsx** (line 158): Instagram updates link

---

## 🎨 Customization Priority

### High Priority (Do First)
1. Name and headline
2. Email addresses
3. Social media links
4. Bio paragraph
5. Quick facts

### Medium Priority
1. Projects (add your real work)
2. Tech stack chips
3. Profile photo
4. Resume

### Low Priority (Optional)
1. Drone photos
2. Pickleball content
3. Color scheme
4. Fonts

---

## 📱 Testing Shortcuts

### Browser DevTools
- **Open:** F12 or Cmd+Option+I (Mac)
- **Responsive Mode:** Cmd+Shift+M (Mac) or Ctrl+Shift+M (Windows)
- **Console:** See errors and logs
- **Network:** Check if images load

### Quick Device Tests
- **Mobile:** Set to 375px width
- **Tablet:** Set to 768px width
- **Desktop:** Set to 1280px width

---

## 🚀 Deployment Quickstart

### Vercel (Recommended)
```bash
npm install -g vercel
vercel
```

### Netlify
1. Run `npm run build`
2. Drag `dist/` folder to netlify.com/drop

### GitHub Pages
```bash
npm install -g gh-pages
# Add to package.json: "homepage": "https://yourusername.github.io"
npm run build
gh-pages -d dist
```

---

## 💡 Pro Tips

1. **Save often** - Changes update automatically in dev mode
2. **Keep it simple** - Don't over-customize before adding content
3. **Mobile first** - Test on small screens frequently
4. **Use placeholders** - Fill in real content gradually
5. **Git commit** - Save progress with `git commit -m "message"`

---

## 🆘 Need Help?

1. Check the specific guide:
   - Setup issues → `GETTING_STARTED.md`
   - How to customize → `CUSTOMIZATION_GUIDE.md`
   - What to update → `CUSTOMIZATION_CHECKLIST.md`
   - Understanding structure → `COMPONENT_STRUCTURE.md`

2. Check browser console for errors (F12)

3. Google the specific error message

4. Check official docs:
   - [React](https://react.dev)
   - [Tailwind](https://tailwindcss.com)
   - [Framer Motion](https://framer.com/motion)

---

## 📞 Common File Paths

Copy-paste these paths when editing:

```
src/components/Hero.jsx
src/components/About.jsx
src/components/Projects.jsx
src/components/Navigation.jsx
src/components/Contact.jsx
public/images/profile.jpg
public/resume.pdf
tailwind.config.js
```

---

**Save this file!** Use it as your quick reference while customizing. 🎯

