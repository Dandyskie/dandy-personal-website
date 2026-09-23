import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ShinyText from '../components/ShinyText';
import BlurText from '../components/BlurText';

const Hero = () => {
  const { t } = useTranslation();
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start start', 'end start']
  });

  const yPhoto = useTransform(scrollYProgress, [0, 1], [0, 80]);
  const yHeadline = useTransform(scrollYProgress, [0, 1], [0, 35]);

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (!el) return;
    const navHeight = 85;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={containerRef}
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-hero-glow"
    >
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col items-center text-center relative z-10">

        {/* Availability Badge with ShinyText */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/90 backdrop-blur-sm border border-[#E8E8E2] shadow-xs mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
          <span className="text-xs font-sans font-medium">
            <ShinyText
              text={t('hero.available')}
              color="#555555"
              shineColor="#0284C7"
              speed={3}
            />
          </span>
        </motion.div>

        {/* Main Headline */}
        <motion.div
          style={{ y: yHeadline }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col items-center gap-3 mb-6"
        >
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-[#111] tracking-tight leading-[1.1]">
            {t('hero.greeting')} <span className="text-[#0284C7]">{t('hero.name')}</span>
          </h1>

          <div className="max-w-xl">
            <BlurText
              key={t('hero.bio')}
              text={t('hero.bio')}
              delay={35}
              animateBy="words"
              direction="top"
              className="text-lg sm:text-xl md:text-2xl font-sans font-normal text-[#555] leading-relaxed justify-center"
            />
          </div>
        </motion.div>

        {/* Portrait */}
        <motion.div
          style={{ y: yPhoto }}
          className="relative z-10 w-[260px] sm:w-[320px] md:w-[400px] aspect-[4/5] pointer-events-none -mt-4"
        >
          <BlurText direction="bottom" delay={120} className="w-full h-full">
            <img
              src="/dandy-coachjacket-gdg.png"
              alt="Dandy Rama Wiguna"
              className="w-full h-full object-cover object-top"
              style={{
                maskImage: 'linear-gradient(to bottom, black 60%, transparent 96%)',
                WebkitMaskImage: 'linear-gradient(to bottom, black 60%, transparent 96%)'
              }}
            />
          </BlurText>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-2"
        >
          <button
            type="button"
            onClick={() => handleScrollTo('#contact')}
            className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-[#111] hover:bg-[#222] text-white font-sans text-sm font-semibold transition-all shadow-md hover:shadow-lg cursor-pointer group"
          >
            <span>{t('hero.cta')}</span>
            <ArrowRight className="w-4 h-4 text-[#38BDF8] transition-transform group-hover:translate-x-1" />
          </button>
        </motion.div>

      </div>
    </section>
  );
};

export default Hero;
