# 🎨 Customization Guide

This guide will help you customize your portfolio with your own content, images, and information.

## 🚀 Quick Start

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Start development server:**
   ```bash
   npm run dev
   ```

3. **Follow the sections below to customize your content**

---

## 📝 Step-by-Step Customization

### 1. Update Personal Information

#### Hero Section (`src/components/Hero.jsx`)

**Line 43-48:** Update your headline
```jsx
<motion.h1>
  Hey, I'm{' '}
  <span className="text-mint">Your Name Here</span> — Your tagline here
</motion.h1>
```

**Line 52-56:** Update your subtitle
```jsx
<motion.p>
  Your professional title and location. Your personal brand statement.
</motion.p>
```

**Line 9-18:** Update tech stack chips
```jsx
const techStack = [
  'Your',
  'Tech',
  'Stack',
  'Here',
];
```

---

#### Navigation (`src/components/Navigation.jsx`)

**Line 22-27:** Update social media links
```jsx
const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/yourusername', icon: '→ GitHub' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/yourusername', icon: '→ LinkedIn' },
  // Add or remove links as needed
];
```

---

#### About Section (`src/components/About.jsx`)

**Line 5-12:** Update quick facts
```jsx
const quickFacts = [
  { label: 'Location', value: 'Your City, State' },
  { label: 'Focus', value: 'Your Focus Areas' },
  { label: 'Tools', value: 'Your Tech Stack' },
  { label: 'Interests', value: 'Your Interests' },
  { label: 'Currently', value: 'What you\'re working on' },
  { label: 'Email', value: 'your.email@example.com', link: 'mailto:your.email@example.com' },
];
```

**Line 52-60:** Update your bio paragraph
```jsx
<p className="text-lg leading-relaxed">
  Write your bio here. Tell your story, what you do, your background,
  and what makes you unique. Keep it conversational and authentic.
</p>
```

---

#### Projects Section (`src/components/Projects.jsx`)

**Line 5-48:** Replace with your actual projects
```jsx
const projectsData = [
  {
    id: 1,
    title: 'Your Project Name',
    category: 'web', // or 'data'
    description: 'Brief description of what this project does.',
    tags: ['Tech1', 'Tech2', 'Tech3'],
    image: '/path/to/your/image.jpg', // Add image path
    links: [
      { label: 'Live Site', href: 'https://yourproject.com', type: 'primary' },
      { label: 'GitHub', href: 'https://github.com/you/project' },
    ],
  },
  // Add more projects...
];
```

---

#### Drone Section (`src/components/Drone.jsx`)

**Line 7-42:** Update drone photos
```jsx
const dronePhotos = [
  {
    id: 1,
    title: 'Photo Title',
    location: 'Location',
    date: 'Month Year',
    thumbnail: '/path/to/photo.jpg', // Add your image path
  },
  // Add more photos...
];
```

**Line 55:** Update Instagram link
```jsx
href="https://instagram.com/yourusername"
```

---

#### Pickleball Section (`src/components/Pickleball.jsx`)

**Line 5-22:** Update your milestones
```jsx
const milestones = [
  {
    date: 'Month Year',
    title: 'Milestone Title',
    description: 'What happened',
  },
  // Add your milestones...
];
```

**Line 24-29:** Update your stats
```jsx
const stats = [
  { label: 'Current Rating', value: '0.0' },
  { label: 'Matches Played', value: '0' },
  { label: 'Win Rate', value: '0%' },
  { label: 'Tournaments', value: '0' },
];
```

---

#### Contact Section (`src/components/Contact.jsx`)

**Line 6-27:** Update contact links
```jsx
const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:your.email@example.com',
    icon: '✉️',
    description: 'your.email@example.com',
  },
  // Update all links with your actual URLs
];
```

**Line 45-47:** Update headline
```jsx
<h2>
  Your Call to Action Headline
</h2>
```

---

#### Footer (`src/components/Footer.jsx`)

**Line 14-15:** Update copyright
```jsx
<p className="text-sm">
  © {new Date().getFullYear()} Your Name
</p>
```

---

### 2. Add Your Images

