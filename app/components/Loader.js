'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

// Variants for the animation of each bar
const barVariants = {
  initial: { x: 0, rotate: 0 },
  split: {
    x: [-10, 10],
    transition: { duration: 0.5, ease: 'easeOut' },
  },
  rotate: {
    rotate: 90,
    transition: { duration: 0.3, ease: 'easeInOut' },
  },
  move: (custom) => ({
    y: custom.y,
    transition: { duration: 0.4, ease: 'easeOut' },
  }),
};

// Variants for the container animation
const containerVariants = {
  hidden: { opacity: 1 },
  visible: { opacity: 1 },
  exit: {
    scale: 20,
    opacity: 0,
    transition: { duration: 0.7, ease: 'easeInOut' },
  },
};

const PreLoader = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let current = 0;
    const interval = setInterval(() => {
      current += 1;
      setProgress(current);
      if (current >= 100) {
        clearInterval(interval);
      }
    }, 40); // 100 steps * 40ms = ~4s

    return () => clearInterval(interval);
  }, []);

  return (
    <motion.div
      className="fixed inset-0 flex flex-col justify-center items-center bg-black z-50"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="flex space-x-1 mb-6">
        {/* Left Bar */}
        <motion.div
          className="w-4 h-16 bg-white"
          initial="initial"
          animate={['split', 'rotate', 'move']}
          variants={barVariants}
          custom={{ y: -40 }}
        />
        {/* Right Bar */}
        <motion.div
          className="w-4 h-16 bg-white"
          initial="initial"
          animate={['split', 'rotate', 'move']}
          variants={barVariants}
          custom={{ y: 40 }}
        />
      </div>

      {/* Percentage Text */}
      <p className="text-white text-xl font-mono tracking-widest">{progress}%</p>
    </motion.div>
  );
};

export default PreLoader;
