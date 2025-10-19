import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const contactLinks = [
  {
    name: 'Email',
    href: 'mailto:marenberg.zander@gmail.com',
    icon: '✉️',
    description: 'marenberg.zander@gmail.com',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/zander-marenberg/',
    icon: '💼',
    description: 'Professional network',
  },
  {
    name: 'X (Twitter)',
    href: 'https://x.com/zandermarenberg',
    icon: '𝕏',
    description: 'Follow me on X',
  },
  {
    name: 'GitHub',
    href: 'https://github.com/Zander-M75',
    icon: '💻',
    description: 'Code & projects',
  },
  {
    name: 'Tableau',
    href: 'https://public.tableau.com/app/profile/zander.marenberg',
    icon: '📊',
    description: 'Data visualizations',
  },
  {
    name: 'Instagram',
    href: 'https://www.instagram.com/zander_m75/',
    icon: '📸',
    description: 'Rarely on here',
  },
];

export const Contact = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="contact" className="section-padding bg-navy dark:bg-offwhite">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4 text-offwhite dark:text-navy">
            Let's build something.
          </h2>
          <p className="text-lg text-offwhite/70 dark:text-navy/70 mb-12">
            Have a project in mind? Want feedback on a dashboard? Let's chat.
          </p>

          {/* Contact Links Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 mb-12"
            initial="hidden"
            animate={isInView ? 'show' : 'hidden'}
            variants={{
              hidden: { opacity: 0 },
              show: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.1,
                },
              },
            }}
          >
            {contactLinks.map((link) => (
              <motion.a
                key={link.name}
                href={link.href}
                target={link.href.startsWith('http') ? '_blank' : undefined}
                rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                variants={{
                  hidden: { opacity: 0, y: 20 },
                  show: { opacity: 1, y: 0 },
                }}
                className="group p-6 rounded-xl bg-offwhite/10 dark:bg-navy/10 border border-offwhite/20 dark:border-navy/20 hover:bg-offwhite/20 dark:hover:bg-navy/20 hover:border-mint transition-all hover:scale-105"
              >
                <div className="text-4xl mb-3">{link.icon}</div>
                <h3 className="font-display font-bold text-offwhite dark:text-navy mb-1 group-hover:text-mint transition-colors">
                  {link.name}
                </h3>
                <p className="text-sm text-offwhite/60 dark:text-navy/60">
                  {link.description}
                </p>
              </motion.a>
            ))}
          </motion.div>

          {/* Optional Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="max-w-md mx-auto"
          >
            <form className="space-y-4">
              <input
                type="text"
                placeholder="Your name"
                className="w-full px-4 py-3 rounded-lg bg-offwhite/10 dark:bg-navy/10 border border-offwhite/20 dark:border-navy/20 text-offwhite dark:text-navy placeholder-offwhite/50 dark:placeholder-navy/50 focus:outline-none focus:border-mint transition-colors"
              />
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-4 py-3 rounded-lg bg-offwhite/10 dark:bg-navy/10 border border-offwhite/20 dark:border-navy/20 text-offwhite dark:text-navy placeholder-offwhite/50 dark:placeholder-navy/50 focus:outline-none focus:border-mint transition-colors"
              />
              <textarea
                placeholder="Your message"
                rows="4"
                className="w-full px-4 py-3 rounded-lg bg-offwhite/10 dark:bg-navy/10 border border-offwhite/20 dark:border-navy/20 text-offwhite dark:text-navy placeholder-offwhite/50 dark:placeholder-navy/50 focus:outline-none focus:border-mint transition-colors resize-none"
              />
              <button
                type="submit"
                className="w-full px-8 py-4 bg-mint text-navy font-semibold rounded-lg hover:bg-mint/90 transition-all hover:scale-105 active:scale-95 shadow-lg"
              >
                Send Message
              </button>
            </form>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

