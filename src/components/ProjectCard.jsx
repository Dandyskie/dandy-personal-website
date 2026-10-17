import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Layers } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import TiltedCard from './TiltedCard';
import BlurText from './BlurText';

const ProjectCard = ({ project }) => {
  const { t, i18n } = useTranslation();
  const isIndo = i18n.language?.startsWith('id');
  const projectType = isIndo ? (project.projectType_id || project.projectType) : (project.projectType_en || project.projectType);

  return (
    <TiltedCard maxTilt={4} scaleOnHover={1.015} className="rounded-[28px] h-full">
      <Link
        to={`/project/${project.slug}`}
        className="rounded-[28px] bg-white border border-[#E8E8E2] p-4 sm:p-5 shadow-xs hover:shadow-lg hover:border-[#38BDF8]/70 transition-all duration-300 cursor-pointer flex flex-col justify-between h-full group"
      >
        {/* Screenshot Device Mockup Frame */}
        <div className="relative aspect-[16/10.5] w-full rounded-2xl overflow-hidden bg-[#ECECE4] border border-[#E8E8E2]">
          <BlurText delay={60} className="w-full h-full">
            <img
              src={project.image}
              alt={project.title}
              loading="lazy"
              className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
            />
          </BlurText>

          {/* Floating Screen Count Badge if gallery has multiple images */}
          {project.gallery && project.gallery.length > 1 && (
            <div className="absolute top-3 right-3 px-2.5 py-1 rounded-full bg-white/90 backdrop-blur-md border border-[#E8E8E2] shadow-xs flex items-center gap-1.5 text-[11px] font-space font-bold text-[#111111]">
              <Layers className="w-3 h-3 text-[#0284C7]" />
              <span>{project.gallery.length} {isIndo ? 'Tampilan' : 'Screens'}</span>
            </div>
          )}

          {/* Hover Overlay */}
          <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
            <span className="px-5 py-2.5 rounded-full bg-white text-[#111111] text-xs font-sans font-bold shadow-lg flex items-center gap-1.5 transition-transform group-hover:scale-105">
              <span>{isIndo ? 'Buka Detail Proyek' : 'View Project Study'}</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-[#0284C7]" />
            </span>
          </div>
        </div>

        {/* Card Info Bar */}
        <div className="pt-5 pb-1 flex flex-col gap-3">
          <div className="flex items-center justify-between gap-2">
            <span className="text-[11px] font-space uppercase tracking-wider text-[#0284C7] font-bold">
              {projectType || project.category}
            </span>
            <span className="text-[11px] font-space text-[#888888]">
              {project.year}
            </span>
          </div>

          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <BlurText
              text={project.title}
              delay={20}
              animateBy="words"
              className="text-base sm:text-lg md:text-xl font-sans font-bold text-[#111111] group-hover:text-[#0284C7] transition-colors truncate"
            />

            <div className="flex items-center gap-1.5 flex-wrap shrink-0">
              {project.tags.slice(0, 2).map((tag, idx) => (
                <span
                  key={idx}
                  className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#FAFAF7] border border-[#E8E8E2] text-[#666666] font-sans font-medium"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        </div>
      </Link>
    </TiltedCard>
  );
};

export default ProjectCard;
