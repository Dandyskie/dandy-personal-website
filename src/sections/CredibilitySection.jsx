/**
 * ANATOMI FILE: src/sections/CredibilitySection.jsx
 * ====================================================================
 * 1. IMPORTS
 *    - React, useRef
 *    - Framer Motion: motion, useScroll, useTransform
 *    - Lucide Icons: Mail
 *    - React Bits: BlurText
 *    - Local Component: SocialIcons (GithubIcon, LinkedinIcon)
 * 
 * 2. KONFIGURASI TIMELINE
 *    - Array rekam jejak profesional & edukasi persis tabel pada referensi
 * 
 * 3. KOMPONEN UTAMA (CredibilitySection)
 *    - Header: Subtitle Italic "/ Who Am I" + Animated "Pushing Boundaries since 2023"
 *    - 2-Column Grid:
 *      * Kiri: Foto portrait Dandy + social icons + Nama & Role dengan subtle parallax
 *      * Kanan: Paragraf biografi + Tabel timeline riwayat karir
 * 
 * 4. EXPORT
 *    - Default export CredibilitySection
 * ====================================================================
 * ALUR KERJA:
 * Menampilkan profil profesional dan pengalaman kerja developer tanpa
 * kartu commit git (sesuai arahan user) dengan animasi teks dan parallax.
 * ====================================================================
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Mail } from 'lucide-react';
import BlurText from '../components/BlurText';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import ParallaxSection from '../components/ParallaxSection';

const TIMELINE_ROWS = [
  { role: 'Frontend Developer Intern', company: 'PT Edutech Digital Solution', period: '2025 ➔ 2026' },
  { role: 'Web Application Developer', company: 'Mutuharjo Library System', period: '2024 ➔ 2025' },
  { role: 'Information System Dev', company: 'DigitalCare Management Console', period: '2024' },
  { role: 'Vocational Software Student', company: 'SMK Muhammadiyah 1 Sukoharjo', period: '2023 ➔ 2026' },
];

const CredibilitySection = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const yPhoto = useTransform(scrollYProgress, [0, 1], [-45, 45]);

  return (
    <ParallaxSection
      id="experience"
      revealDirection="up"
      parallaxSpeed={0.2}
      className="py-24 md:py-32 max-w-7xl mx-auto px-6 md:px-12 border-t border-[#E8E8E2]"
    >
      <div ref={containerRef} className="flex flex-col gap-12">
        {/* Section Header dengan Text Animation & Indexed Tag */}
        <motion.div 
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center text-center gap-2"
        >
          <span className="font-space text-xs uppercase tracking-widest text-[#0284C7] font-bold">
            // 06. EXPERIENCE & BACKGROUND
          </span>
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <BlurText
              text="Pushing Boundaries"
              delay={80}
              animateBy="words"
              direction="top"
              className="text-4xl sm:text-5xl md:text-6xl font-sans font-bold text-[#111111] tracking-tight justify-center"
            />
            <span className="font-serif italic font-normal text-4xl sm:text-5xl md:text-6xl text-[#0284C7]">
              since 2023
            </span>
          </div>
        </motion.div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start pt-6">
          {/* Kolom Kiri: Foto Portrait & Sosmed dengan Parallax */}
          <motion.div style={{ y: yPhoto }} className="lg:col-span-5 flex flex-col gap-4">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="aspect-[4/3] rounded-3xl overflow-hidden bg-[#ECECE4] border border-[#E8E8E2] shadow-sm"
            >
              <img
                src="/dandyskie-hero.png"
                alt="Dandy Rama Wiguna"
                className="w-full h-full object-cover object-top filter grayscale contrast-[1.05]"
              />
            </motion.div>

            <div className="flex items-center justify-between pt-2 px-1">
              {/* Social Icons */}
              <div className="flex items-center gap-3">
                <a
                  href="https://github.com/Dandyskie"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-[#E0F2FE] hover:text-[#0284C7] text-[#111111] transition-colors"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dandy-rama-wiguna-3575ab370/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-full hover:bg-[#E0F2FE] hover:text-[#0284C7] text-[#111111] transition-colors"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:dandyskie@gmail.com"
                  className="p-2 rounded-full hover:bg-[#E0F2FE] hover:text-[#0284C7] text-[#111111] transition-colors"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* Name & Title */}
              <div className="text-right">
                <p className="font-sans font-bold text-sm text-[#111111]">Dandy Rama Wiguna</p>
                <p className="font-sans text-xs text-[#707070]">Frontend Developer</p>
              </div>
            </div>
          </motion.div>

          {/* Kolom Kanan: Deskripsi & Tabel Karir */}
          <div className="lg:col-span-7 flex flex-col gap-8">
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-base sm:text-lg text-[#111111] leading-relaxed font-sans"
            >
              A frontend developer passionate about creating intuitive digital experiences.
              I've collaborated with development teams to build systems that blend usability and clean code,
              focusing on solving real-world challenges through disciplined web development.
            </motion.p>

            {/* Career Timeline Table */}
            <div className="flex flex-col divide-y divide-[#E8E8E2] border-y border-[#E8E8E2]">
              {TIMELINE_ROWS.map((row, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className="py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-2 hover:bg-[#E0F2FE]/40 px-3 rounded-lg transition-colors group"
                >
                  <span className="font-sans font-bold text-sm text-[#111111] group-hover:text-[#0284C7] transition-colors sm:w-1/3">
                    {row.role}
                  </span>
                  <span className="font-sans text-xs text-[#707070] sm:w-1/3">
                    {row.company}
                  </span>
                  <span className="font-space text-xs font-medium text-[#111111] sm:w-1/3 text-left sm:text-right">
                    {row.period}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ParallaxSection>
  );
};

export default CredibilitySection;
