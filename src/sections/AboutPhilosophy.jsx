/**
 * ANATOMI FILE: src/sections/AboutPhilosophy.jsx
 * ====================================================================
 * 1. IMPORTS
 *    - React, useRef
 *    - Framer Motion: motion, useScroll, useTransform
 *    - Lucide Icons: Code2, Layers, Cpu, Zap, Globe, Sparkles
 *    - React Bits: BlurText
 * 
 * 2. KONFIGURASI BADGES KIRI & KANAN (Light Blue Accent)
 *    - 6 pilar frontend engineering dengan nuansa biru muda & cyan
 * 
 * 3. KOMPONEN UTAMA (AboutPhilosophy)
 *    - Parallax Scroll: Menggeser pill kiri dan kanan saat user scrolling
 *    - Center "Hallo!" dengan animasi BlurText
 *    - Big focus statement dengan highlight tipografi italic
 *    - 6 Flanking feature badges mengapung di kedua sisi
 * 
 * 4. EXPORT
 *    - Default export AboutPhilosophy
 * ====================================================================
 * ALUR KERJA:
 * Mereproduksi seksi "Hallo!" pada fullpage-reference.webp dengan
 * animasi teks BlurText dinamis dan aksen biru muda yang segar.
 * ====================================================================
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Layers, Cpu, Zap, Globe, Sparkles } from 'lucide-react';
import BlurText from '../components/BlurText';
import ParallaxSection from '../components/ParallaxSection';

const LEFT_PILLS = [
  { label: 'Frontend Architecture', icon: Layers, color: 'text-sky-500 bg-sky-500/10' },
  { label: 'Component Engineering', icon: Code2, color: 'text-cyan-600 bg-cyan-600/10' },
  { label: 'Clean Code & Testing', icon: Cpu, color: 'text-blue-600 bg-blue-600/10' },
];

const RIGHT_PILLS = [
  { label: 'REST API Integration', icon: Zap, color: 'text-sky-600 bg-sky-600/10' },
  { label: 'Responsive Layouts', icon: Globe, color: 'text-indigo-500 bg-indigo-500/10' },
  { label: 'Performance Tuning', icon: Sparkles, color: 'text-cyan-500 bg-cyan-500/10' },
];

const AboutPhilosophy = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const yLeft = useTransform(scrollYProgress, [0, 1], [60, -60]);
  const yRight = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <ParallaxSection
      id="about"
      revealDirection="up"
      parallaxSpeed={0.25}
      className="py-24 md:py-32 max-w-6xl mx-auto px-6 md:px-12 relative overflow-hidden"
    >
      <div ref={containerRef} className="flex flex-col items-center text-center gap-10">
        
        {/* Subtitle tag inspired by Ref 2 */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-space text-xs uppercase tracking-widest text-[#0284C7] font-bold">
            // 03. ENGINEERING PHILOSOPHY
          </span>
          <BlurText
            text="Hallo!"
            delay={100}
            animateBy="letters"
            direction="top"
            className="font-serif italic text-3xl md:text-5xl text-[#111111] justify-center"
          />
        </motion.div>

        {/* Main Focus Statement with Flanking Badges */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center w-full">
          
          {/* Flanking Badges Kiri dengan Parallax & Stagger */}
          <motion.div
            style={{ y: yLeft }}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 flex flex-row lg:flex-col justify-center lg:items-end gap-3 flex-wrap order-2 lg:order-1"
          >
            {LEFT_PILLS.map((pill, idx) => {
              const Icon = pill.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#E8E8E2] shadow-2xs text-xs font-sans font-medium text-[#111111] hover:border-[#38BDF8] hover:shadow-xs transition-all"
                >
                  <div className={`p-1 rounded-full ${pill.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{pill.label}</span>
                </div>
              );
            })}
          </motion.div>

          {/* Centered Large Philosophy Statement */}
          <motion.div 
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 flex flex-col items-center order-1 lg:order-2"
          >
            <p className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-medium text-[#111111] leading-tight max-w-2xl">
              focus is on blending clear strategy, thoughtful design, and technical discipline to{' '}
              <span className="text-[#0284C7] font-serif italic font-normal">
                craft experiences that solve real problems
              </span>
            </p>
          </motion.div>

          {/* Flanking Badges Kanan dengan Parallax */}
          <motion.div
            style={{ y: yRight }}
            className="lg:col-span-3 flex flex-row lg:flex-col justify-center lg:items-start gap-3 flex-wrap order-3"
          >
            {RIGHT_PILLS.map((pill, idx) => {
              const Icon = pill.icon;
              return (
                <div
                  key={idx}
                  className="inline-flex items-center gap-2.5 px-4 py-2.5 rounded-full bg-white border border-[#E8E8E2] shadow-2xs text-xs font-sans font-medium text-[#111111] hover:border-[#38BDF8] hover:shadow-xs transition-all"
                >
                  <div className={`p-1 rounded-full ${pill.color}`}>
                    <Icon className="w-3.5 h-3.5" />
                  </div>
                  <span>{pill.label}</span>
                </div>
              );
            })}
          </motion.div>

        </div>

      </div>
    </ParallaxSection>
  );
};

export default AboutPhilosophy;
