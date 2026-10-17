import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, FolderGit2, Sparkles } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projectsList } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import BlurText from '../components/BlurText';

const CATEGORIES = [
  { id: 'all', label_en: 'All Projects', label_id: 'Semua Proyek' },
  { id: 'Web Application', label_en: 'Web Apps & Systems', label_id: 'Aplikasi Web & Sistem' },
  { id: 'Landing Page', label_en: 'Landing Pages & Portfolios', label_id: 'Landing Page & Katalog' }
];

const SelectedWorks = () => {
  const { t, i18n } = useTranslation();
  const isIndo = i18n.language?.startsWith('id');
  const [selectedFilter, setSelectedFilter] = useState('all');

  const filteredProjects = selectedFilter === 'all'
    ? projectsList
    : projectsList.filter(p => p.category === selectedFilter);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-[#E8E8E2]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-12 flex flex-col gap-10 md:gap-14">

        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <span className="font-space text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                // 04. PORTFOLIO SHOWCASE
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-white border border-[#E8E8E2] text-[11px] font-space text-[#777777] shadow-2xs">
                {projectsList.length} {isIndo ? 'Proyek Selesai' : 'Projects Completed'}
              </span>
            </div>

            <BlurText
              key={t('projects.title')}
              text={t('projects.title')}
              delay={40}
              animateBy="words"
              direction="top"
              className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#111] tracking-tight"
            />
            <p className="text-sm sm:text-base font-sans text-[#777] max-w-xl">
              {t('projects.subtitle')}
            </p>
          </div>

          <motion.a
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            href="https://github.com/Dandyskie"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white hover:bg-[#111111] text-[#111111] hover:text-white border border-[#E8E8E2] text-xs font-sans font-semibold transition-all shadow-2xs group self-start md:self-auto shrink-0"
          >
            <FolderGit2 className="w-3.5 h-3.5 text-[#0284C7] group-hover:text-white transition-colors" />
            <span>{isIndo ? 'Repositori GitHub' : 'GitHub Repositories'}</span>
            <ArrowUpRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* Interactive Filter Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {CATEGORIES.map((cat) => {
            const isActive = selectedFilter === cat.id;
            const count = cat.id === 'all'
              ? projectsList.length
              : projectsList.filter(p => p.category === cat.id).length;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => setSelectedFilter(cat.id)}
                className={`px-4 py-2 rounded-full text-xs font-sans font-medium transition-all duration-200 cursor-pointer flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-[#111111] text-white shadow-xs'
                    : 'bg-white hover:bg-[#FAFAF7] text-[#666666] hover:text-[#111111] border border-[#E8E8E2]'
                }`}
              >
                <span>{isIndo ? cat.label_id : cat.label_en}</span>
                <span className={`px-2 py-0.5 rounded-full text-[10px] font-space ${
                  isActive ? 'bg-white/20 text-white' : 'bg-[#FAFAF7] text-[#888888] border border-[#E8E8E2]'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Responsive Grid of Projects (2 Columns on Desktop, 1 Column on Mobile) */}
        <motion.div layout className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, idx) => (
              <motion.div
                key={project.slug}
                layout
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.5, delay: idx * 0.05, ease: [0.16, 1, 0.3, 1] }}
              >
                <ProjectCard project={project} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>
    </section>
  );
};

export default SelectedWorks;
