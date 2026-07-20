import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Sparkles, Mail } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative overflow-hidden py-10 md:py-16">
      <div className="absolute inset-0 bg-radial-lighting opacity-30 pointer-events-none" />
      
      <div className="flex flex-col lg:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text Area */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
          className="flex-1 flex flex-col items-center lg:items-start text-center lg:text-left gap-6"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20 font-space uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" /> Available for opportunities
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black font-space tracking-tight text-text-main leading-tight select-none">
            Hi, I'm <span className="text-primary hover:text-glow transition-all duration-300">Dandy Rama Wiguna</span>
          </h1>

          <h2 className="text-xl md:text-2xl font-space font-bold text-text-muted">
            Junior Frontend Developer
          </h2>

          <p className="text-base md:text-lg text-text-muted max-w-xl leading-relaxed">
            I'm a Software and Game Development (PPLG) graduate specializing in React and Vue. I enjoy building highly interactive, scalable, and responsive web applications.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 mt-2 w-full sm:w-auto">
            <Link 
              to="/projects"
              className="w-full sm:w-auto px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-space text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-1.5 cursor-pointer"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/contact"
              className="w-full sm:w-auto px-6 py-3 rounded-full border border-border-custom hover:bg-primary/10 text-text-main font-space text-sm font-bold transition-all text-center cursor-pointer"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex items-center gap-4 mt-2">
            <a 
              href="https://github.com/Dandyskie" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full border border-border-custom text-text-muted hover:text-text-main hover:bg-primary/15 transition-all" 
              aria-label="GitHub"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
            </a>
            <a 
              href="https://www.linkedin.com/in/dandy-rama-wiguna-3575ab370/" 
              target="_blank" 
              rel="noreferrer" 
              className="p-2 rounded-full border border-border-custom text-text-muted hover:text-text-main hover:bg-primary/15 transition-all" 
              aria-label="LinkedIn"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
            </a>
            <a 
              href="mailto:dandyskie@gmail.com" 
              className="p-2 rounded-full border border-border-custom text-text-muted hover:text-text-main hover:bg-primary/15 transition-all" 
              aria-label="Email"
            >
              <Mail className="w-4 h-4" />
            </a>
          </div>
        </motion.div>

        {/* Visual Mockup Card */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut', delay: 0.2 }}
          className="hidden lg:block flex-1 max-w-md relative group"
        >
          <div className="absolute inset-x-0 -bottom-6 h-64 bg-primary/20 blur-3xl rounded-full transform group-hover:bg-primary/30 transition-colors duration-500" />
          <div className="relative glassmorphism rounded-2xl shadow-2xl overflow-hidden border border-border-custom">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-border-custom bg-black/5">
              <div className="w-3 h-3 rounded-full bg-red-500/80" />
              <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <div className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            {/* Body */}
            <div className="p-6 font-mono text-sm leading-relaxed text-text-muted">
              <p><span className="text-blue-400">import</span> React <span className="text-blue-400">from</span> 'react';</p>
              <p className="mt-2"><span className="text-blue-400">const</span> Developer = () =&gt; {'{'}</p>
              <p className="ml-4 mt-2"><span className="text-blue-400">return</span> (</p>
              <p className="ml-8 text-primary">&lt;Portfolio</p>
              <p className="ml-12">{"skills={['React', 'Tailwind', 'Laravel']}"}</p>
              <p className="ml-12">focus="Scalable Frontend Layouts"</p>
              <p className="ml-8 text-primary">/&gt;</p>
              <p className="ml-4">);</p>
              <p>{'}'};</p>
              <p className="mt-4"><span className="text-blue-400">export default</span> Developer;</p>
            </div>
          </div>
          
          {/* Floating Performance Indicator */}
          <div className="absolute -right-6 top-10 bg-card-bg border border-border-custom backdrop-blur-md rounded-xl p-3 shadow-xl transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-700 ease-in-out">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
              </div>
              <div>
                <div className="text-xs text-text-muted font-medium">Performance</div>
                <div className="text-sm font-bold text-text-main">99/100</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
