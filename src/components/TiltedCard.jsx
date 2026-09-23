/**
 * ANATOMI FILE: src/components/TiltedCard.jsx
 * ====================================================================
 * 1. IMPORTS
 *    - React & Hooks: useState, useRef
 *    - Framer Motion: motion, useSpring, useTransform
 * 
 * 2. SUB-HELPER / DEFAULT PROPS
 *    - maxTilt: derajat kemiringan maksimum (default: 12)
 *    - scaleOnHover: efek scale saat kursor di atas kartu (default: 1.02)
 * 
 * 3. KOMPONEN UTAMA (TiltedCard)
 *    - State & Motion Values: x, y spring physics
 *    - Handlers:
 *      * handleMouseMove: Menghitung posisi kursor relatif ke tengah elemen
 *      * handleMouseLeave: Reset rotasi ke 0 dengan spring damping
 *    - Render JSX:
 *      * motion.div wrapper dengan CSS preserve-3d & perspective
 *      * Glare reflection layer (cahaya pantulan mengikuti sudut kursor)
 *      * Children container
 * 
 * 4. EXPORT
 *    - Default export TiltedCard
 * ====================================================================
 * ALUR KERJA:
 * Komponen ini membungkus elemen (seperti kartu project atau foto hero).
 * Saat kursor bergerak di atasnya, rotasi X dan Y dihitung secara matematis
 * dan dihaluskan oleh pegas (spring) untuk menghasilkan efek parallax 3D taktil.
 * ====================================================================
 */

import React, { useRef, useState } from 'react';
import { motion, useSpring } from 'framer-motion';

const springConfig = { damping: 20, stiffness: 200, mass: 0.5 };

const TiltedCard = ({
  children,
  className = '',
  maxTilt = 10,
  scaleOnHover = 1.02,
  showGlare = true,
  disabled = false
}) => {
  const cardRef = useRef(null);

  // Springs untuk kehalusan pergerakan sudut
  const rotateX = useSpring(0, springConfig);
  const rotateY = useSpring(0, springConfig);
  const scale = useSpring(1, springConfig);

  // Posisi pantulan cahaya (glare)
  const [glarePosition, setGlarePosition] = useState({ x: 50, y: 50, opacity: 0 });

  const handleMouseMove = (e) => {
    if (disabled || !cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    // Hitung posisi kursor relatif (-1 hingga 1 dari tengah)
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = (mouseX / width) - 0.5;
    const yPct = (mouseY / height) - 0.5;

    // Rotasi X dipengaruhi oleh pergerakan vertikal (Y), dan sebaliknya
    rotateX.set(-yPct * maxTilt);
    rotateY.set(xPct * maxTilt);

    if (showGlare) {
      setGlarePosition({
        x: (mouseX / width) * 100,
        y: (mouseY / height) * 100,
        opacity: 0.25
      });
    }
  };

  const handleMouseEnter = () => {
    if (disabled) return;
    scale.set(scaleOnHover);
  };

  const handleMouseLeave = () => {
    rotateX.set(0);
    rotateY.set(0);
    scale.set(1);
    setGlarePosition(prev => ({ ...prev, opacity: 0 }));
  };

  return (
    <div 
      style={{ perspective: 1000 }} 
      className="inline-block w-full"
    >
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          scale,
          transformStyle: 'preserve-3d'
        }}
        className={`relative overflow-hidden ${className}`}
      >
        {children}

        {/* Dynamic Glare Light Reflection */}
        {showGlare && (
          <div
            className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300 rounded-[inherit]"
            style={{
              opacity: glarePosition.opacity,
              background: `radial-gradient(circle at ${glarePosition.x}% ${glarePosition.y}%, rgba(255, 255, 255, 0.45), transparent 70%)`
            }}
          />
        )}
      </motion.div>
    </div>
  );
};

export default TiltedCard;
