import React from 'react';
import { motion } from 'framer-motion';

interface AnimatedShapeProps {
  color: string;
  delay?: number;
  className?: string;
}

const AnimatedShape: React.FC<AnimatedShapeProps> = ({ color, delay = 0, className = '' }) => {
  return (
    <motion.div
      className={`absolute ${className}`}
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.8,
        delay,
        ease: [0.43, 0.13, 0.23, 0.96]
      }}
    >
      <div className={`w-32 h-32 ${color} rounded-lg transform rotate-45`} />
    </motion.div>
  );
};

export default AnimatedShape;