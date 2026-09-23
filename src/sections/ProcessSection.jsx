/**
 * ANATOMI FILE: src/sections/ProcessSection.jsx
 * ====================================================================
 * 1. IMPORTS
 *    - React, useRef
 *    - Framer Motion: motion, useScroll, useTransform
 *    - Lucide Icons: Quote
 *    - React Bits: BlurText
 * 
 * 2. KONFIGURASI STEPS & TESTIMONIALS
 *    - STEPS: 01 Discover, 02 Develop, 03 Deliver
 *    - TESTIMONIALS: 2 feedback cards dari partner proyek
 * 
 * 3. KOMPONEN UTAMA (ProcessSection)
 *    - Header: Subtitle Italic + Title dengan animasi BlurText
 *    - 3-Step Flow Cards dengan animasi parallax vertikal
 *    - 2 Testimonial Cards dengan aksen icon petik biru muda (#38BDF8)
 * 
 * 4. EXPORT
 *    - Default export ProcessSection
 * ====================================================================
 * ALUR KERJA:
 * Menampilkan alur rekayasa dan testimonial persis seperti pada referensi
 * dengan animasi teks dan aksen warna biru muda.
 * ====================================================================
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Quote } from 'lucide-react';
import BlurText from '../components/BlurText';
import ParallaxSection from '../components/ParallaxSection';

const STEPS = [
  {
    number: '01',
    title: 'Discover',
    desc: 'Understanding your goals, users, and technical constraints through thorough research and architecture mapping.'
  },
  {
    number: '02',
    title: 'Develop',
    desc: 'Transforming requirements into high-performance, modular, and maintainable frontend systems with clean code.'
  },
  {
    number: '03',
    title: 'Deliver',
    desc: 'Comprehensive cross-browser testing, performance audit, and precision deployment for seamless user experience.'
  }
];

const TESTIMONIALS = [
  {
    quote: 'Working with Dandy was seamless from start to finish. He understood our project goals quickly, asked the right questions, and delivered clean code that scaled smoothly.',
    name: 'PT Edutech Digital Solution',
    role: 'Development Team Collaborator'
  },
  {
    quote: 'Dandy brought our web application to life with incredible attention to detail. His ability to balance clean frontend architecture with user needs made our platform genuinely useful.',
    name: 'Client & Project Partner',
    role: 'Web Application Sponsor'
  }
];

const ProcessSection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const yMiddleCard = useTransform(scrollYProgress, [0, 1], [-50, 50]);

  return (
    <ParallaxSection
      id="process"
      revealDirection="up"
      parallaxSpeed={0.22}
      className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12"
    >
      <div ref={containerRef} className="flex flex-col items-center text-center gap-16">
        
        {/* Header dengan Text Animation */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="font-space text-xs uppercase tracking-widest text-[#0284C7] font-bold">
            // 04. ENGINEERING WORKFLOW
          </span>
          <BlurText
            text="Here's how it works"
            delay={90}
            animateBy="words"
            direction="top"
            className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-[#111111] tracking-tight justify-center"
          />
        </motion.div>

        {/* 3 Step Floating Cards dengan Parallax */}
        <div className="relative w-full grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
          {STEPS.map((step, idx) => (
            <motion.div
              key={idx}
              style={idx === 1 ? { y: yMiddleCard } : {}}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.12, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-10 rounded-3xl bg-white border border-[#E8E8E2] shadow-sm flex flex-col text-left transition-all hover:border-[#38BDF8] hover:shadow-md group"
            >
              <span className="font-serif text-5xl md:text-6xl text-[#111111] font-bold mb-8 block group-hover:text-[#0284C7] transition-colors">
                {step.number}
              </span>
              <h3 className="text-2xl font-sans font-bold text-[#111111] mb-2">
                {step.title}
              </h3>
              <p className="text-sm text-[#707070] leading-relaxed">
                {step.desc}
              </p>
            </motion.div>
          ))}
        </div>

        {/* 2 Testimonial Cards Below Process with Animated Reveal */}
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-8 pt-10 border-t border-[#E8E8E2] text-left">
          {TESTIMONIALS.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: idx * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 rounded-3xl bg-white border border-[#E8E8E2] shadow-2xs flex flex-col justify-between gap-6 hover:border-[#38BDF8]/60 transition-colors"
            >
              <div className="flex items-start justify-between">
                <p className="text-sm md:text-base text-[#111111] leading-relaxed font-sans max-w-md">
                  "{item.quote}"
                </p>
                <Quote className="w-8 h-8 text-[#38BDF8] shrink-0 opacity-85" />
              </div>

              <div className="flex items-center gap-3 pt-4 border-t border-[#E8E8E2]/60">
                <div className="w-9 h-9 rounded-full bg-[#111111] text-[#38BDF8] flex items-center justify-center font-bold text-xs">
                  {item.name.charAt(0)}
                </div>
                <div>
                  <p className="text-xs font-bold text-[#111111]">{item.name}</p>
                  <p className="text-[11px] text-[#707070]">{item.role}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </ParallaxSection>
  );
};

export default ProcessSection;
