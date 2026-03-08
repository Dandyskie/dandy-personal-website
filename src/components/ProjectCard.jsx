import React, { useState } from 'react';

const ProjectCard = ({ title, description, tags, demoLink, githubLink, image }) => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <div 
      className="group relative h-[420px] w-full preserve-3d cursor-pointer" 
      onClick={() => setIsFlipped(!isFlipped)}
    >
      <div 
        className={`absolute inset-0 w-full h-full transition-all duration-700 preserve-3d ${isFlipped ? 'rotate-y-180' : ''}`}
      >
        {/* Front Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden bg-slate-900/60 border border-white/10 rounded-2xl p-7 flex flex-col hover:border-primary/40 focus:border-primary/40 hover:-translate-y-1 transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 backdrop-blur-md">
          <div className="flex-1 relative z-10">
            <h3 className="text-2xl font-bold mb-3 font-poppins text-white group-hover:text-primary transition-colors">{title}</h3>
            <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed text-sm">
              {description}
            </p>
            
            <div className="flex flex-wrap gap-2 mb-8">
              {tags && tags.map((tag, index) => (
                <span 
                  key={index} 
                  className="px-3 py-1 text-xs font-medium rounded-full bg-slate-800/80 text-slate-300 border border-white/5"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          <div className="mt-auto relative z-10 pt-5 border-t border-white/5 flex justify-between items-center">
            <span className="text-xs text-slate-500 font-medium tracking-wider uppercase">Tap to expand</span>
            <button 
              className="w-10 h-10 rounded-full bg-primary/10 border border-primary/20 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white group-hover:rotate-90 transition-all duration-300 shadow-lg shadow-primary/5"
              aria-label="View Project Details"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        </div>

        {/* Back Face */}
        <div className="absolute inset-0 w-full h-full backface-hidden rotate-y-180 bg-slate-900/95 border border-white/10 rounded-2xl overflow-hidden shadow-2xl shadow-primary/20 flex flex-col backdrop-blur-md">
          {/* Project Preview Image */}
          <div className="h-40 w-full relative shrink-0">
            <img 
              src={image || "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=800&auto=format&fit=crop"} 
              alt={title} 
              className="w-full h-full object-cover opacity-80" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900/95 to-transparent"></div>
          </div>
          
          <div className="px-6 pb-6 flex-1 flex flex-col justify-between overflow-y-auto custom-scrollbar">
            <div className="mb-4">
              <h3 className="text-xl font-bold font-poppins text-white mb-2">{title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">
                {description}
              </p>
            </div>
            
            <div className="flex flex-col gap-3 pt-2 shrink-0">
              {demoLink && (
                <a 
                  href={demoLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center text-sm font-medium flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors active:scale-95 duration-200"
                  onClick={(e) => e.stopPropagation()} 
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
                  Live Demo
                </a>
              )}
              {githubLink && (
                <a 
                  href={githubLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full text-center text-sm font-medium text-slate-300 hover:text-white transition-colors flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg hover:bg-white/5 border border-white/5 hover:border-white/10 active:scale-95 duration-200"
                  onClick={(e) => e.stopPropagation()} 
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                  Source Code
                </a>
              )}
              
              <button 
                className="mt-2 text-xs text-slate-500 hover:text-slate-300 transition-colors flex items-center justify-center gap-1"
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFlipped(false);
                }}
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
                Flip Back
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

