/**
 * ANATOMI FILE: src/components/ProjectModal.jsx
 * ====================================================================
 * 1. IMPORTS
 *    - React, useEffect
 *    - Framer Motion: motion, AnimatePresence
 *    - Lucide Icons: X, ExternalLink, GitBranch, AlertCircle, CheckCircle2
 * 
 * 2. PROPS DEFINITION
 *    - project: Object data project yang aktif (atau null jika tertutup)
 *    - onClose: Function callback untuk menutup modal
 * 
 * 3. KOMPONEN UTAMA (ProjectModal)
 *    - Side-effect (useEffect): Mengunci scroll body saat modal aktif (overflow: hidden)
 *    - Escape Key Listener: Menutup modal ketika tombol Escape ditekan
 *    - Render Backdrop: Overlay gelap dengan blur (klik di luar untuk menutup)
 *    - Render Modal Content:
 *      * Header: Kategori badge, judul serif besar, tombol close
 *      * Media: Gambar screenshot penuh
 *      * Section Problem & Solution (Struktur Studi Kasus Terarah)
 *      * Section Tags & Action Buttons (Demo & Repo)
 * 
 * 4. EXPORT
 *    - Default export ProjectModal
 * ====================================================================
 * ALUR KERJA:
 * Menampilkan detail komprehensif saat user memilih sebuah project.
 * Memberikan konteks engineering yang jelas (Problem -> Solution -> Tech)
 * yang dicari oleh tech recruiter dan calon klien.
 * ====================================================================
 */

import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, GitBranch, AlertCircle, CheckCircle2 } from 'lucide-react';

