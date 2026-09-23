import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projectsList } from '../data/portfolioData';
import ProjectCard from '../components/ProjectCard';
import BlurText from '../components/BlurText';

const SelectedWorks = ({ onOpenModal }) => {
  const { t } = useTranslation();
  const works = projectsList.slice(0, 4);

  return (
    <section id="projects" className="py-24 md:py-32 border-t border-[#E8E8E2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12 flex flex-col gap-12">

        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="flex flex-col gap-2">
            <BlurText
              key={t('projects.title')}
              text={t('projects.title')}
              delay={40}
              animateBy="words"
              direction="top"
              className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#111] tracking-tight"
            />
            <p className="text-sm sm:text-base font-sans text-[#777]">
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
            className="inline-flex items-center gap-1.5 text-sm font-sans font-medium text-[#0284C7] hover:text-[#0369A1] transition-colors group self-start sm:self-auto shrink-0"
          >
            <span>All repositories</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </motion.a>
        </div>

        {/* 2×2 Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {works.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
            >
              <ProjectCard
                project={project}
                onOpenModal={onOpenModal}
              />
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SelectedWorks;
