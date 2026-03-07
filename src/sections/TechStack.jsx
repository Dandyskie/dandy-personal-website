import React from 'react';
import TechBadge from '../components/TechBadge';
import { techStackList } from '../data/portfolioData';

const TechStack = () => {
  return (
    <section id="skills" className="py-24 bg-base relative border-t border-white/5">
      <div className="container mx-auto px-6 md:px-12 max-w-7xl">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold font-poppins text-white mb-4">
            Technologies I work with
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto rounded-full mb-6"></div>
          <p className="text-slate-400 text-lg leading-relaxed">
            Here are a few technologies I've been working with recently to build robust and scalable web applications.
          </p>
        </div>
        
        <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
          {techStackList.map((tech, index) => (
             <div 
               key={index}
               className="animate-[fadeIn_0.5s_ease-out_both]"
               style={{ animationDelay: `${index * 50}ms` }}
             >
               <TechBadge name={tech} />
             </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;
