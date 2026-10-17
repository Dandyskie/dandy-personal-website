import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ArrowLeft, 
  ExternalLink, 
  GitBranch, 
  AlertCircle, 
  CheckCircle2, 
  Layers, 
  Calendar, 
  User, 
  Sparkles, 
  Maximize2, 
  X, 
  ChevronLeft, 
  ChevronRight,
  Share2,
  Check,
  Smartphone,
  Monitor
} from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { getProjectBySlug, getNextProject, getPrevProject, projectsList } from '../data/portfolioData';
import BlurText from '../components/BlurText';

const ProjectDetail = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('id') ? 'id' : 'en';

  const [activeImageIndex, setActiveImageIndex] = useState(null);
  const [copiedLink, setCopiedLink] = useState(false);

  const project = getProjectBySlug(slug) || projectsList[0];
  const nextProject = getNextProject(project.slug);
  const prevProject = getPrevProject(project.slug);

  // Scroll to top upon navigating to a new project
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setActiveImageIndex(null);
  }, [slug]);

  // Keyboard navigation for image lightbox
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (activeImageIndex === null) return;
      if (e.key === 'Escape') setActiveImageIndex(null);
      if (e.key === 'ArrowRight') {
        setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
      }
      if (e.key === 'ArrowLeft') {
        setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [activeImageIndex, project.gallery.length]);

  // Lock body scroll when screenshot lightbox modal is open
  useEffect(() => {
    if (activeImageIndex !== null) {
      const originalOverflow = document.body.style.overflow;
      document.body.style.overflow = 'hidden';
      return () => {
        document.body.style.overflow = originalOverflow;
      };
    }
  }, [activeImageIndex]);

  const handleShare = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedLink(true);
      setTimeout(() => setCopiedLink(false), 2000);
    }
  };

  const isIndo = currentLang === 'id';
  const projectType = isIndo ? (project.projectType_id || project.projectType) : (project.projectType_en || project.projectType);
  const summary = isIndo ? (project.summary_id || project.summary) : (project.summary_en || project.summary);
  const problem = isIndo ? (project.problem_id || project.problem) : (project.problem_en || project.problem);
  const solution = isIndo ? (project.solution_id || project.solution) : (project.solution_en || project.solution);

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#111111] pt-24 md:pt-28 pb-20 selection:bg-[#38BDF8] selection:text-white">
      {/* Container utama dengan padding terpresisi & mobile-first */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 md:px-10 lg:px-12 flex flex-col gap-10 md:gap-14">

        {/* 1. TOP NAVIGATION / BREADCRUMBS & ACTIONS */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-4 border-b border-[#E8E8E2] pb-5">
          {/* Back button */}
          <Link
            to="/#projects"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-[#111111] text-[#111111] hover:text-white border border-[#E8E8E2] text-xs font-sans font-semibold transition-all duration-300 shadow-2xs group cursor-pointer"
          >
            <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
            <span>{isIndo ? 'Kembali ke Portofolio' : 'Back to Projects'}</span>
          </Link>

          {/* Breadcrumbs & Share */}
          <div className="flex items-center gap-3">
            <span className="hidden sm:inline-flex items-center gap-1.5 text-xs font-space text-[#777777]">
              <Link to="/" className="hover:text-[#111111] transition-colors">{isIndo ? 'Beranda' : 'Home'}</Link>
              <span>/</span>
              <Link to="/#projects" className="hover:text-[#111111] transition-colors">{isIndo ? 'Proyek' : 'Projects'}</Link>
              <span>/</span>
              <span className="text-[#0284C7] font-medium truncate max-w-[180px]">{project.shortTitle || project.title}</span>
            </span>

            <button
              type="button"
              onClick={handleShare}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white hover:bg-[#FAFAF7] border border-[#E8E8E2] text-xs font-sans text-[#555555] hover:text-[#111111] transition-colors cursor-pointer shadow-2xs"
              title={isIndo ? 'Salin tautan proyek ini' : 'Copy project link'}
            >
              {copiedLink ? (
                <>
                  <Check className="w-3.5 h-3.5 text-emerald-600" />
                  <span className="text-emerald-600 font-medium">{isIndo ? 'Tersalin!' : 'Copied!'}</span>
                </>
              ) : (
                <>
                  <Share2 className="w-3.5 h-3.5 text-[#777777]" />
                  <span className="hidden xs:inline">{isIndo ? 'Bagikan' : 'Share'}</span>
                </>
              )}
            </button>
          </div>
        </div>

        {/* 2. PROJECT HERO HEADER WITH BLUR TEXT ANIMATION */}
        <div className="flex flex-col gap-6">
          {/* Badges strip: Category & Tipe Projek */}
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#E0F2FE] text-[#0284C7] font-space text-xs font-bold tracking-wide uppercase border border-[#BAE6FD]">
              <span className="w-2 h-2 rounded-full bg-[#0284C7] animate-pulse" />
              {project.category}
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white text-[#555555] font-space text-xs font-medium border border-[#E8E8E2] shadow-2xs">
              <Sparkles className="w-3 h-3 text-[#0284C7]" />
              <span>{projectType}</span>
            </span>

            {project.isMobileScreen ? (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#FAF5FF] text-[#7E22CE] font-space text-xs font-medium border border-[#F3E8FF]">
                <Smartphone className="w-3 h-3" />
                <span>Mobile App / PWA</span>
              </span>
            ) : (
              <span className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-[#F0FDF4] text-[#15803D] font-space text-xs font-medium border border-[#DCFCE7]">
                <Monitor className="w-3 h-3" />
                <span>Web Platform</span>
              </span>
            )}
          </div>

          {/* Project Title with BlurText */}
          <div className="flex flex-col gap-3">
            <BlurText
              key={project.slug + '-title'}
              text={project.title}
              delay={35}
              animateBy="words"
              direction="top"
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-sans font-bold text-[#111111] tracking-tight leading-[1.15]"
            />

            <p className="text-base sm:text-lg md:text-xl text-[#555555] font-sans leading-relaxed max-w-4xl">
              {summary}
            </p>
          </div>

          {/* Meta Specifications Grid: Peran, Tahun, Klien, Aksi Demo */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 p-4 sm:p-5 rounded-2xl bg-white border border-[#E8E8E2] shadow-xs">
            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-space uppercase tracking-wider text-[#888888] flex items-center gap-1">
                <User className="w-3 h-3 text-[#0284C7]" /> {isIndo ? 'Peran' : 'Role'}
              </span>
              <span className="text-xs sm:text-sm font-sans font-bold text-[#111111]">
                {project.role}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-space uppercase tracking-wider text-[#888888] flex items-center gap-1">
                <Calendar className="w-3 h-3 text-[#0284C7]" /> {isIndo ? 'Tahun' : 'Timeline'}
              </span>
              <span className="text-xs sm:text-sm font-sans font-bold text-[#111111]">
                {project.year}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-space uppercase tracking-wider text-[#888888] flex items-center gap-1">
                <Layers className="w-3 h-3 text-[#0284C7]" /> {isIndo ? 'Klien / Mitra' : 'Client / Org'}
              </span>
              <span className="text-xs sm:text-sm font-sans font-bold text-[#111111] truncate">
                {project.client || 'Personal Project'}
              </span>
            </div>

            <div className="flex flex-col gap-1">
              <span className="text-[11px] font-space uppercase tracking-wider text-[#888888]">
                {isIndo ? 'Tipe' : 'Format'}
              </span>
              <span className="text-xs sm:text-sm font-sans font-bold text-[#0284C7]">
                {project.category}
              </span>
            </div>
          </div>

          {/* Action Buttons: Live Demo & Repository */}
          <div className="flex flex-wrap items-center gap-3 pt-1">
            {project.demoLink && project.demoLink !== '#' ? (
              <a
                href={project.demoLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111111] hover:bg-[#222222] text-white text-xs sm:text-sm font-sans font-semibold transition-all shadow-sm hover:shadow-md cursor-pointer group"
              >
                <span>{isIndo ? 'Buka Live Website' : 'Open Live Demo'}</span>
                <ExternalLink className="w-4 h-4 text-[#38BDF8] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            ) : (
              <div className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#ECECE4] text-[#666666] text-xs font-sans font-medium border border-[#DCDCD4]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#888888]" />
                <span>{isIndo ? 'Sistem Internal / Klien Privat' : 'Internal / Private System'}</span>
              </div>
            )}

            {project.githubLink && (
              <a
                href={project.githubLink}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white hover:bg-[#FAFAF7] border border-[#E8E8E2] hover:border-[#111111] text-[#111111] text-xs sm:text-sm font-sans font-semibold transition-all shadow-2xs cursor-pointer group"
              >
                <GitBranch className="w-4 h-4 text-[#0284C7] transition-transform group-hover:rotate-12" />
                <span>{isIndo ? 'Lihat Repositori GitHub' : 'View Source Code'}</span>
              </a>
            )}
          </div>
        </div>

        {/* 3. CORE CASE STUDY: MASALAH (PROBLEM) & SOLUSI (SOLUTION) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
          {/* KARTU MASALAH */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-[#FDE68A]/60 shadow-xs flex flex-col justify-between gap-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#FEF3C7]/40 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#FEF3C7] text-[#B45309] font-space text-[11px] font-bold uppercase tracking-wider border border-[#FDE68A]">
                  <AlertCircle className="w-3.5 h-3.5 text-[#D97706]" />
                  <span>{isIndo ? 'Tantangan & Masalah' : 'The Challenge'}</span>
                </span>
                <span className="text-xs font-space text-[#999999]">// 01. PROBLEM</span>
              </div>

              <BlurText
                text={isIndo ? 'Kendala Yang Dihadapi' : 'Problem Statement'}
                delay={25}
                animateBy="words"
                direction="top"
                className="text-xl sm:text-2xl font-sans font-bold text-[#111111] tracking-tight"
              />

              <p className="text-sm sm:text-base text-[#4B5563] font-sans leading-relaxed">
                {problem}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F3F4F6] text-xs font-space text-[#9CA3AF]">
              {isIndo ? 'Identifikasi hambatan operasional & kebutuhan pengguna' : 'Identified operational friction & core user needs'}
            </div>
          </motion.div>

          {/* KARTU SOLUSI */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="p-6 sm:p-8 rounded-3xl bg-white border border-[#BAE6FD] shadow-xs flex flex-col justify-between gap-6 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-[#E0F2FE]/50 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col gap-4 relative z-10">
              <div className="flex items-center justify-between">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0369A1] font-space text-[11px] font-bold uppercase tracking-wider border border-[#BAE6FD]">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>{isIndo ? 'Solusi Rekayasa & UX' : 'Engineering Solution'}</span>
                </span>
                <span className="text-xs font-space text-[#999999]">// 02. SOLUTION</span>
              </div>

              <BlurText
                text={isIndo ? 'Arsitektur & Pendekatan Teknis' : 'Technical Implementation'}
                delay={25}
                animateBy="words"
                direction="top"
                className="text-xl sm:text-2xl font-sans font-bold text-[#111111] tracking-tight"
              />

              <p className="text-sm sm:text-base text-[#334155] font-sans leading-relaxed">
                {solution}
              </p>
            </div>

            <div className="pt-4 border-t border-[#F1F5F9] text-xs font-space text-[#0284C7] font-semibold">
              {isIndo ? 'Dioptimalkan untuk performa, skalabilitas, dan kemudahan pengguna' : 'Optimized for speed, responsiveness, and seamless UX'}
            </div>
          </motion.div>
        </div>

        {/* 4. TECH STACK & KEY FEATURES HIGHLIGHTS */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white border border-[#E8E8E2] shadow-xs flex flex-col gap-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <span className="font-space text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                // 03. TECH STACK & ARCHITECTURE
              </span>
              <BlurText
                text={isIndo ? 'Teknologi & Fitur Utama' : 'Technologies & Key Capabilities'}
                delay={25}
                animateBy="words"
                direction="top"
                className="text-2xl sm:text-3xl font-sans font-bold text-[#111111] tracking-tight mt-1"
              />
            </div>
            <span className="text-xs font-space text-[#888888]">
              {project.tags.length} {isIndo ? 'Teknologi Digunakan' : 'Core Technologies'}
            </span>
          </div>

          {/* Tech tags chips */}
          <div className="flex flex-wrap gap-2.5">
            {project.tags.map((tag, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-[#FAFAF7] hover:bg-[#F0F9FF] border border-[#E8E8E2] hover:border-[#38BDF8] text-xs sm:text-sm font-space font-medium text-[#111111] transition-all duration-200 cursor-default shadow-2xs"
              >
                {tag}
              </span>
            ))}
          </div>

          {/* Feature list pills if present */}
          {project.keyFeatures && project.keyFeatures.length > 0 && (
            <div className="pt-4 border-t border-[#E8E8E2]">
              <h4 className="text-xs font-space uppercase tracking-wider text-[#777777] mb-3">
                {isIndo ? 'Kemampuan & Fitur Unggulan Proyek' : 'Key Feature Highlights'}
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
                {project.keyFeatures.map((feat, fIdx) => (
                  <div
                    key={fIdx}
                    className="p-3.5 rounded-xl bg-[#FAFAF7] border border-[#E8E8E2] flex items-center gap-2.5 text-xs sm:text-sm font-sans text-[#333333]"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                    <span>{feat}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* 5. MULTI-IMAGE RESPONSIVE GALLERY COLUMNS */}
        <div className="flex flex-col gap-6 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3">
            <div>
              <span className="font-space text-xs font-bold uppercase tracking-wider text-[#0284C7]">
                // 04. INTERFACE GALLERY & SCREENSHOTS
              </span>
              <BlurText
                text={isIndo ? 'Pratinjau Antarmuka & Tangkapan Layar' : 'Interface Showcase & Screens'}
                delay={25}
                animateBy="words"
                direction="top"
                className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#111111] tracking-tight mt-1"
              />
            </div>
            <span className="text-xs font-space text-[#777777] px-3 py-1.5 rounded-full bg-white border border-[#E8E8E2] shadow-2xs">
              {project.gallery.length} {project.gallery.length > 1 ? (isIndo ? 'Tangkapan Layar' : 'Screenshots') : (isIndo ? 'Tampilan Penuh' : 'Full Screen View')}
            </span>
          </div>

          {/* CASE A: MOBILE SCREEN FORMAT (e.g. Sistem Input Jimpitan & Portal Jimpitan Warga) */}
          {project.isMobileScreen ? (
            <div className="p-6 sm:p-10 md:p-12 rounded-3xl bg-white border border-[#E8E8E2] shadow-xs flex flex-col items-center gap-8">
              <p className="text-xs sm:text-sm font-sans text-[#666666] text-center max-w-lg">
                {isIndo
                  ? 'Antarmuka ini dirancang khusus dengan orientasi mobile-first agar optimal diakses oleh pengguna melalui perangkat smartphone di lapangan.'
                  : 'Engineered specifically with a mobile-first orientation for seamless on-the-go utility on mobile devices.'}
              </p>

              {/* Responsive columns for mobile screens (1 col on mobile, 2 cols on tablet/desktop) */}
              <div className={`w-full grid gap-8 sm:gap-10 justify-center items-start ${
                project.gallery.length > 1 ? 'grid-cols-1 md:grid-cols-2 max-w-3xl' : 'grid-cols-1 max-w-sm'
              }`}>
                {project.gallery.map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: idx * 0.1 }}
                    className="flex flex-col items-center gap-3 w-full"
                  >
                    {/* Smartphone Mockup Frame */}
                    <div 
                      onClick={() => setActiveImageIndex(idx)}
                      className="relative w-full max-w-[290px] sm:max-w-[310px] mx-auto rounded-[36px] p-2.5 bg-[#1F242C] shadow-2xl border-4 border-[#2D333B] cursor-pointer group transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_20px_40px_rgba(0,0,0,0.25)]"
                    >
                      {/* Speaker Notch */}
                      <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-4 bg-[#111111] rounded-full z-20 flex items-center justify-center">
                        <div className="w-2.5 h-2.5 rounded-full bg-[#1A1A1A] mr-2" />
                        <div className="w-8 h-1 rounded-full bg-[#2A2A2A]" />
                      </div>

                      {/* Screen content */}
                      <div className="relative rounded-[28px] overflow-hidden bg-black aspect-[9/19.5]">
                        <img
                          src={item.src}
                          alt={item.title}
                          loading="lazy"
                          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                        />
                        {/* Hover Overlay */}
                        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-4 text-center">
                          <span className="p-3 rounded-full bg-white text-[#111111] shadow-lg">
                            <Maximize2 className="w-4 h-4 text-[#0284C7]" />
                          </span>
                          <span className="text-xs font-sans font-bold text-white">
                            {isIndo ? 'Klik untuk Memperbesar' : 'Click to Inspect Fullscreen'}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Image Caption & Title */}
                    <div className="text-center max-w-xs px-2">
                      <h4 className="text-sm font-sans font-bold text-[#111111]">
                        {item.title}
                      </h4>
                      <p className="text-xs font-sans text-[#777777] mt-0.5">
                        {item.caption}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            /* CASE B: DESKTOP & WEB INTERFACES (Single or Multi-Column Layout) */
            <div className="flex flex-col gap-8">
              {/* If single image: Show Full Width Hero Showcase */}
              {project.gallery.length === 1 ? (
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  onClick={() => setActiveImageIndex(0)}
                  className="rounded-3xl bg-white border border-[#E8E8E2] overflow-hidden shadow-md cursor-pointer group transition-all duration-300 hover:border-[#38BDF8]"
                >
                  {/* Browser mockup top bar */}
                  <div className="px-5 py-3 bg-[#EFEFED] border-b border-[#E0E0DC] flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                      <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                      <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                    </div>
                    <div className="px-6 py-1 rounded-full bg-white/80 text-[11px] font-space text-[#777777] truncate max-w-xs border border-[#E0E0DC]">
                      {project.demoLink && project.demoLink !== '#' ? project.demoLink : `${project.slug}.internal-app`}
                    </div>
                    <span className="text-[11px] font-space text-[#888888] flex items-center gap-1 group-hover:text-[#0284C7] transition-colors">
                      <Maximize2 className="w-3 h-3" />
                      <span className="hidden sm:inline">{isIndo ? 'Perbesar' : 'Expand'}</span>
                    </span>
                  </div>

                  {/* Screenshot Media */}
                  <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-[#ECECE4]">
                    <img
                      src={project.gallery[0].src}
                      alt={project.gallery[0].title}
                      className="w-full h-full object-cover object-top filter contrast-[1.02] transition-transform duration-700 group-hover:scale-[1.02]"
                    />
                  </div>

                  <div className="p-4 sm:p-5 bg-white border-t border-[#E8E8E2] flex items-center justify-between">
                    <div>
                      <h4 className="text-sm sm:text-base font-sans font-bold text-[#111111]">
                        {project.gallery[0].title}
                      </h4>
                      <p className="text-xs text-[#666666]">
                        {project.gallery[0].caption}
                      </p>
                    </div>
                    <span className="text-xs font-space font-medium text-[#0284C7] shrink-0">
                      // FULL PREVIEW
                    </span>
                  </div>
                </motion.div>
              ) : (
                /* Multi-image (> 1 images): Precision responsive columns */
                <div className="flex flex-col gap-8">
                  {/* If 2 images: 2-column grid */}
                  {project.gallery.length === 2 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                      {project.gallery.map((item, idx) => (
                        <motion.div
                          key={idx}
                          initial={{ opacity: 0, y: 20 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.5, delay: idx * 0.1 }}
                          onClick={() => setActiveImageIndex(idx)}
                          className="rounded-3xl bg-white border border-[#E8E8E2] overflow-hidden shadow-xs hover:shadow-md hover:border-[#38BDF8] transition-all cursor-pointer group flex flex-col justify-between"
                        >
                          {/* Browser Mockup Bar */}
                          <div className="px-4 py-2.5 bg-[#F0F0EC] border-b border-[#E4E4DF] flex items-center justify-between">
                            <div className="flex items-center gap-1.5">
                              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                            </div>
                            <span className="text-[10px] font-space text-[#777777] truncate max-w-[150px]">
                              {`view-0${idx + 1}.preview`}
                            </span>
                            <Maximize2 className="w-3 h-3 text-[#999999] group-hover:text-[#0284C7] transition-colors" />
                          </div>

                          {/* Image */}
                          <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECECE4]">
                            <img
                              src={item.src}
                              alt={item.title}
                              loading="lazy"
                              className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                            />
                          </div>

                          {/* Caption */}
                          <div className="p-4 bg-white border-t border-[#E8E8E2]">
                            <h4 className="text-sm font-sans font-bold text-[#111111] group-hover:text-[#0284C7] transition-colors">
                              {item.title}
                            </h4>
                            <p className="text-xs text-[#666666] mt-0.5">
                              {item.caption}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    /* If > 2 images (e.g. Dashboard Admin Jimpitanku with 8 images): Hero preview + organized responsive column grid! */
                    <div className="flex flex-col gap-8">
                      {/* Spotlight main dashboard on top */}
                      <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        onClick={() => setActiveImageIndex(0)}
                        className="rounded-3xl bg-white border border-[#E8E8E2] overflow-hidden shadow-md hover:border-[#38BDF8] transition-all cursor-pointer group"
                      >
                        <div className="px-5 py-3 bg-[#EFEFED] border-b border-[#E0E0DC] flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-[#FF5F56]" />
                            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]" />
                            <div className="w-3 h-3 rounded-full bg-[#27C93F]" />
                          </div>
                          <span className="text-[11px] font-space text-[#777777] font-semibold">
                            {project.gallery[0].title}
                          </span>
                          <span className="text-xs font-space text-[#0284C7] flex items-center gap-1 font-semibold">
                            <Maximize2 className="w-3.5 h-3.5" />
                            <span className="hidden sm:inline">{isIndo ? 'Klik untuk Fullscreen' : 'Click to Inspect'}</span>
                          </span>
                        </div>

                        <div className="relative aspect-[16/9.5] w-full overflow-hidden bg-[#ECECE4]">
                          <img
                            src={project.gallery[0].src}
                            alt={project.gallery[0].title}
                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-[1.02]"
                          />
                        </div>

                        <div className="p-4 sm:p-5 bg-white border-t border-[#E8E8E2]">
                          <h4 className="text-base font-sans font-bold text-[#111111]">
                            {project.gallery[0].title}
                          </h4>
                          <p className="text-xs sm:text-sm text-[#666666] mt-0.5">
                            {project.gallery[0].caption}
                          </p>
                        </div>
                      </motion.div>

                      {/* Remaining Screenshots in Responsive Column Grid */}
                      <div className="flex flex-col gap-4">
                        <div className="flex items-center justify-between border-b border-[#E8E8E2] pb-2">
                          <h4 className="text-sm font-space uppercase tracking-wider font-bold text-[#333333]">
                            {isIndo ? 'Modul & Halaman Fitur Lengkap' : 'All Feature Modules & Workflows'}
                          </h4>
                          <span className="text-xs font-space text-[#777777]">
                            {project.gallery.length - 1} {isIndo ? 'Tampilan Lainnya' : 'Additional Screens'}
                          </span>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
                          {project.gallery.slice(1).map((item, idx) => {
                            const realIdx = idx + 1;
                            return (
                              <motion.div
                                key={realIdx}
                                initial={{ opacity: 0, y: 15 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: idx * 0.06 }}
                                onClick={() => setActiveImageIndex(realIdx)}
                                className="rounded-2xl bg-white border border-[#E8E8E2] overflow-hidden shadow-2xs hover:shadow-md hover:border-[#38BDF8] transition-all cursor-pointer group flex flex-col justify-between"
                              >
                                {/* Mini Browser Top */}
                                <div className="px-3.5 py-2 bg-[#F6F6F2] border-b border-[#E8E8E2] flex items-center justify-between">
                                  <div className="flex items-center gap-1.5">
                                    <div className="w-2 h-2 rounded-full bg-[#FF5F56]" />
                                    <div className="w-2 h-2 rounded-full bg-[#FFBD2E]" />
                                    <div className="w-2 h-2 rounded-full bg-[#27C93F]" />
                                  </div>
                                  <span className="text-[10px] font-space text-[#888888]">
                                    {`#0${realIdx}`}
                                  </span>
                                  <Maximize2 className="w-3 h-3 text-[#999999] group-hover:text-[#0284C7] transition-colors" />
                                </div>

                                {/* Media */}
                                <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECECE4]">
                                  <img
                                    src={item.src}
                                    alt={item.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                  />
                                </div>

                                {/* Bottom Info */}
                                <div className="p-3.5 bg-white border-t border-[#E8E8E2]">
                                  <h5 className="text-xs sm:text-sm font-sans font-bold text-[#111111] group-hover:text-[#0284C7] transition-colors line-clamp-1">
                                    {item.title}
                                  </h5>
                                  <p className="text-[11px] text-[#666666] line-clamp-2 mt-0.5">
                                    {item.caption}
                                  </p>
                                </div>
                              </motion.div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}
        </div>

        {/* 6. NEXT & PREVIOUS PROJECT NAVIGATION BAR */}
        <div className="pt-8 border-t border-[#E8E8E2]">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Prev Project Card */}
            <Link
              to={`/project/${prevProject.slug}`}
              className="p-5 rounded-2xl bg-white hover:bg-[#FAFAF7] border border-[#E8E8E2] hover:border-[#111111] transition-all duration-300 shadow-2xs group flex items-center gap-4 cursor-pointer"
            >
              <div className="w-10 h-10 rounded-full bg-[#F0F0EB] group-hover:bg-[#111111] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                <ChevronLeft className="w-5 h-5" />
              </div>
              <div className="flex flex-col min-w-0">
                <span className="text-[10px] font-space uppercase tracking-wider text-[#888888]">
                  ← {isIndo ? 'Proyek Sebelumnya' : 'Previous Project'}
                </span>
                <span className="text-sm font-sans font-bold text-[#111111] truncate group-hover:text-[#0284C7] transition-colors">
                  {prevProject.title}
                </span>
              </div>
            </Link>

            {/* Next Project Card */}
            <Link
              to={`/project/${nextProject.slug}`}
              className="p-5 rounded-2xl bg-white hover:bg-[#FAFAF7] border border-[#E8E8E2] hover:border-[#111111] transition-all duration-300 shadow-2xs group flex items-center justify-between gap-4 cursor-pointer text-right"
            >
              <div className="flex flex-col min-w-0 flex-1 text-left sm:text-right">
                <span className="text-[10px] font-space uppercase tracking-wider text-[#888888]">
                  {isIndo ? 'Proyek Selanjutnya' : 'Next Project'} →
                </span>
                <span className="text-sm font-sans font-bold text-[#111111] truncate group-hover:text-[#0284C7] transition-colors">
                  {nextProject.title}
                </span>
              </div>
              <div className="w-10 h-10 rounded-full bg-[#F0F0EB] group-hover:bg-[#111111] group-hover:text-white transition-colors flex items-center justify-center shrink-0">
                <ChevronRight className="w-5 h-5" />
              </div>
            </Link>
          </div>
        </div>

        {/* 7. BOTTOM CALL TO ACTION FOR HR & CLIENTS */}
        <div className="rounded-3xl bg-linear-to-r from-[#111111] to-[#1F2937] text-white p-8 sm:p-10 md:p-12 shadow-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="flex flex-col gap-2 max-w-xl">
            <span className="font-space text-xs font-bold text-[#38BDF8] uppercase tracking-wider">
              {isIndo ? '// BUTUH SOLUSI WEB SEPERTI INI?' : '// INTERESTED IN WORKING TOGETHER?'}
            </span>
            <h3 className="text-2xl sm:text-3xl font-sans font-bold tracking-tight">
              {isIndo
                ? 'Mari diskusikan kebutuhan website dan aplikasi Anda.'
                : "Let's build something scalable and impactful together."}
            </h3>
            <p className="text-sm text-[#9CA3AF] leading-relaxed">
              {isIndo
                ? 'Tersedia untuk peluang kerja full-time, kontrak, maupun proyek freelance.'
                : 'Available for full-time frontend developer roles, contracts, and freelance projects.'}
            </p>
          </div>

          <Link
            to="/#contact"
            className="px-8 py-3.5 rounded-full bg-[#38BDF8] hover:bg-[#0284C7] text-[#0B1120] hover:text-white text-sm font-sans font-bold transition-all shadow-md shrink-0 cursor-pointer"
          >
            {isIndo ? 'Hubungi Saya Sekarang' : 'Start a Conversation'}
          </Link>
        </div>

      </div>

      {/* 8. INTERACTIVE FULLSCREEN IMAGE LIGHTBOX MODAL */}
      <AnimatePresence>
        {activeImageIndex !== null && (
          <div
            className="fixed inset-0 z-[99999] bg-[#0B0B0E]/95 backdrop-blur-md flex flex-col items-center justify-between p-3 sm:p-6 overflow-y-auto"
            role="dialog"
            aria-modal="true"
          >
            {/* Backdrop click to close */}
            <div
              className="fixed inset-0 bg-transparent cursor-pointer z-10"
              onClick={() => setActiveImageIndex(null)}
              aria-label="Tutup dengan klik latar belakang"
            />

            {/* Top Control Bar with Image Counter & Prominent Close Button */}
            <div className="relative z-30 w-full max-w-5xl flex items-center justify-between pt-2 pb-3 px-2 sm:px-0">
              {/* Counter Pill */}
              <div className="px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white text-xs font-space font-medium flex items-center gap-2 shadow-sm">
                <span className="w-2 h-2 rounded-full bg-[#38BDF8] animate-pulse" />
                <span>
                  {activeImageIndex + 1} / {project.gallery.length}
                </span>
                <span className="hidden sm:inline text-gray-400">|</span>
                <span className="hidden sm:inline text-gray-300 font-sans truncate max-w-[200px]">
                  {project.gallery[activeImageIndex].title}
                </span>
              </div>

              {/* High-visibility Close Button (Top) */}
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="inline-flex items-center gap-1.5 px-4 py-2 sm:px-4 sm:py-2 rounded-full bg-white hover:bg-gray-100 text-[#111111] shadow-xl active:scale-95 transition-all duration-200 cursor-pointer font-sans font-bold text-xs sm:text-sm border border-white/40"
                aria-label="Tutup pratinjau"
              >
                <X className="w-4 h-4 text-[#0284C7]" />
                <span>{isIndo ? 'Tutup' : 'Close'}</span>
              </button>
            </div>

            {/* Main Modal Image & Caption Container */}
            <div className="relative z-20 w-full max-w-5xl flex-1 flex flex-col items-center justify-center my-auto py-2">
              {/* Prev Image Button */}
              {project.gallery.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev - 1 + project.gallery.length) % project.gallery.length);
                  }}
                  className="absolute left-1 sm:left-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 transition-all cursor-pointer z-30 shadow-lg active:scale-95"
                  aria-label="Gambar sebelumnya"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Next Image Button */}
              {project.gallery.length > 1 && (
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setActiveImageIndex((prev) => (prev + 1) % project.gallery.length);
                  }}
                  className="absolute right-1 sm:right-3 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-black/60 hover:bg-white text-white hover:text-black border border-white/20 transition-all cursor-pointer z-30 shadow-lg active:scale-95"
                  aria-label="Gambar selanjutnya"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              )}

              {/* Framed Image Display */}
              <motion.div
                key={activeImageIndex}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.2 }}
                onClick={(e) => e.stopPropagation()}
                className="rounded-2xl overflow-hidden border border-white/20 bg-black/70 shadow-2xl max-h-[62vh] sm:max-h-[72vh] flex items-center justify-center mx-auto"
              >
                <img
                  src={project.gallery[activeImageIndex].src}
                  alt={project.gallery[activeImageIndex].title}
                  className="max-h-[62vh] sm:max-h-[72vh] max-w-full w-auto object-contain"
                />
              </motion.div>

              {/* Title & Caption */}
              <div
                onClick={(e) => e.stopPropagation()}
                className="text-center px-4 pt-3 max-w-xl mx-auto"
              >
                <h4 className="text-sm sm:text-base font-sans font-bold text-white">
                  {project.gallery[activeImageIndex].title}
                </h4>
                <p className="text-xs text-gray-300 mt-0.5 line-clamp-2">
                  {project.gallery[activeImageIndex].caption}
                </p>
              </div>
            </div>

            {/* Dedicated Mobile Bottom Close Bar (Easy Thumb Access on Handheld Devices) */}
            <div className="relative z-30 w-full sm:hidden flex flex-col items-center gap-2 pt-2 pb-4">
              <button
                type="button"
                onClick={() => setActiveImageIndex(null)}
                className="w-full max-w-xs py-3 px-6 rounded-full bg-white hover:bg-gray-100 text-[#111111] shadow-2xl active:scale-95 transition-all text-xs font-sans font-bold flex items-center justify-center gap-2 cursor-pointer border border-white/40"
              >
                <X className="w-4 h-4 text-[#0284C7]" />
                <span>{isIndo ? 'Tutup Pratinjau Gambar' : 'Close Image Preview'}</span>
              </button>
              <span className="text-[10px] font-space text-gray-400">
                {isIndo ? 'Ketuk di luar gambar atau tombol untuk menutup' : 'Tap outside or button to dismiss'}
              </span>
            </div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ProjectDetail;
