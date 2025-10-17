import { motion } from 'framer-motion';

export const Footer = ({ toggleDark, isDark }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-offwhite dark:bg-navy border-t border-navy/10 dark:border-offwhite/10">
      <div className="container-width px-6 md:px-8 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Left - Copyright */}
          <div className="text-center md:text-left">
            <p className="text-sm text-navy/70 dark:text-offwhite/70">
              © {new Date().getFullYear()} Zander Marenberg
            </p>
            <p className="text-xs text-navy/50 dark:text-offwhite/50 mt-1">
              Built with React + Vite + Tailwind + Framer Motion
            </p>
          </div>

          {/* Center - Links */}
          <div className="flex items-center gap-6">
            <a
              href="https://github.com/zandermarenberg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy/70 dark:text-offwhite/70 hover:text-mint transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/zandermarenberg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy/70 dark:text-offwhite/70 hover:text-mint transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://instagram.com/zandermarenberg"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-navy/70 dark:text-offwhite/70 hover:text-mint transition-colors"
            >
              Instagram
            </a>
          </div>

          {/* Right - Back to Top & Theme Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg hover:bg-navy/10 dark:hover:bg-offwhite/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
            </button>
            <button
              onClick={scrollToTop}
              className="px-4 py-2 bg-mint text-navy font-medium rounded-lg hover:bg-mint/90 transition-all hover:scale-105 active:scale-95 text-sm"
            >
              ↑ Top
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