#### Profile Photo
1. Place your photo in `/public/images/profile.jpg`
2. Update `src/components/About.jsx` line 37:
```jsx
<img
  src="/images/profile.jpg"
  alt="Your Name"
  className="w-full h-full object-cover"
/>
```

#### Project Thumbnails
1. Add project images to `/public/images/projects/`
2. Update the `image` field in `projectsData` array
3. Recommended size: 1200x675px (16:9 ratio)

#### Drone Photos
1. Add photos to `/public/images/drone/`
2. Update the `thumbnail` field in `dronePhotos` array
3. Use high-quality images, optimized for web

#### Pickleball Photos
1. Add photos to `/public/images/pickleball/`
2. Update the gallery in `src/components/Pickleball.jsx` line 158-167

---

### 3. Update Colors & Branding

Edit `tailwind.config.js`:

```js
colors: {
  navy: '#0D1B2A',      // Primary dark color
  mint: '#2EE6A6',      // Accent color
  offwhite: '#F6F8FA',  // Background color
},
```

---

### 4. Add Your Resume

1. Export your resume as PDF
2. Replace `/public/resume.pdf` with your file
3. Keep the filename as `resume.pdf` or update the link in `About.jsx`

---

### 5. Update Meta Tags

Edit `index.html` lines 5-9:

```html
<meta name="description" content="Your custom description here" />
<meta property="og:title" content="Your Name - Your Title" />
<meta property="og:description" content="Your description" />
<title>Your Name - Your Title</title>
```

---

### 6. Optional: Add Custom Fonts

The site currently uses Google Fonts (Inter & Poppins). To change:

1. Update the Google Fonts link in `index.html`
2. Update font families in `tailwind.config.js`

---

## 🎨 Design Customization

### Adjust Section Spacing
In `src/index.css`, modify:
```css
.section-padding {
  @apply py-24 md:py-28 px-6 md:px-8;
}
```

### Adjust Container Width
In `tailwind.config.js`:
```js
maxWidth: {
  'container': '1200px', // Change this value
}
```

### Modify Animations
Animations are handled by Framer Motion. Adjust timing in individual components:
```jsx
transition={{ duration: 0.6 }} // Change duration
```

---

## 🐛 Common Issues

### Images Not Loading
- Ensure images are in the `/public` folder
- Use paths starting with `/` (e.g., `/images/photo.jpg`)
- Check file names match exactly (case-sensitive)

### Dark Mode Issues
- Clear localStorage in browser dev tools
- Check if `class="dark"` is on `<html>` element

### Navigation Not Highlighting
- Ensure section IDs match the array in `App.jsx`:
```jsx
const sectionIds = ['home', 'about', 'projects', 'drone', 'pickleball', 'contact'];
```

---

## 📱 Testing Responsive Design

1. **Desktop:** Open browser dev tools (F12)
2. **Toggle device toolbar:** Ctrl+Shift+M (Windows) or Cmd+Shift+M (Mac)
3. **Test different viewports:**
   - Mobile: 375px, 414px
   - Tablet: 768px, 1024px
   - Desktop: 1280px, 1920px

---

## 🚢 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify

### Deploy to GitHub Pages
1. Install gh-pages: `npm install gh-pages --save-dev`
2. Add to package.json scripts:
```json
"predeploy": "npm run build",
"deploy": "gh-pages -d dist"
```
3. Run: `npm run deploy`

---

## 📚 Resources

- [React Documentation](https://react.dev)
- [Tailwind CSS Docs](https://tailwindcss.com/docs)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Vite Guide](https://vitejs.dev/guide/)

---

## 💡 Tips

1. **Keep it simple:** Don't over-customize until you have your content ready
2. **Use high-quality images:** Compress them with tools like TinyPNG
3. **Test thoroughly:** Check all links and interactions before deploying
4. **Mobile first:** Most visitors will view on mobile devices
5. **Update regularly:** Keep your projects and content current

---

## 🤝 Need Help?

If you run into issues:
1. Check the console for errors (F12 in browser)
2. Read the error messages carefully
3. Google the specific error
4. Check the README.md for basic setup instructions

---

Good luck with your portfolio! 🚀