const ProjectModal = ({ project, onClose }) => {
  // Lock body scroll, toggle modal-open class & escape listener
  useEffect(() => {
    if (!project) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    document.body.classList.add('modal-open');

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.classList.remove('modal-open');
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return createPortal(
    <AnimatePresence>
      <div 
        className="fixed inset-0 z-[99999] flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
        role="dialog"
        aria-modal="true"
        aria-labelledby="modal-title"
      >
        {/* Fullscreen Backdrop overlay (Covers entire screen, above navbar) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-[#0B0B0E]/80 backdrop-blur-md cursor-pointer"
        />

        {/* Modal Container */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-4xl bg-white rounded-[28px] sm:rounded-3xl shadow-2xl border border-[#E8E8E2] overflow-hidden z-10 my-auto max-h-[90vh] flex flex-col"
        >
          {/* Sticky Header Bar — Always visible, never covered */}
          <div className="sticky top-0 z-30 bg-white/95 backdrop-blur-md px-6 sm:px-8 py-4 sm:py-5 border-b border-[#E8E8E2] flex items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F2FE] text-[#0284C7] font-space text-[11px] font-bold tracking-wider uppercase border border-[#BAE6FD]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7]" />
                {project.category}
              </span>
              <span className="hidden sm:inline-block text-xs font-space text-[#888888]">
                // CASE STUDY
              </span>
            </div>

            <div className="flex items-center gap-2">
              <span className="hidden sm:inline-block text-[11px] font-space text-[#999999] mr-2">
                Press ESC to close
              </span>
              <button
                type="button"
                onClick={onClose}
                className="p-2 rounded-full bg-[#FAFAF7] hover:bg-[#111111] hover:text-white text-[#111111] border border-[#E8E8E2] transition-colors cursor-pointer shadow-2xs"
                aria-label="Tutup modal"
              >
                <X className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Modal Scrollable Body */}
          <div className="p-6 sm:p-8 flex flex-col gap-8 overflow-y-auto">
            {/* Title & One-line Summary */}
            <div>
              <h2 id="modal-title" className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#111111] tracking-tight mb-2">
                {project.title}
              </h2>
              <p className="text-sm sm:text-base text-[#666666] leading-relaxed max-w-2xl">
                {project.summary || 'A specialized web application engineered for real-world reliability, intuitive human experience, and scalable frontend architecture.'}
              </p>
            </div>

            {/* Browser Window Device Mockup */}
            <div className="rounded-2xl overflow-hidden border border-[#E8E8E2] bg-[#F3F3EE] shadow-sm">
              {/* Browser bar */}
              <div className="px-4 py-2.5 bg-[#E8E8E2]/70 border-b border-[#DCDCD4] flex items-center gap-2">
                <div className="flex items-center gap-1.5">
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                  <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
                </div>
                <div className="mx-auto px-4 py-0.5 rounded-md bg-white/70 text-[10px] font-space text-[#666666] truncate max-w-xs">
                  {project.demoLink && project.demoLink !== '#' ? project.demoLink : 'system-preview.internal'}
                </div>
              </div>

              {/* Image Preview */}
              <div className="aspect-[16/10] w-full overflow-hidden bg-white">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover object-top filter contrast-[1.02]"
                />
              </div>
            </div>

            {/* Problem & Solution Panels */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {/* Challenge Card */}
              <div className="p-6 rounded-2xl bg-[#FAFAF7] border border-[#E8E8E2] flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#D97706] font-space text-xs font-bold uppercase tracking-wider">
                  <div className="p-1.5 rounded-lg bg-[#FEF3C7] text-[#D97706]">
                    <AlertCircle className="w-4 h-4" />
                  </div>
                  <span>The Challenge</span>
                </div>
                <p className="text-sm text-[#444444] leading-relaxed font-sans">
                  {project.problem || 'Addressing complex workflow bottlenecks, requiring an intuitive interface while maintaining strict data integrity and responsive speed across devices.'}
                </p>
              </div>

              {/* Solution Card */}
              <div className="p-6 rounded-2xl bg-[#F0F9FF] border border-[#BAE6FD] flex flex-col gap-3">
                <div className="flex items-center gap-2 text-[#0284C7] font-space text-xs font-bold uppercase tracking-wider">
                  <div className="p-1.5 rounded-lg bg-[#E0F2FE] text-[#0284C7]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <span>Engineering Solution</span>
                </div>
                <p className="text-sm text-[#334155] leading-relaxed font-sans">
                  {project.solution || 'Architected modular reactive components, optimized client state handling, and integrated robust REST APIs with graceful error handling.'}
                </p>
              </div>
            </div>

            {/* Technologies & Tools */}
            <div className="flex flex-col gap-3 pt-2">
              <h4 className="text-xs font-space font-bold uppercase tracking-wider text-[#666666]">
                Technologies & Architecture
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, idx) => (
                  <span
                    key={idx}
                    className="px-3.5 py-1.5 rounded-full bg-[#FAFAF7] border border-[#E8E8E2] text-xs font-space font-medium text-[#111111] hover:border-[#38BDF8] transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Sticky Modal Footer Actions */}
          <div className="p-5 sm:px-8 border-t border-[#E8E8E2] bg-[#FAFAF7] flex flex-wrap items-center justify-between gap-4">
            <div className="flex items-center gap-3 flex-wrap">
              {project.demoLink && project.demoLink !== '#' && (
                <a
                  href={project.demoLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full bg-[#111111] hover:bg-[#252525] text-xs font-sans font-bold text-white transition-all flex items-center gap-2 shadow-sm hover:shadow-md cursor-pointer"
                >
                  <span>Open Live Demo</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#38BDF8]" />
                </a>
              )}

              {project.githubLink && (
                <a
                  href={project.githubLink}
                  target="_blank"
                  rel="noreferrer"
                  className="px-5 py-2.5 rounded-full border border-[#E8E8E2] bg-white hover:border-[#111111] text-xs font-sans font-semibold text-[#111111] transition-all flex items-center gap-2 shadow-2xs cursor-pointer"
                >
                  <GitBranch className="w-3.5 h-3.5 text-[#0284C7]" />
                  <span>View Repository</span>
                </a>
              )}
            </div>

            <button
              type="button"
              onClick={onClose}
              className="text-xs font-space font-bold uppercase tracking-wider text-[#777777] hover:text-[#111111] transition-colors ml-auto cursor-pointer px-3 py-2"
            >
              Close Study
            </button>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>,
    document.body
  );
};

export default ProjectModal;
