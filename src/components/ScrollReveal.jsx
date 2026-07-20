import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ 
  children, 
  delay = 0, 
  duration = 0.5, 
  yOffset = 25, 
  xOffset = 0,
  className = "" 
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: yOffset, x: xOffset }}
      whileInView={{ opacity: 1, y: 0, x: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ 
        duration: duration, 
        delay: delay, 
        ease: [0.215, 0.61, 0.355, 1] // Custom smooth cubic-bezier curve
      }}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
