import { motion } from 'framer-motion';

const floatingElements = [
  { type: 'image', src: '/images/icons/New_York_Rangers.svg', alt: 'Rangers', delay: 0 },
  { type: 'image', src: '/images/icons/Jets.svg', alt: 'Jets', delay: 0.5 },
  { type: 'image', src: '/images/icons/Arsenal_FC.svg', alt: 'Arsenal', delay: 1 },
  { type: 'image', src: '/images/icons/octane1.svg', alt: 'Octane', delay: 1.5 },
  { type: 'image', src: '/images/icons/stang_logo.svg', alt: 'Mustang', delay: 2 },
  { type: 'image', src: '/images/icons/Giants.svg', alt: 'Giants', delay: 2.5 },
  { type: 'image', src: '/images/icons/Yankees.svg', alt: 'Yankees', delay: 3 },
  { type: 'image', src: '/images/icons/Knicks.svg', alt: 'Knicks', delay: 3 },
  { type: 'image', src: '/images/icons/strawhat.svg', alt: 'Strawhats', delay: 3 },
  { icon: '🥍', label: 'Lacrosse', delay: 3.5 },
  { icon: '🏒', label: 'Hockey', delay: 3.5 },
  { icon: '🏓', label: 'Pickleball', delay: 4 },
  { icon: '🚁', label: 'Drone', delay: 4.5 },
  { icon: '📊', label: 'Analytics', delay: 5 },
  { icon: '💻', label: 'Code', delay: 5.5 },
  { icon: '🎯', label: 'Target', delay: 6.5 },
  { icon: '⚡', label: 'Energy', delay: 7 },
  { icon: '🚗', label: 'Car', delay: 7.5 },
  { icon: '🎮', label: 'Gaming', delay: 9 },
  { icon: '📱', label: 'Mobile', delay: 9.5 },
  { icon: '🌐', label: 'Web', delay: 10 },
  { icon: '📈', label: 'Growth', delay: 11 },
  { icon: '🚀', label: 'Launch', delay: 12 },
  { icon: '💡', label: 'Ideas', delay: 12.5 },
  { icon: '⭐', label: 'Star', delay: 13 },
  { icon: '🔥', label: 'Fire', delay: 13.5 },
  { icon: '🌍', label: 'Global', delay: 14.5 },
];

export const FloatingElements = () => {

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {floatingElements.map((element, index) => (
        <motion.div
          key={index}
          className={`absolute select-none ${
            element.type === 'image' 
              ? 'w-16 h-16 md:w-24 md:h-24 opacity-15 dark:opacity-10' 
              : 'text-6xl md:text-8xl opacity-20 dark:opacity-15'
          }`}
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
          {element.type === 'image' ? (
            <img 
              src={element.src} 
              alt={element.alt} 
              className="w-full h-full object-contain"
            />
          ) : (
            element.icon
          )}
        </motion.div>
      ))}
    </div>
  );
};
