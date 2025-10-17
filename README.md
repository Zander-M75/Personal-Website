# Zander Marenberg - Portfolio Website

A modern, one-page portfolio showcasing web development, data analytics, drone photography, and pickleball journey.

## 🚀 Tech Stack

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first styling
- **Framer Motion** - Smooth animations
- **Custom Hooks** - Dark mode & scroll spy

## 🎨 Features

- ✨ Smooth scroll navigation with active section highlighting
- 🌓 Dark mode toggle with localStorage persistence
- 📱 Fully responsive design (mobile, tablet, desktop)
- 🎭 Framer Motion animations (fade+rise effects)
- 🎯 Project filtering (All / Data / Web)
- 🖼️ Image lightbox for drone photography
- ⏱️ Timeline component for pickleball journey
- ♿ Accessibility features (reduced motion support)

## 📦 Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📝 Customization

### 1. Update Personal Information

- Edit section content in `src/components/*.jsx`
- Update social links in `Navigation.jsx` and `Contact.jsx`
- Update email in `About.jsx` and `Contact.jsx`

### 2. Add Your Images

Replace placeholder images in:
- `src/components/About.jsx` - Profile photo
- `src/components/Projects.jsx` - Project thumbnails
- `src/components/Drone.jsx` - Drone photography
- `src/components/Pickleball.jsx` - Action shots

### 3. Customize Colors

Edit the color scheme in `tailwind.config.js`:

```js
colors: {
  navy: '#0D1B2A',
  mint: '#2EE6A6',
  offwhite: '#F6F8FA',
}
```

### 4. Add Your Resume

Place your PDF resume in the `public` folder as `resume.pdf`

### 5. Update Projects

Edit the `projectsData` array in `src/components/Projects.jsx` with your actual projects.

## 🎯 Sections

1. **Hero** - Landing section with headline and CTA buttons
2. **About** - Bio, quick facts, and resume download
3. **Projects** - Filterable project gallery
4. **Drone** - Photography gallery with lightbox
5. **Pickleball** - Journey timeline and stats
6. **Contact** - Contact links and optional form
7. **Footer** - Copyright and quick links

## 🛠️ Project Structure

```
personal-website/
├── public/
│   └── resume.pdf (add your resume here)
├── src/
│   ├── components/
│   │   ├── Navigation.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   ├── Drone.jsx
│   │   ├── Pickleball.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── hooks/
│   │   ├── useDarkMode.js
│   │   └── useScrollSpy.js
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

## 🎨 Design Tokens

- **Max Width**: 1200px
- **Section Padding**: py-24 md:py-28
- **Border Radius**: rounded-lg (0.5rem), rounded-xl (0.75rem), rounded-2xl (1rem)
- **Shadows**: shadow-lg, shadow-xl, shadow-2xl
- **Transitions**: 250-400ms ease-out

## 📱 Responsive Breakpoints

- Mobile: < 768px
- Tablet: 768px - 1023px
- Desktop: ≥ 1024px

## ♿ Accessibility

- Semantic HTML
- ARIA labels for interactive elements
- Focus visible states
- Reduced motion support via `prefers-reduced-motion`
- Keyboard navigation support

## 📄 License

MIT License - feel free to use this template for your own portfolio!

## 🤝 Contributing

This is a personal portfolio, but feel free to fork and customize it for your own use.

---

Built with ❤️ by Zander Marenberg

