import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Projects', href: '#projects' },
  { name: 'Drone', href: '#drone' },
  { name: 'Pickleball', href: '#pickleball' },
  { name: 'Contact', href: '#contact' },
];

const socialLinks = [
  { name: 'GitHub', href: 'https://github.com/zandermarenberg', icon: '→ GitHub' },
  { name: 'LinkedIn', href: 'https://linkedin.com/in/zandermarenberg', icon: '→ LinkedIn' },
  { name: 'Instagram', href: 'https://instagram.com/zandermarenberg', icon: '→ Instagram' },
  { name: 'Tableau', href: 'https://public.tableau.com/app/profile/zander.marenberg', icon: '→ Tableau' },
];

export const Navigation = ({ activeSection, isDark, toggleDark }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setIsMobileMenuOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-offwhite/90 dark:bg-navy/90 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container-width">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="text-2xl font-display font-bold tracking-tight hover:text-mint transition-colors"
          >
            ZM
          </a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className={`text-sm font-medium transition-all hover:text-mint relative ${
                  activeSection === link.href.substring(1)
                    ? 'text-mint'
                    : 'text-navy/70 dark:text-offwhite/70'
                }`}
              >
                {link.name}
                {activeSection === link.href.substring(1) && (
                  <motion.div
                    layoutId="activeNav"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-mint"
                    initial={false}
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right side - Theme Toggle */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg hover:bg-navy/10 dark:hover:bg-offwhite/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              <span className="text-xl">{isDark ? '☀️' : '🌙'}</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-navy/10 dark:hover:bg-offwhite/10 transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMobileMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-offwhite/95 dark:bg-navy/95 backdrop-blur-md border-t border-navy/10 dark:border-offwhite/10"
          >
            <div className="container-width py-4 space-y-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`block px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    activeSection === link.href.substring(1)
                      ? 'bg-mint/10 text-mint'
                      : 'hover:bg-navy/5 dark:hover:bg-offwhite/5'
                  }`}
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 border-t border-navy/10 dark:border-offwhite/10 grid grid-cols-2 gap-2">
                {socialLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 text-sm text-center rounded-lg hover:bg-navy/5 dark:hover:bg-offwhite/5 transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

