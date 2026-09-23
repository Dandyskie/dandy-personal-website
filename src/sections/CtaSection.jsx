/**
 * ANATOMI FILE: src/sections/CtaSection.jsx
 * ====================================================================
 * 1. IMPORTS
 *    - React
 *    - Lucide Icons: ArrowRight
 *    - React Bits: BlurText
 * 
 * 2. KOMPONEN UTAMA (CtaSection)
 *    - Background: Luminous Light Blue Glow (.bg-cta-glow) memancar dari atas
 *    - Heading: "Let's Make It Happen" dengan animasi BlurText
 *    - Subtitle: Ajakan kolaborasi ramah
 *    - Button: Black pill "Get in Touch ->" dengan panah biru muda
 * 
 * 3. EXPORT
 *    - Default export CtaSection
 * ====================================================================
 * ALUR KERJA:
 * Mereproduksi seksi CTA biru muda lembut tepat sebelum footer
 * dengan animasi teks BlurText dinamis.
 * ====================================================================
 */

import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import BlurText from '../components/BlurText';
import ParallaxSection from '../components/ParallaxSection';

const CtaSection = () => {
  const handleScrollToContact = () => {
    const el = document.querySelector('#contact');
    if (!el) return;
    const navHeight = 85;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <ParallaxSection
      id="cta"
      revealDirection="scale"
      parallaxSpeed={0.25}
      fullBleed={true}
      className="relative py-28 md:py-36 bg-[#0B0B0E] bg-cta-glow-dark text-center overflow-hidden border-t border-[#23232C]"
    >
      <div className="max-w-4xl mx-auto px-6 flex flex-col items-center gap-6 relative z-10">
        <motion.span 
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="font-space text-xs font-bold uppercase tracking-widest text-[#38BDF8]"
        >
          // 07. NEXT STEP COLLABORATION
        </motion.span>

        <BlurText
          text="Let's Build Something Great"
          delay={80}
          animateBy="words"
          direction="top"
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-extrabold text-white tracking-tight justify-center"
        />
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="text-sm md:text-base text-[#8E8E9F] max-w-xl leading-relaxed"
        >
          Open to full-time engineering roles, high-impact freelance projects, and creative technical collaborations. Let's turn your vision into high-performing reality.
        </motion.p>

        <motion.button
          type="button"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.25 }}
          onClick={handleScrollToContact}
          className="mt-4 inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-[#F3F3EE] text-[#0B0B0E] font-sans text-sm font-bold transition-all shadow-xl hover:shadow-2xl hover:shadow-[#38BDF8]/20 cursor-pointer group"
        >
          <span>Initiate Project</span>
          <ArrowRight className="w-4 h-4 text-[#0284C7] transition-transform group-hover:translate-x-1" />
        </motion.button>
      </div>
    </ParallaxSection>
  );
};

export default CtaSection;
