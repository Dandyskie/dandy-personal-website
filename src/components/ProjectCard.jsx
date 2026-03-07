import React from 'react';

const ProjectCard = ({ title, description, tags, demoLink, githubLink }) => {
  return (
    <div className="bg-slate-900/50 border border-white/10 rounded-2xl p-7 flex flex-col h-full hover:border-blue-500/40 transition-all duration-300 card-lift group relative overflow-hidden backdrop-blur-md">
      
      <div className="flex-1 relative z-10">
        <h3 className="text-2xl font-bold mb-3 font-poppins text-white group-hover:text-primary transition-colors">{title}</h3>
        <p className="text-slate-400 mb-6 line-clamp-3 leading-relaxed text-sm">
          {description}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-8">
          {tags && tags.map((tag, index) => (
            <span 
              key={index} 
              className="px-3 py-1 text-xs font-medium rounded-full bg-white/5 text-slate-300 border border-white/10"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      
      <div className="flex items-center gap-4 mt-auto relative z-10 pt-5 border-t border-white/5">
        {demoLink && (
          <a 
            href={demoLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-sm font-medium hover:text-white transition-colors flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary"
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
            className="text-sm font-medium text-slate-400 hover:text-white transition-colors flex items-center gap-1.5 px-4 py-2 rounded-lg hover:bg-white/5"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            GitHub
          </a>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
