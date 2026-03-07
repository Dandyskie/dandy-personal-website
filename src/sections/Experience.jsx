import React from 'react';
import { experienceList } from '../data/portfolioData';

const Experience = () => {
  return (
    <section id="experience" className="py-24 bg-base relative border-t border-card-border/30 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] pointer-events-none transform -translate-y-1/2 translate-x-1/2"></div>
      
      <div className="container mx-auto px-6 md:px-12 relative z-10 max-w-7xl">
        <h2 className="text-3xl md:text-5xl font-bold font-poppins text-white mb-16 text-center">
          My Experience
        </h2>
        
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12">
            {experienceList.map((exp, index) => (
              <div 
                key={index}
                className="relative pl-8 md:pl-0 animate-[fadeIn_0.5s_ease-out_both]"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                {/* Timeline line (desktop) */}
                <div className="hidden md:block absolute left-1/2 top-0 bottom-[-3rem] w-px bg-card-border transform -translate-x-1/2 last:bottom-0"></div>
                
                {/* Timeline line (mobile) */}
                <div className="md:hidden absolute left-0 top-2 bottom-[-3rem] w-px bg-card-border last:bottom-0"></div>
                
                <div className={`flex flex-col md:flex-row items-start justify-between gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                  
                  {/* Timeline dot */}
                  <div className="absolute left-[-4.5px] md:left-1/2 top-4 md:top-8 transform md:-translate-x-1/2 w-3 h-3 rounded-full bg-primary ring-4 ring-base z-10"></div>
                  
                  {/* Content Box */}
                  <div className={`w-full md:w-[45%] bg-slate-900/40 border border-white/10 hover:border-blue-500/30 transition-all duration-300 rounded-2xl p-6 md:p-8 backdrop-blur-sm card-lift ${index % 2 === 0 ? 'text-left md:text-right' : 'text-left'}`}>
                    <div className={`flex flex-col ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'} mb-4 gap-2`}>
                      <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-md border border-primary/20 mb-2">
                        {exp.period}
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-white font-poppins">{exp.role}</h3>
                      <h4 className="text-slate-400 font-medium">{exp.company}</h4>
                    </div>
                    
                    <p className="text-slate-400 leading-relaxed mb-6 text-sm">
                      {exp.description}
                    </p>
                    
                    <div className={`flex flex-wrap gap-2 ${index % 2 === 0 ? 'md:justify-end' : 'md:justify-start'}`}>
                      {exp.skills.map((skill, idx) => (
                        <span key={idx} className="text-xs font-medium px-2.5 py-1 rounded bg-white/5 border border-white/10 text-slate-300">
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block w-[45%]"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
