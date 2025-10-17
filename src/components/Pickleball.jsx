import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const milestones = [
  {
    date: 'Sep 2023',
    title: 'Started Playing',
    description: 'Picked up a paddle for the first time',
  },
  {
    date: 'Apr 2024 - Aug 2025',
    title: 'Regular Play & Moving Up the Ranks',
    description: 'Competed with the best players in the area',
  },
  
  {
    date: 'Sep 2025',
    title: 'First Official Tournament Win',
    description: 'First place in regional mixed doubles',
  },
];

const stats = [
  { label: 'Current DUPR Rating', value: '3.3' },
  { label: 'Matches Played', value: '150+' },
  { label: 'Win Rate', value: '68%' },
  { label: 'Tournament Championships', value: '1' },
];

export const Pickleball = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id="pickleball" className="section-padding bg-navy/5 dark:bg-offwhite/5">
      <div className="container-width">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            Pickleball Journey
          </h2>
          <p className="text-lg text-navy/70 dark:text-offwhite/70 max-w-2xl mx-auto">
            What started as a casual weekend activity has become a genuine passion. 
            The discipline, strategy, and competitive spirit translate directly to how I approach building products.
          </p>
        </motion.div>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16"
        >
          {stats.map((stat, index) => (
            <div
              key={index}
              className="p-6 bg-offwhite dark:bg-navy rounded-xl text-center border border-navy/10 dark:border-offwhite/10 shadow-lg"
            >
              <div className="text-3xl md:text-4xl font-display font-bold text-mint mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-navy/70 dark:text-offwhite/70">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mx-auto mb-12"
        >
          <h3 className="text-2xl font-display font-bold mb-8 text-center">
            Key Milestones
          </h3>
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-mint/30 -translate-x-1/2" />

            {/* Milestones */}
            <div className="space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                  transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
                  className={`relative flex items-center gap-4 md:gap-8 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Date (mobile) */}
                  <div className="md:hidden flex-shrink-0 w-4 h-4 rounded-full bg-mint border-4 border-offwhite dark:border-navy relative z-10" />
                  
                  {/* Content */}
                  <div className={`flex-1 p-4 rounded-lg bg-offwhite dark:bg-navy border border-navy/10 dark:border-offwhite/10 shadow-lg ${
                    index % 2 === 0 ? 'md:text-right md:mr-auto md:ml-0' : 'md:text-left md:ml-auto md:mr-0'
                  } md:w-[calc(50%-2rem)]`}>
                    <div className="text-sm text-mint font-semibold mb-1">
                      {milestone.date}
                    </div>
                    <h4 className="font-display font-bold text-lg mb-1">
                      {milestone.title}
                    </h4>
                    <p className="text-sm text-navy/70 dark:text-offwhite/70">
                      {milestone.description}
                    </p>
                  </div>

                  {/* Center dot (desktop) */}
                  <div className="hidden md:block absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-mint border-4 border-offwhite dark:border-navy z-10" />
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Photo Gallery Row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-8 max-w-3xl mx-auto"
        >
          {/* First image - actual photo */}
          <div className="aspect-square rounded-xl bg-gradient-to-br from-mint/20 to-navy/20 shadow-lg overflow-hidden">
            <img 
              src="/images/pickleball/pickleball_tournament_win_1.jpg" 
              alt="Pickleball tournament win" 
              className="w-full h-full object-cover" 
            />
          </div>
          
          {/* Placeholder 1 */}
          <div className="aspect-square rounded-xl bg-gradient-to-br from-mint/20 to-navy/20 shadow-lg overflow-hidden flex items-center justify-center">
            <div className="text-4xl">🏓</div>
          </div>
          
          {/* Placeholder 2 */}
          <div className="aspect-square rounded-xl bg-gradient-to-br from-mint/20 to-navy/20 shadow-lg overflow-hidden flex items-center justify-center">
            <div className="text-4xl">🏓</div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="text-center"
        >
         
        </motion.div>
      </div>
    </section>
  );
};

