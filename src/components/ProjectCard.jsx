/**
 * ANATOMI FILE: src/components/ProjectCard.jsx
 * ====================================================================
 * 1. IMPORTS
 *    - React
 *    - Lucide Icons: ArrowUpRight
 *    - Local Component: TiltedCard (Parallax 3D)
 * 
 * 2. PROPS DEFINITION
 *    - project: Objek data project (title, tags, image, category, etc.)
 *    - onOpenModal: Function callback membuka modal studi kasus
 * 
 * 3. KOMPONEN UTAMA (ProjectCard)
 *    - Render Card Container (rounded-[28px] bg-white border)
 *    - Media Screen: Screenshot antarmuka bersih
 *    - Bottom Row: Judul di kiri, pill tags kategori di kanan
 * 
 * 4. EXPORT
 *    - Default export ProjectCard
 * ====================================================================
 * ALUR KERJA:
 * Menampilkan kartu preview project dengan efek 3D tilt, aksen biru muda,
 * dan pemicu modal studi kasus.
 * ====================================================================
 */

import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TiltedCard from './TiltedCard';
import BlurText from './BlurText';

const ProjectCard = ({ project, onOpenModal }) => {
  const { t } = useTranslation();
  return (
    <TiltedCard maxTilt={5} scaleOnHover={1.015} className="rounded-[28px] h-full">
      <div
        onClick={() => onOpenModal(project)}
        className="rounded-[28px] bg-white border border-[#E8E8E2] p-4 sm:p-5 shadow-xs hover:shadow-md hover:border-[#38BDF8]/60 transition-all cursor-pointer flex flex-col justify-between h-full group"
      >
        {/* Screenshot Device Mockup Frame */}
        <div className="relative aspect-[16/11] w-full rounded-2xl overflow-hidden bg-[#ECECE4] border border-[#E8E8E2]">
          <BlurText delay={60} className="w-full h-full">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </BlurText>
          <div className="absolute inset-0 bg-black/15 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-4 py-2 rounded-full bg-white text-[#111111] text-xs font-sans font-bold shadow-md flex items-center gap-1.5">
              <span>{t('projects.readCase')}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0284C7]" />
            </span>
          </div>
        </div>

        {/* Card Info Bar: Title (Left) + Tags (Right) */}
        <div className="pt-5 pb-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <BlurText
            text={project.title}
            delay={20}
            animateBy="words"
            className="text-lg md:text-xl font-sans font-bold text-[#111111] group-hover:text-[#0284C7] transition-colors truncate"
          />

          <div className="flex items-center gap-2 flex-wrap shrink-0">
            {project.tags.slice(0, 2).map((tag, idx) => (
              <span
                key={idx}
                className="text-xs px-3 py-1 rounded-full bg-[#FAFAF7] border border-[#E8E8E2] text-[#666666] font-sans font-medium"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </TiltedCard>
  );
};

export default ProjectCard;
