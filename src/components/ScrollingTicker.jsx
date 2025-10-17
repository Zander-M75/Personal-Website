import { motion } from 'framer-motion';

export const ScrollingTicker = ({ items, speed = 30 }) => {
  // Duplicate items to create seamless loop
  const duplicatedItems = [...items, ...items, ...items];

  return (
    <div className="relative overflow-hidden bg-mint/10 dark:bg-mint/5 py-4 border-y border-mint/20">
      <motion.div
        className="flex gap-8 whitespace-nowrap"
        animate={{
          x: [0, -100 * (items.length / 3) + '%'],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: 'loop',
            duration: speed,
            ease: 'linear',
          },
        }}
      >
        {duplicatedItems.map((item, index) => (
          <div
            key={index}
            className="flex items-center gap-3 text-lg font-medium text-navy dark:text-offwhite"
          >
            <span className="text-mint text-2xl">•</span>
            <span>{item}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

