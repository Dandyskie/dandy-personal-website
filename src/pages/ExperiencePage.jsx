import React from 'react';
import { motion } from 'framer-motion';
import { experienceList, educationList, skillsCategories } from '../data/portfolioData';
import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

const ExperiencePage = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-10"
    >
      <div className="flex flex-col gap-2 border-b border-border-custom pb-4">
        <h1 className="text-4xl font-space font-bold text-text-main">Timeline & Tech Stack</h1>
        <p className="text-text-muted">Education, work milestones, and tools breakdown.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline columns (Work & Edu) */}
        <div className="lg:col-span-2 flex flex-col gap-8">
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-space font-bold text-text-main flex items-center gap-2">
              <Briefcase className="w-6 h-6 text-primary" /> Work Experience
            </h2>
            <div className="flex flex-col gap-6 pl-2 border-l border-border-custom">
              {experienceList.map((exp, idx) => (
                <div key={idx} className="relative pl-6 flex flex-col gap-2">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                    <div>
                      <h3 className="font-space text-lg font-bold text-text-main">{exp.role}</h3>
                      <p className="text-sm font-semibold text-primary">{exp.company}</p>
                    </div>
                    <span className="text-xs text-text-muted flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" /> {exp.period}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-1.5 mt-1">
                    {exp.skills.map((s, sIdx) => (
                      <span key={sIdx} className="text-[10px] px-2 py-0.5 bg-text-muted/10 text-text-muted rounded font-mono">{s}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-space font-bold text-text-main flex items-center gap-2">
              <GraduationCap className="w-6 h-6 text-primary" /> Education
            </h2>
            <div className="flex flex-col gap-6 pl-2 border-l border-border-custom">
              {educationList.map((edu, idx) => (
                <div key={idx} className="relative pl-6 flex flex-col gap-2">
                  <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                    <div>
                      <h3 className="font-space text-lg font-bold text-text-main">{edu.school}</h3>
                      <p className="text-sm font-semibold text-primary">{edu.field}</p>
                    </div>
                    <span className="text-xs text-text-muted flex items-center gap-1 font-mono">
                      <Calendar className="w-3.5 h-3.5" /> {edu.period}
                    </span>
                  </div>
                  <p className="text-sm text-text-muted">{edu.description}</p>
                  <span className="text-xs font-mono font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded w-fit mt-1">
                    Final Grade: {edu.grade}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Tech stack sidebar */}
        <div className="flex flex-col gap-6">
          <h2 className="text-2xl font-space font-bold text-text-main">Skills Categories</h2>
          <div className="flex flex-col gap-4">
            {Object.entries(skillsCategories).map(([cat, list]) => (
              <div key={cat} className="glassmorphism p-4 rounded-xl flex flex-col gap-2.5">
                <h3 className="font-space text-sm font-bold text-text-main border-b border-border-custom pb-1.5">{cat}</h3>
                <div className="flex flex-wrap gap-1.5">
                  {list.map((skill) => (
                    <span key={skill} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md font-mono">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ExperiencePage;
