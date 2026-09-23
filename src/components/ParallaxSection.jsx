/**
 * ANATOMI FILE: src/components/ParallaxSection.jsx
 * ====================================================================
 * 1. IMPORTS
 *    - React, useRef
 *    - Framer Motion: motion, useScroll, useTransform, useInView
 * 
 * 2. PROPS:
 *    - id: section anchor tag
 *    - className: string styling
 *    - revealDirection: 'up' | 'down' | 'left' | 'right' | 'scale' | 'none'
 *    - parallaxSpeed: subtle vertical shift relative to scroll (-1 to 1)
 *    - delay: initial animation delay
 *    - children: ReactNode
 *    - fullBleed: boolean (whether section stretches edge-to-edge)
 * 
 * 3. KOMPONEN UTAMA (ParallaxSection)
 *    - Mengontrol transisi masuk (viewport reveal) dan efek parallax depth
 *      saat perpindahan antar section di website Dandy.
 * ====================================================================
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const getInitialTransform = (direction) => {
  switch (direction) {
    case 'up':
      return { opacity: 0, y: 50 };
    case 'down':
      return { opacity: 0, y: -50 };
    case 'left':
      return { opacity: 0, x: -50 };
    case 'right':
      return { opacity: 0, x: 50 };
    case 'scale':
      return { opacity: 0, scale: 0.94, y: 20 };
    case 'none':
      return { opacity: 1, y: 0 };
    default:
      return { opacity: 0, y: 40 };
  }
};

const ParallaxSection = ({
  id,
  className = '',
  revealDirection = 'up',
  parallaxSpeed = 0.2,
  delay = 0,
  fullBleed = false,
  children,
  ...props
}) => {
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  // Calculate vertical parallax shift with distinct amplitude
  // Using 120px multiplier ensures noticeable, active parallax motion
  const yShift = useTransform(
    scrollYProgress,
    [0, 1],
    [parallaxSpeed * 100, -parallaxSpeed * 100]
  );

  const initialProps = getInitialTransform(revealDirection);

  return (
    <section
      id={id}
      ref={containerRef}
      className={`relative ${fullBleed ? 'w-full' : ''} ${className}`}
      {...props}
    >
      {/* Layer 1: Continuous Parallax Motion Container (NO animate prop conflict) */}
      <motion.div
        style={{ y: yShift }}
        className="w-full h-full will-change-transform"
      >
        {/* Layer 2: Viewport Entry Reveal Animation */}
        <motion.div
          initial={initialProps}
          whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{
            duration: 0.8,
            delay: delay,
            ease: [0.16, 1, 0.3, 1] // smooth editorial cubic-bezier
          }}
          className="w-full h-full"
        >
          {children}
        </motion.div>
      </motion.div>
    </section>
  );
};

export default ParallaxSection;
