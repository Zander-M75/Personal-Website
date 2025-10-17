# 🏗️ Component Structure

Visual guide to understanding the component architecture and how everything connects.

---

## 📊 Component Hierarchy

```
App.jsx (Root)
│
├── Navigation (Sticky Header)
│   ├── Logo/Wordmark
│   ├── Desktop Nav Links
│   ├── Theme Toggle
│   └── Mobile Menu (Hamburger)
│       └── Mobile Nav Links
│       └── Social Links
│
├── Main (Content)
│   │
│   ├── Hero (#home)
│   │   ├── Headline
│   │   ├── Subheadline
│   │   ├── CTA Buttons
│   │   ├── Tech Stack Chips
│   │   └── Scroll Indicator
│   │
│   ├── About (#about)
│   │   ├── Profile Image
│   │   ├── Section Title
│   │   ├── Bio Paragraph
│   │   ├── Quick Facts Grid (2x3)
│   │   └── Resume Button
│   │
│   ├── Projects (#projects)
│   │   ├── Section Header
│   │   ├── Filter Pills (All/Data/Web)
│   │   └── Project Grid
│   │       └── Project Card (x6)
│   │           ├── Thumbnail
│   │           ├── Title
│   │           ├── Description
│   │           ├── Tech Tags
│   │           └── Action Links
│   │
│   ├── Drone (#drone)
│   │   ├── Section Header
│   │   ├── Instagram Link
│   │   ├── Photo Grid (3 columns)
│   │   │   └── Photo Card (x6)
│   │   └── Lightbox Modal
│   │       ├── Full Image
│   │       ├── Caption
│   │       └── Close Button
│   │
│   ├── Pickleball (#pickleball)
│   │   ├── Section Header
│   │   ├── Stats Strip (4 stats)
│   │   ├── Timeline
│   │   │   └── Milestone (x4)
│   │   ├── Photo Gallery (2x2)
│   │   └── Instagram CTA
│   │
│   └── Contact (#contact)
│       ├── Headline
│       ├── Subheadline
│       ├── Contact Links Grid
│       │   └── Contact Card (x5)
│       └── Optional Form
│           ├── Name Input
│           ├── Email Input
│           ├── Message Textarea
│           └── Submit Button
│
└── Footer
    ├── Copyright
    ├── Social Links
    ├── Theme Toggle
    └── Back to Top Button
```

---

## 🔌 Data Flow

```
App.jsx
  │
  ├─ useDarkMode() → isDark, setIsDark
  │   └─> localStorage persistence
  │   └─> HTML class toggle
  │
  ├─ useScrollSpy() → activeSection
  │   └─> IntersectionObserver
  │   └─> Tracks visible section
  │
  └─ Props passed down:
      ├─> Navigation (activeSection, isDark, toggleDark)
      └─> Footer (isDark, toggleDark)
```

---

## 🎣 Custom Hooks

### useDarkMode
```javascript
// Location: src/hooks/useDarkMode.js
// Purpose: Manages theme state and persistence

Returns: [isDark, setIsDark]

Features:
- Reads from localStorage on mount
- Falls back to system preference
- Syncs to localStorage on change
- Toggles 'dark' class on <html>
```

### useScrollSpy
```javascript
// Location: src/hooks/useScrollSpy.js
// Purpose: Tracks which section is currently visible

Parameters:
- sectionIds: Array of section IDs to observe
- offset: Top margin before triggering (default: 100px)

Returns: activeSection (string)

Features:
- IntersectionObserver API
- Efficient performance
- Cleanup on unmount
```

---

## 📁 File Organization

```
src/
│
├── components/          # React components
│   ├── Navigation.jsx   # 180 lines - Nav bar logic
│   ├── Hero.jsx         # 90 lines - Landing section
│   ├── About.jsx        # 95 lines - About section
│   ├── Projects.jsx     # 150 lines - Project gallery
│   ├── Drone.jsx        # 125 lines - Photo gallery
│   ├── Pickleball.jsx   # 200 lines - Timeline & stats
│   ├── Contact.jsx      # 120 lines - Contact section
│   └── Footer.jsx       # 60 lines - Footer
│
├── hooks/              # Custom React hooks
│   ├── useDarkMode.js  # 25 lines - Theme management
│   └── useScrollSpy.js # 35 lines - Scroll tracking
│
├── App.jsx             # 30 lines - Root component
├── main.jsx            # 10 lines - Entry point
└── index.css           # 50 lines - Global styles
```

---

## 🎨 Styling Architecture

```
Tailwind CSS (Utility-first)
│
├── tailwind.config.js
│   ├── Custom colors (navy, mint, offwhite)
│   ├── Custom fonts (display, body)
│   ├── Custom animations
│   └── Extended utilities
│
├── index.css
│   ├── Tailwind imports (@tailwind directives)
│   ├── Custom utility classes (.section-padding, etc.)
│   └── Global resets (scroll-behavior, etc.)
│
└── Component styles (inline with className)
    ├── Responsive classes (md:, lg:)
    ├── Dark mode classes (dark:)
    ├── Hover states (hover:)
    └── Animation classes (animate-)
```

---

## 🎭 Animation Strategy

