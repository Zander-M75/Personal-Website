import { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const projectsData = [
  {
    id: 1,
    title: 'NHL Metro Salary Cap Dashboard',
    category: 'data',
    description: 'Explores cap allocation vs. team success across the Metro Division (2021-2025).',
    tags: ['Google Sheets', 'Tableau', 'SQL', 'R', 'Data Viz'],
    image: '/images/projects/metro.jpg', 
    links: [
      { label: 'View Case Study', href: 'https://tide-comet-ad3.notion.site/NHL-Metropolitan-Division-Capstone-Salary-Cap-vs-Success-26bdafd5d4668033af71c70540afb5e8', type: 'primary' },
      
    ],
  },
  {
    id: 7,
    title: 'Ecommerce Ui Kit',
    category: 'web',
    description: 'Ecommerce UI Kit with React, Tailwind, and Framer Motion. A collection of reusable components for ecommerce websites.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    image: '/images/projects/ecommerce.png',
    links: [
      { label: 'View Website', href: 'https://ui-kit-ecommerce.vercel.app/', type: 'primary' },
      { label: 'Repo', href: 'https://github.com/Zander-M75/Ui-Kit-Ecommerce' },
    ],
  },
  {
    id: 2,
    title: 'AHS Connect — Marketing Site',
    category: 'web',
    description: 'Clean small business landing page with sticky nav and hero video for hotel procurement services.',
    tags: ['React', 'Tailwind', 'Vite'],
    image: '/images/projects/hotel-hero.png',
    links: [
      { label: 'Live Site', href: 'https://ahs-connect.com/', type: 'primary' },
      { label: 'Repo', href: 'https://github.com/Zander-M75/AHS' },
    ],
  },
  {
    id: 3,
    title: 'Pane — Client Portal Generator',
    category: 'web',
    description: 'Web app with templates for invoices, tasks, and schedules for freelancers.',
    tags: ['React', 'Firebase', 'Auth'],
    image: null,
    links: [
      { label: 'Demo', href: '#', type: 'primary' },
      { label: 'Repo', href: '#' },
    ],
  },
  {
    id: 4,
    title: 'Gradr — AI Card Grading Concept',
    category: 'web',
    description: 'Brand identity and prototype for AI-powered sports card grading service.',
    tags: ['UI/UX', 'Figma', 'Branding'],
    image: '/images/projects/gradr-thumbnail.png',
    links: [
      { label: 'View Case Study', href: 'https://tide-comet-ad3.notion.site/Case-Study-Gradr-The-Smart-Way-to-Grade-Cards-291dafd5d4668076b5dcf5792ff5f04b', type: 'primary' },
    ],
  },
  {
    id: 5,
    title: 'NBA Draft Analysis',
    category: 'data',
    description: 'Interactive dashboard analyzing draft pick value and player performance metrics.',
    tags: ['Tableau', 'Python', 'Data Analysis'],
    image: null,
    links: [
      { label: 'View Dashboard', href: '#', type: 'primary' },
      { label: 'GitHub', href: '#' },
    ],
  },
  {
    id: 6,
    title: 'Portfolio Website',
    category: 'web',
    description: 'This site! Modern one-page portfolio with smooth animations and dark mode.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    image: '/images/projects/Portfolio-thumbnail.png',
    links: [
      { label: 'GitHub', href: 'https://github.com/Zander-M75/Personal-Website', type: 'primary' },
    ],
  },
 
];

const filters = ['All', 'Data', 'Web'];

export const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const filteredProjects = projectsData.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter.toLowerCase();
  });

  return (
    <section id="projects" className="section-padding bg-navy/5 dark:bg-offwhite/5">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Projects
          </h2>
          <p className="text-lg text-navy/70 dark:text-offwhite/70 mb-8">
            Selected work — live demos, repos, and case studies.
          </p>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-3 justify-center">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeFilter === filter
                    ? 'bg-mint text-navy shadow-lg'
                    : 'bg-navy/10 dark:bg-offwhite/10 hover:bg-navy/20 dark:hover:bg-offwhite/20'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="group bg-offwhite dark:bg-navy rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all hover:-translate-y-1 border border-navy/10 dark:border-offwhite/10"
            >
              {/* Thumbnail */}
              <div className="aspect-video bg-gradient-to-br from-mint/20 to-navy/20 flex items-center justify-center relative overflow-hidden">
                {project.image ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="text-4xl font-bold text-navy/20 dark:text-offwhite/20">
                    {project.title.charAt(0)}
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-display font-bold mb-2 group-hover:text-mint transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-navy/70 dark:text-offwhite/70 mb-4">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 text-xs font-medium bg-navy/5 dark:bg-offwhite/5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-2">
                  {project.links.map((link) => (
                    <a
                      key={link.label}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`px-4 py-2 text-sm font-medium rounded-lg transition-all ${
                        link.type === 'primary'
                          ? 'bg-mint text-navy hover:bg-mint/90'
                          : 'bg-navy/10 dark:bg-offwhite/10 hover:bg-navy/20 dark:hover:bg-offwhite/20'
                      }`}
                    >
                      {link.label} →
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

