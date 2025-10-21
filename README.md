# Zander Marenberg - Personal Portfolio

My personal portfolio website showcasing web development projects, data analytics work, drone photography, and my pickleball journey.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Web3Forms** - Contact form backend
- **Custom Hooks** - Dark mode & scroll spy

## 🎨 Features

- ✨ Smooth scroll navigation with active section highlighting
- 🌓 Dark mode toggle with localStorage persistence
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎭 Framer Motion animations throughout
- 🎯 Project filtering (All / Data / Web)
- 🖼️ Interactive lightbox for drone photography gallery
- ⏱️ Timeline component for pickleball journey
- 📧 Functional contact form powered by Web3Forms
- ♿ Accessibility features (reduced motion support, semantic HTML, ARIA labels)

## 🎯 Sections

1. **Hero** - Landing with headline, tech stack chips, and CTA buttons
2. **About** - Photo carousel, bio, quick facts, and interests ticker
3. **Projects** - Filterable gallery of web development and data analytics projects
4. **Drone** - Photography gallery with lightbox modal
5. **Pickleball** - Journey timeline with stats and milestones
6. **Contact** - Social links and working contact form
7. **Footer** - Quick links and back-to-top button

## 📦 Development

### Installation

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 🛠️ Project Structure

```
personal-website/
├── public/
│   ├── images/
│   │   ├── about/
│   │   ├── projects/
│   │   ├── drone/
│   │   ├── pickleball/
│   │   └── icons/
│   └── Zander-Marenberg-Resume-2025.pdf
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Drone.jsx
│   │   ├── Pickleball.jsx
│   │   ├── Contact.jsx
│   │   ├── Footer.jsx
│   │   ├── FloatingElements.jsx
│   │   ├── ImageCarousel.jsx
│   │   └── ScrollingTicker.jsx
│   ├── hooks/
│   │   ├── useDarkMode.js
│   │   └── useScrollSpy.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 Design System

**Color Palette:**
- Navy: `#0D1B2A` - Primary dark color
- Mint: `#2EE6A6` - Accent color
- Off-white: `#F6F8FA` - Light background

**Responsive Breakpoints:**
- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

---

Built with ❤️ by Zander Marenberg

