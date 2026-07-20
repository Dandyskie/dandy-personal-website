import React from 'react';
import { motion } from 'framer-motion';

const ScrollReveal = ({ 
  children, 
  variant = "fade-up", // "fade-up" | "fade-down" | "fade-left" | "fade-right" | "zoom-in" | "zoom-out" | "flip-up" | "spring-up"
  delay = 0, 
  duration = 0.6, 
  yOffset = 30, 
  xOffset = 30,
  threshold = 0.1,
  once = true,
  className = "" 
}) => {
  const getVariants = () => {
    switch (variant) {
      case "fade-up":
        return {
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 }
        };
      case "fade-down":
        return {
          hidden: { opacity: 0, y: -yOffset },
          visible: { opacity: 1, y: 0 }
        };
      case "fade-left":
        return {
          hidden: { opacity: 0, x: xOffset },
          visible: { opacity: 1, x: 0 }
        };
      case "fade-right":
        return {
          hidden: { opacity: 0, x: -xOffset },
          visible: { opacity: 1, x: 0 }
        };
      case "zoom-in":
        return {
          hidden: { opacity: 0, scale: 0.85 },
          visible: { opacity: 1, scale: 1 }
        };
      case "zoom-out":
        return {
          hidden: { opacity: 0, scale: 1.15 },
          visible: { opacity: 1, scale: 1 }
        };
      case "flip-up":
        return {
          hidden: { opacity: 0, rotateX: 45, y: yOffset },
          visible: { opacity: 1, rotateX: 0, y: 0 }
        };
      case "spring-up":
        return {
          hidden: { opacity: 0, y: yOffset * 1.5, scale: 0.95 },
          visible: { opacity: 1, y: 0, scale: 1 }
        };
      default:
        return {
          hidden: { opacity: 0, y: yOffset },
          visible: { opacity: 1, y: 0 }
        };
    }
  };

  // Snappy spring config for interactive feeling
  const springTransition = {
    type: "spring",
    stiffness: 85,
    damping: 13,
    mass: 0.7,
    duration: duration,
    delay: delay
  };

  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once, amount: threshold }}
      variants={getVariants()}
      transition={springTransition}
      style={variant === "flip-up" ? { perspective: 1000 } : {}}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default ScrollReveal;
