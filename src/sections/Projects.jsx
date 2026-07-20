import React from 'react';
import ProjectCard from '../components/ProjectCard';
import Reveal from '../components/Reveal';
import { projectsList } from '../data/portfolioData';

const Projects = () => {
  return (
    <section id="projects" className="py-24 bg-transparent relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <Reveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-4 flex items-center gap-4">
                Featured Projects
                <span className="h-[2px] w-24 bg-primary inline-block"></span>
              </h2>
              <p className="text-slate-400 text-lg leading-relaxed">
                Here are some of my recent projects. These demonstrate my expertise in frontend development, state management, and building responsive UI.
              </p>
            </div>
            
            <a href="https://github.com/Dandyskie" target="_blank" rel="noopener noreferrer" className="text-primary hover:text-white transition-colors group flex items-center gap-2 font-medium shrink-0">
              View full archive 
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="transform group-hover:translate-x-1 transition-transform"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </a>
          </div>
        </Reveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project, index) => (
             <Reveal key={index} delay={index * 150}>
               <ProjectCard {...project} />
             </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
