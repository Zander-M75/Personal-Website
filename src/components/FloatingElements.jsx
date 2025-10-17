import { motion } from 'framer-motion';

const floatingElements = [
  { icon: '🏒', label: 'Hockey', delay: 0 },
  { icon: '🏓', label: 'Pickleball', delay: 0.5 },
  { icon: '🚁', label: 'Drone', delay: 1 },
  { icon: '📊', label: 'Analytics', delay: 1.5 },
  { icon: '💻', label: 'Code', delay: 2 },
  { icon: '🏆', label: 'Trophy', delay: 2.5 },
  { icon: '🎯', label: 'Target', delay: 3 },
  { icon: '⚡', label: 'Energy', delay: 3.5 },
  { icon: '🚗', label: 'Mustang', delay: 4 },
  { icon: '⚽', label: 'Soccer', delay: 4.5 },
  { icon: '🏀', label: 'Basketball', delay: 5 },
  { icon: '🎮', label: 'Gaming', delay: 5.5 },
  { icon: '📱', label: 'Mobile', delay: 6 },
  { icon: '🌐', label: 'Web', delay: 6.5 },
  { icon: '🔧', label: 'Tools', delay: 7 },
  { icon: '📈', label: 'Growth', delay: 7.5 },
  { icon: '🎨', label: 'Design', delay: 8 },
  { icon: '🚀', label: 'Launch', delay: 8.5 },
  { icon: '💡', label: 'Ideas', delay: 9 },
  { icon: '⭐', label: 'Star', delay: 9.5 },
  { icon: '🔥', label: 'Fire', delay: 10 },
  { icon: '💎', label: 'Diamond', delay: 10.5 },
  { icon: '🎪', label: 'Fun', delay: 11 },
  { icon: '🌍', label: 'Global', delay: 11.5 },
];

export const FloatingElements = () => {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className="absolute text-6xl md:text-8xl opacity-20 dark:opacity-15 select-none"
          initial={{
            x: Math.random() * window.innerWidth,
            y: Math.random() * window.innerHeight,
            rotate: 0,
          }}
          animate={{
            x: [
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
              Math.random() * window.innerWidth,
            ],
            y: [
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
              Math.random() * window.innerHeight,
            ],
            rotate: [0, 360, 0],
          }}
          transition={{
            duration: 20 + Math.random() * 10,
            repeat: Infinity,
            ease: "linear",
            delay: element.delay,
          }}
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        >
          {element.icon}
        </motion.div>
      ))}
    </div>
  );
};
