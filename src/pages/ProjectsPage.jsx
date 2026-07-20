import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projectsList } from '../data/portfolioData';
import { ExternalLink, GitBranch, FolderOpen, X } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';

const ProjectsPage = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [activeTab, setActiveTab] = useState('All');

  const categories = ['All', 'Frontend', 'Fullstack'];
  
  const filteredProjects = activeTab === 'All' 
    ? projectsList 
    : projectsList.filter(p => p.category === activeTab);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2 border-b border-border-custom pb-4">
        <h1 className="text-4xl font-space font-bold text-text-main">Projects</h1>
        <p className="text-text-muted">A collection of systems showcasing challenge-based development flows.</p>
      </div>

      {/* Tabs */}
      <div className="flex gap-2">
        {categories.map(cat => (
          <motion.button
            key={cat}
            onClick={() => setActiveTab(cat)}
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            className={`px-4 py-1.5 rounded-full text-xs font-semibold font-space transition-colors cursor-pointer border ${
              activeTab === cat 
                ? 'bg-primary text-white border-primary' 
                : 'border-border-custom text-text-muted hover:text-text-main'
            }`}
          >
            {cat}
          </motion.button>
        ))}
      </div>

      {/* Projects Grid with ScrollReveal */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {filteredProjects.map((project, idx) => (
          <ScrollReveal key={idx} variant="spring-up" delay={(idx % 2) * 0.1} yOffset={35}>
            <motion.div 
              whileHover={{ y: -6, scale: 1.01, boxShadow: "0 10px 30px rgba(59, 130, 246, 0.08)" }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="glassmorphism rounded-xl overflow-hidden flex flex-col justify-between h-full group hover:border-primary/40 transition-colors duration-300"
            >
              <div>
                {/* Project Screenshot visual preview */}
                <div className="relative aspect-video w-full overflow-hidden border-b border-border-custom bg-slate-900 flex items-center justify-center">
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105 pointer-events-none"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-85" />
                </div>
                
                <div className="p-5 flex flex-col gap-3.5">
                  <div className="flex items-center gap-2 text-primary">
                    <FolderOpen className="w-4 h-4" />
                    <span className="text-[10px] font-mono tracking-wider font-bold uppercase">CASE STUDY</span>
                  </div>
                  <h3 className="font-space text-lg font-bold text-text-main group-hover:text-primary transition-colors">{project.title}</h3>
                  <p className="text-xs text-text-muted line-clamp-3 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {project.tags.map((t, tIdx) => (
                      <span key={tIdx} className="text-[10px] px-2 py-0.5 bg-primary/10 text-primary rounded-full font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </div>
              
              <div className="p-4 border-t border-border-custom bg-black/5 flex items-center justify-between mt-auto">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1 cursor-pointer"
                >
                  Read Case Study &rarr;
                </button>
                <div className="flex items-center gap-3">
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-main" aria-label="GitHub Repository">
                    <GitBranch className="w-4 h-4" />
                  </a>
                  {project.demoLink !== '#' && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-main" aria-label="Live Demo Link">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </ScrollReveal>
        ))}
      </div>

      {/* Case Study Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="glassmorphism w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-border-custom dark:bg-slate-900 bg-white"
            >
              <div className="p-6 border-b border-border-custom flex justify-between items-center">
                <h2 className="font-space text-2xl font-bold text-text-main">{selectedProject.title}</h2>
                <button onClick={() => setSelectedProject(null)} className="text-text-muted hover:text-text-main cursor-pointer" aria-label="Close Case Study">
                  <X className="w-5 h-5" />
                </button>
              </div>
              
              <div className="p-6 flex flex-col gap-6 max-h-[60vh] overflow-y-auto">
                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-mono tracking-widest text-red-500 font-bold uppercase">🔴 The Challenge (Problem)</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{selectedProject.problem}</p>
                </div>
                
                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-mono tracking-widest text-green-500 font-bold uppercase">🟢 The Solution</h4>
                  <p className="text-sm text-text-muted leading-relaxed">{selectedProject.solution}</p>
                </div>

                <div className="flex flex-col gap-2">
                  <h4 className="text-xs font-mono tracking-widest text-primary font-bold uppercase">🛠️ Technologies Applied</h4>
                  <div className="flex flex-wrap gap-2 mt-1">
                    {selectedProject.tags.map((t, tIdx) => (
                      <span key={tIdx} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-mono">{t}</span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="p-4 border-t border-border-custom bg-black/5 flex justify-end gap-3">
                <a 
                  href={selectedProject.githubLink} 
                  target="_blank" 
                  rel="noreferrer" 
                  className="px-4 py-2 text-xs font-bold rounded-lg border border-border-custom text-text-main hover:bg-primary/10 transition-colors flex items-center gap-1.5"
                >
                  <GitBranch className="w-3.5 h-3.5" /> Source Code
                </a>
                {selectedProject.demoLink !== '#' && (
                  <a 
                    href={selectedProject.demoLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-4 py-2 text-xs font-bold rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors flex items-center gap-1.5"
                  >
                    <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                  </a>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ProjectsPage;
