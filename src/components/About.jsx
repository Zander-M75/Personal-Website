import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

const quickFacts = [
  { label: 'Location', value: 'Chatham, NJ' },
  { label: 'Focus', value: 'Data + Web' },
  { label: 'Tools', value: 'React, Vite, Tailwind, SQL, R, Tableau' },
  { label: 'Interests', value: 'NHL, Drones, Pickleball' },
  { label: 'Currently', value: 'Building portfolio, new projects' },
  { label: 'Email', value: 'zander@example.com', link: 'mailto:zander@example.com' },
];

export const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="about" className="section-padding bg-offwhite dark:bg-navy">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center"
        >
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-2xl bg-gradient-to-br from-mint/20 to-navy/20 shadow-2xl overflow-hidden">
              {/* Placeholder for image - replace with actual image */}
              <div className="w-full h-full flex items-center justify-center text-navy/20 dark:text-offwhite/20 text-6xl font-bold">
                ZM
              </div>
              {/* Uncomment and use when you have an image:
              <img
                src="/path-to-your-image.jpg"
                alt="Zander Marenberg"
                className="w-full h-full object-cover"
              />
              */}
            </div>
          </motion.div>

          {/* Right - Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6">
                About
              </h2>
              <p className="text-lg leading-relaxed text-navy/80 dark:text-offwhite/80">
                Hi, I'm Zander — a NJ-based builder who loves turning ideas into
                clean, practical products. I studied Business at Rutgers, completed
                a full-stack coding bootcamp, and recently doubled down on data
                analytics. I split my time between web projects, sports analytics
                (NHL cap dashboards are my jam), and creative work like aerial drone
                photography. I care about clear UX, tidy code, and work that ships.
                When I'm not iterating on a build, you'll probably find me on a
                pickleball court.
              </p>
            </motion.div>

            {/* Quick Facts Grid */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="grid grid-cols-1 sm:grid-cols-2 gap-4"
            >
              {quickFacts.map((fact, index) => (
                <div
                  key={index}
                  className="p-4 rounded-lg bg-navy/5 dark:bg-offwhite/5 hover:bg-navy/10 dark:hover:bg-offwhite/10 transition-colors"
                >
                  <div className="text-sm font-semibold text-mint mb-1">
                    {fact.label}
                  </div>
                  {fact.link ? (
                    <a
                      href={fact.link}
                      className="text-sm text-navy/70 dark:text-offwhite/70 hover:text-mint transition-colors"
                    >
                      {fact.value}
                    </a>
                  ) : (
                    <div className="text-sm text-navy/70 dark:text-offwhite/70">
                      {fact.value}
                    </div>
                  )}
                </div>
              ))}
            </motion.div>

            {/* Download Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              <a
                href="/resume.pdf"
                download
                className="inline-flex items-center gap-2 px-6 py-3 bg-navy dark:bg-offwhite text-offwhite dark:text-navy font-semibold rounded-lg hover:opacity-90 transition-all"
              >
                <span>Download Resume</span>
                <span>↓</span>
              </a>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

