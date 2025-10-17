import { motion } from 'framer-motion';

const techStack = [
  'React',
  'SQL',
  'R',
  'Tableau',
  'Tailwind',
  'Python',
  'JavaScript',
  'GSAP',
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0 },
};

export const Hero = () => {
  const scrollToSection = (id) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-mint/5 via-transparent to-navy/5 dark:from-mint/10 dark:to-navy/20" />

      <div className="container-width relative z-10 px-6 md:px-8">
        <motion.div
          variants={container}
          initial="hidden"
          animate="show"
          className="max-w-4xl mx-auto text-center"
        >
          {/* Headline */}
          <motion.h1
            variants={item}
            className="text-4xl md:text-6xl lg:text-7xl font-display font-bold leading-tight mb-6 text-balance"
          >
            
            Hey, I’m{' '} <span className="text-mint">Zander</span> — I turn data, design, and curiosity into work that’s meant to be used.{' '}
            
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={item}
            className="text-lg md:text-xl text-navy/70 dark:text-offwhite/70 mb-8 max-w-2xl mx-auto"
          >
            From web apps to dashboards to creative builds.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={item}
            className="flex flex-col sm:flex-row gap-4 justify-center mb-12"
          >
            <button
              onClick={() => scrollToSection('#projects')}
              className="px-8 py-4 bg-mint text-navy font-semibold rounded-lg hover:bg-mint/90 transition-all hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('#about')}
              className="px-8 py-4 bg-transparent border-2 border-navy dark:border-offwhite font-semibold rounded-lg hover:bg-navy/5 dark:hover:bg-offwhite/5 transition-all"
            >
              About Me
            </button>
          </motion.div>

          {/* Tech Stack Chips */}
          <motion.div
            variants={item}
            className="flex flex-wrap gap-3 justify-center items-center mb-16"
          >
            {techStack.map((tech, index) => (
              <span
                key={tech}
                className="px-4 py-2 bg-navy/5 dark:bg-offwhite/5 rounded-full text-sm font-medium hover:bg-mint/10 transition-colors"
              >
                {tech}
              </span>
            ))}
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            variants={item}
            className="flex flex-col items-center gap-2 text-navy/50 dark:text-offwhite/50"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
              className="text-2xl"
            >
              ↓
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

