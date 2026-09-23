/**
 * ANATOMI FILE: src/sections/RecentWorksMosaic.jsx
 * ====================================================================
 * 1. IMPORTS
 *    - React
 *    - Lucide Icons: RotateCw, ArrowUpRight
 *    - Data: projectsList dari ../data/portfolioData
 *    - Local Component: TiltedCard (Parallax 3D)
 * 
 * 2. PROPS DEFINITION
 *    - onOpenModal: Function callback saat salah satu kartu diklik untuk membuka studi kasus
 * 
 * 3. KOMPONEN UTAMA (RecentWorksMosaic)
 *    - Container: Kotak biru muda cerah besar (bg-blue-band) dengan rounded-3xl
 *    - Center Circular Badge: "Seen Recent Works" mengapung di tengah
 *    - Asymmetric Mosaic Grid: Kartu-kartu screenshot project nyata dengan efek hover & shadow
 * 
 * 4. EXPORT
 *    - Default export RecentWorksMosaic
 * ====================================================================
 * ALUR KERJA:
 * Menjadi showstopper visual berbalut warna biru muda (sesuai arahan user).
 * Menampilkan cuplikan karya nyata dalam satu bentangan mosaik interaktif.
 * ====================================================================
 */

import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { RotateCw, ArrowUpRight } from 'lucide-react';
import { projectsList } from '../data/portfolioData';
import TiltedCard from '../components/TiltedCard';
import ParallaxSection from '../components/ParallaxSection';

const RecentWorksMosaic = ({ onOpenModal }) => {
  const containerRef = useRef(null);
  const featured = projectsList.slice(0, 4);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ['start end', 'end start']
  });

  const yLeftColumn = useTransform(scrollYProgress, [0, 1], [-20, 20]);
  const yRightColumn = useTransform(scrollYProgress, [0, 1], [20, -20]);

  return (
    <ParallaxSection
      id="recent-works"
      revealDirection="scale"
      parallaxSpeed={0.1}
      className="py-16 md:py-24 max-w-7xl mx-auto px-6 md:px-12"
    >
      {/* Big Light Blue Rounded Showcase Container */}
      <div 
        ref={containerRef}
        className="relative rounded-[32px] md:rounded-[44px] bg-blue-band p-6 sm:p-8 md:p-12 shadow-xl overflow-hidden border border-[#38BDF8]/40"
      >

        {/* Floating Center Badge ("Seen Recent Works") */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-30 pointer-events-none hidden md:block">
          <div className="px-5 py-3 rounded-full bg-white/95 backdrop-blur-md shadow-xl border border-[#E8E8E2] flex items-center gap-2 text-xs font-sans font-bold text-[#111111]">
            <RotateCw className="w-3.5 h-3.5 text-[#0284C7] animate-spin [animation-duration:8s]" />
            <span>Seen Recent Works</span>
          </div>
        </div>

        {/* Mosaic Grid of Project Previews */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">

          {/* Kolom Kiri: 2 Project Cards with subtle parallax */}
          <motion.div style={{ y: yLeftColumn }} className="flex flex-col gap-6">
            {featured.slice(0, 2).map((proj, idx) => (
              <TiltedCard key={idx} maxTilt={5} scaleOnHover={1.02} className="rounded-2xl">
                <div
                  onClick={() => onOpenModal(proj)}
                  className="bg-white p-3 rounded-2xl shadow-lg border border-white/80 cursor-pointer group transition-all"
                >
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#ECECE4]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-white text-[#111111] text-xs font-bold shadow-md flex items-center gap-1">
                        View Study <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <p className="font-serif text-sm font-bold text-[#111111] truncate">
                      {proj.title}
                    </p>
                    <span className="text-[11px] font-space px-2 py-0.5 rounded-full bg-[#FAFAF7] text-[#666666]">
                      {proj.category}
                    </span>
                  </div>
                </div>
              </TiltedCard>
            ))}
          </motion.div>

          {/* Kolom Kanan: 2 Project Cards with subtle parallax */}
          <motion.div style={{ y: yRightColumn }} className="flex flex-col gap-6 md:mt-8">
            {featured.slice(2, 4).map((proj, idx) => (
              <TiltedCard key={idx} maxTilt={5} scaleOnHover={1.02} className="rounded-2xl">
                <div
                  onClick={() => onOpenModal(proj)}
                  className="bg-white p-3 rounded-2xl shadow-lg border border-white/80 cursor-pointer group transition-all"
                >
                  <div className="relative aspect-[16/10] w-full rounded-xl overflow-hidden bg-[#ECECE4]">
                    <img
                      src={proj.image}
                      alt={proj.title}
                      className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                      <span className="px-4 py-2 rounded-full bg-white text-[#111111] text-xs font-bold shadow-md flex items-center gap-1">
                        View Study <ArrowUpRight className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                  <div className="p-3 flex items-center justify-between">
                    <p className="font-serif text-sm font-bold text-[#111111] truncate">
                      {proj.title}
                    </p>
                    <span className="text-[11px] font-space px-2 py-0.5 rounded-full bg-[#FAFAF7] text-[#666666]">
                      {proj.category}
                    </span>
                  </div>
                </div>
              </TiltedCard>
            ))}
          </motion.div>

        </div>

      </div>
    </ParallaxSection>
  );
};

export default RecentWorksMosaic;
