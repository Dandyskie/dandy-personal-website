/**
 * ANATOMI FILE: src/sections/TrackRecord.jsx
 * ====================================================================
 * 1. IMPORTS
 *    - React, useRef
 *    - Framer Motion: motion, useScroll, useTransform
 *    - Lucide Icons: Award, ShieldCheck, Activity, Layers
 *    - Local Component: ParallaxSection
 * 
 * 2. KONSEP DESAIN:
 *    - Merealisasikan seksi "PROVEN TRACK RECORD" dari Reference 2 (Unggul Fatih)
 *    - Blok kontras gelap penuh (Full-bleed #0B0B0E) yang memberikan authority & ketegasan
 *    - Angka metrik berukuran besar dengan font Space Grotesk dan aksen biru muda
 * 
 * 3. EXPORT: Default export TrackRecord
 * ====================================================================
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Award, ShieldCheck, Activity, Layers } from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

const STATS = [
  {
    value: '5+',
    label: 'Production Systems',
    desc: 'Tested in live enterprise environments including Hospital Information and Library Management Systems.',
    icon: Award,
    badge: 'Real-World Delivery',
  },
  {
    value: '100%',
    label: 'Responsive Architecture',
    desc: 'Pixel-perfect mobile-first implementations calibrated for smooth UX across all modern viewport sizes.',
    icon: ShieldCheck,
    badge: 'Zero Compromise',
  },
  {
    value: '24/7',
    label: 'Healthcare & Library Tech',
    desc: 'Architected robust workflows at PT Edutech Digital Solution ensuring reliability and data integrity.',
    icon: Activity,
    badge: 'Mission-Critical',
  },
  {
    value: '3+',
    label: 'Core Frameworks',
    desc: 'In-depth mastery of React, Vue 3, and Laravel ecosystems with reusable clean-code architecture.',
    icon: Layers,
    badge: 'Modern Stack',
  },
];

const TrackRecord = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start'],
  });

  const yParallaxNumbers = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const yColLeft = useTransform(scrollYProgress, [0, 1], [30, -30]);
  const yColRight = useTransform(scrollYProgress, [0, 1], [-20, 20]);

  return (
    <ParallaxSection
      id="track-record"
      revealDirection="scale"
      parallaxSpeed={0.2}
      fullBleed={true}
      className="bg-[#0B0B0E] text-white py-24 md:py-32 relative overflow-hidden"
    >
      {/* Subtle Background Glow behind stats */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-25"
        style={{
          background: 'radial-gradient(ellipse 60% 40% at 50% 50%, rgba(56, 189, 248, 0.25) 0%, rgba(11, 11, 14, 0) 80%)'
        }}
      />

      <div ref={containerRef} className="max-w-7xl mx-auto px-6 md:px-12 relative z-10">
        
        {/* Header terinspirasi "PROVEN TRACK RECORD" di Reference 2 dengan Animasi */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-20 gap-6 border-b border-[#23232C] pb-8">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-3"
          >
            <span className="font-space text-xs font-bold uppercase tracking-widest text-[#38BDF8]">
              // 02. MEASURABLE PERFORMANCE
            </span>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-sans font-extrabold tracking-tight text-white uppercase">
              Proven Track <span className="font-serif italic font-normal text-[#38BDF8] lowercase">record</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm md:text-base font-sans text-[#8E8E9F] max-w-md leading-relaxed"
          >
            Delivering production-grade software engineered for high usability, clean maintainability, and dependable performance.
          </motion.p>
        </div>

        {/* 4 Stat Cards in 2x2 Grid with Stagger & Parallax */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {STATS.map((stat, idx) => {
            const Icon = stat.icon;
            const isLeft = idx % 2 === 0;
            return (
              <motion.div
                key={idx}
                style={{ y: isLeft ? yColLeft : yColRight }}
                initial={{ opacity: 0, y: 35 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="dark-stat-card p-8 md:p-10 rounded-3xl flex flex-col justify-between gap-6 relative group overflow-hidden"
              >
                {/* Top Row: Tag badge and Icon */}
                <div className="flex items-center justify-between">
                  <span className="text-[11px] font-space font-semibold uppercase tracking-wider px-3 py-1 rounded-full bg-[#23232C] text-[#38BDF8] border border-[#38BDF8]/20">
                    {stat.badge}
                  </span>
                  <div className="p-2.5 rounded-2xl bg-[#1D1D24] text-[#38BDF8] group-hover:scale-110 group-hover:bg-[#38BDF8]/20 transition-all">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Middle: Big Stat Value with Parallax */}
                <div className="my-2">
                  <motion.div
                    style={{ y: yParallaxNumbers }}
                    className="font-space font-bold text-6xl sm:text-7xl md:text-8xl text-white tracking-tight leading-none flex items-baseline gap-1"
                  >
                    <span>{stat.value}</span>
                  </motion.div>
                  <h3 className="font-sans font-bold text-xl md:text-2xl text-white mt-3 group-hover:text-[#38BDF8] transition-colors">
                    {stat.label}
                  </h3>
                </div>

                {/* Bottom: Description */}
                <p className="text-xs sm:text-sm font-sans text-[#8E8E9F] leading-relaxed border-t border-[#23232C] pt-4">
                  {stat.desc}
                </p>

                {/* Corner Gradient Hover Accents */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-[#38BDF8]/5 rounded-full blur-2xl group-hover:bg-[#38BDF8]/15 transition-all pointer-events-none" />
              </motion.div>
            );
          })}
        </div>

      </div>
    </ParallaxSection>
  );
};

export default TrackRecord;