```
Framer Motion
│
├── Container/Item Pattern
│   └── Used in Hero for staggered reveals
│
├── useInView Hook
│   └── Triggers animations when section enters viewport
│   └── Used in: About, Projects, Drone, Pickleball, Contact
│
├── AnimatePresence
│   └── Mobile menu slide in/out
│   └── Lightbox modal
│
└── Layout Animations
    └── Project filter transitions
    └── Active nav indicator
```

---

## 🔄 State Management

No external state library needed! Using React built-ins:

```
Local Component State (useState)
├── Navigation
│   ├── isScrolled (boolean)
│   └── isMobileMenuOpen (boolean)
├── Projects
│   └── activeFilter (string)
├── Drone
│   └── selectedPhoto (object | null)
└── Contact
    └── formData (object)

Global State (Props + Hooks)
├── isDark (from useDarkMode)
└── activeSection (from useScrollSpy)
```

---

## 🎯 Component Props

### Navigation
```javascript
{
  activeSection: string,  // Current visible section ID
  isDark: boolean,        // Dark mode state
  toggleDark: function    // Toggle dark mode
}
```

### Footer
```javascript
{
  isDark: boolean,        // Dark mode state
  toggleDark: function    // Toggle dark mode
}
```

### All other components
No props - self-contained sections

---

## 🚀 Render Flow

```
1. User loads page
   ↓
2. App.jsx mounts
   ↓
3. useDarkMode checks localStorage/system preference
   ↓
4. useScrollSpy sets up IntersectionObserver
   ↓
5. Navigation renders with active state
   ↓
6. Sections render with initial state
   ↓
7. User scrolls
   ↓
8. IntersectionObserver fires
   ↓
9. activeSection updates
   ↓
10. Navigation re-renders active link
    ↓
11. Framer Motion triggers section animations
```

---

## 📦 Component Communication

```
No complex communication needed!

Navigation ← App → Footer
(Receives props from App)

Hero, About, Projects, Drone, Pickleball, Contact
(Isolated, no cross-communication)

Benefits:
✅ Simple to understand
✅ Easy to modify
✅ No prop drilling
✅ Maintainable
```

---

## 🎨 Responsive Breakpoints by Component

```
Navigation:
  Mobile (<768px): Hamburger menu
  Desktop (≥768px): Inline nav links

Hero:
  All sizes: Stacked, centered content
  Desktop: Larger text sizes

About:
  Mobile: Stacked (image → content)
  Desktop: 2-column side-by-side

Projects:
  Mobile: 1 column
  Tablet (≥768px): 2 columns
  Desktop (≥1024px): 3 columns

Drone:
  Mobile: 1-2 columns
  Desktop: 3 columns

Pickleball:
  Stats: 2 columns → 4 columns
  Timeline: Linear → Alternating
  Photos: 2x2 grid on all sizes

Contact:
  Links: 1 column → 2 columns → 3 columns
  Form: Full width on all sizes
```

---

## 🔧 Adding New Components

To add a new section:

1. **Create component file:**
   ```bash
   src/components/NewSection.jsx
   ```

2. **Import in App.jsx:**
   ```javascript
   import { NewSection } from './components/NewSection';
   ```

3. **Add to render:**
   ```jsx
   <NewSection />
   ```

4. **Add ID to section:**
   ```jsx
   <section id="newsection">
   ```

5. **Update sectionIds array:**
   ```javascript
   const sectionIds = [..., 'newsection'];
   ```

6. **Add to Navigation links:**
   ```javascript
   { name: 'New Section', href: '#newsection' }
   ```

---

## 🎯 Key Design Patterns Used

1. **Composition over Inheritance**
   - Small, focused components
   - Composed together in App.jsx

2. **Custom Hooks**
   - Reusable logic extraction
   - Clean separation of concerns

3. **Controlled vs Uncontrolled**
   - Form inputs: Uncontrolled (for simplicity)
   - Theme state: Controlled (for persistence)

4. **Presentational Components**
   - Most components are presentational
   - Logic isolated in hooks or top-level

5. **Single Responsibility**
   - Each component has one job
   - Easy to test and modify

---

## 💡 Pro Tips

### Finding Components
- **Navigation issues?** → `src/components/Navigation.jsx`
- **Hero content?** → `src/components/Hero.jsx`
- **Project cards?** → `src/components/Projects.jsx` (projectsData array)
- **Dark mode broken?** → `src/hooks/useDarkMode.js`
- **Nav not highlighting?** → `src/hooks/useScrollSpy.js`

### Debugging
1. Check browser console for errors
2. Use React DevTools to inspect component state
3. Add console.logs in hooks to track state changes
4. Check localStorage for theme persistence
5. Inspect elements to verify classes are applied

### Performance
- Components are already optimized
- Framer Motion uses GPU acceleration
- IntersectionObserver is efficient
- No unnecessary re-renders

---

## 📚 Further Reading

- [React Component Patterns](https://react.dev/learn/thinking-in-react)
- [Custom Hooks Guide](https://react.dev/learn/reusing-logic-with-custom-hooks)
- [Framer Motion Docs](https://www.framer.com/motion/)
- [Tailwind Best Practices](https://tailwindcss.com/docs/reusing-styles)

---

This structure is designed to be simple, maintainable, and easy to customize. Each piece has a clear purpose and location! 🎯

