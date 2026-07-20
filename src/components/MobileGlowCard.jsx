import React from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

const MobileGlowCard = () => {
  return (
    <div className="w-full flex justify-center py-6">
      {/* Outer wrapper that acts as the perspective context */}
      <motion.div 
        className="relative w-[280px] h-[340px] group"
        animate={{ y: [0, -6, 0] }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        whileTap={{ scale: 0.97, rotate: -0.5 }}
      >
        
        {/* Glow behind the card */}
        <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-2xl animate-pulse" />

        {/* Rotating Border Frame: Conic Gradient Wrapper */}
        <div className="absolute inset-0 rounded-2xl p-[3px] overflow-hidden flex items-center justify-center bg-slate-900 border border-border-custom shadow-xl">
          {/* Neon Spin Effect layer */}
          <div className="absolute w-[180%] h-[180%] bg-[conic-gradient(from_0deg,transparent_20%,var(--color-primary)_40%,var(--color-accent)_60%,transparent_80%)] animate-[spin_4s_linear_infinite]" />
          
          {/* Card Inner Content Container */}
          <div className="relative w-full h-full bg-slate-950 rounded-[13px] p-4 flex flex-col justify-between items-center overflow-hidden z-10">
            <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
            
            {/* Header info */}
            <div className="w-full flex justify-between items-center border-b border-border-custom/50 pb-2 z-10">
              <span className="text-[9px] font-mono text-primary font-bold tracking-widest uppercase">PORTFOLIO.V2</span>
              <span className="text-[9px] font-mono text-text-muted">DRW-2026</span>
            </div>

            {/* Profile Avatar */}
            <motion.div 
              className="relative w-36 h-36 rounded-full border border-primary/30 overflow-hidden bg-slate-900 shadow-lg z-10 my-2"
              animate={{ scale: [1, 1.03, 1] }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img 
                src="/dandyskie-hero.png" 
                alt="Dandy Rama Wiguna" 
                className="w-full h-full object-cover object-center"
              />
            </motion.div>

            {/* Title / Role */}
            <div className="text-center z-10">
              <h3 className="font-space text-base font-bold text-text-main">Dandy Rama Wiguna</h3>
              <p className="text-[11px] text-text-muted font-mono font-medium mt-0.5">Junior Frontend Developer</p>
            </div>

            {/* Footer tags */}
            <div className="w-full flex justify-center gap-1.5 z-10 border-t border-border-custom/30 pt-2 font-mono text-[8px] text-primary">
              <span>REACT</span>
              <span>•</span>
              <span>TAILWIND</span>
              <span>•</span>
              <span>LARAVEL</span>
            </div>
          </div>
        </div>

        {/* Social Media Overlays directly positioned on the card's frame/border */}
        {/* GitHub Icon Badge */}
        <motion.a 
          href="https://github.com/Dandyskie" 
          target="_blank" 
          rel="noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, -2, 0] }}
          transition={{
            scale: { type: "spring", stiffness: 200, damping: 10, delay: 0.3 },
            y: { duration: 3, repeat: Infinity, ease: "easeInOut", delay: 0.2 }
          }}
          whileTap={{ scale: 0.85 }}
          className="absolute -top-3 -left-3 w-9 h-9 rounded-full bg-slate-900 border border-primary/50 text-text-main flex items-center justify-center shadow-lg z-20 cursor-pointer"
          aria-label="GitHub Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
        </motion.a>

        {/* LinkedIn Icon Badge */}
        <motion.a 
          href="https://www.linkedin.com/in/dandy-rama-wiguna-3575ab370/" 
          target="_blank" 
          rel="noreferrer"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, 2, 0] }}
          transition={{
            scale: { type: "spring", stiffness: 200, damping: 10, delay: 0.4 },
            y: { duration: 3.5, repeat: Infinity, ease: "easeInOut", delay: 0.4 }
          }}
          whileTap={{ scale: 0.85 }}
          className="absolute -bottom-3 -right-3 w-9 h-9 rounded-full bg-slate-900 border border-primary/50 text-text-main flex items-center justify-center shadow-lg z-20 cursor-pointer"
          aria-label="LinkedIn Profile"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
        </motion.a>

        {/* Email Icon Badge */}
        <motion.a 
          href="mailto:dandyskie@gmail.com" 
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1, y: [0, 2, 0] }}
          transition={{
            scale: { type: "spring", stiffness: 200, damping: 10, delay: 0.5 },
            y: { duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 0.6 }
          }}
          whileTap={{ scale: 0.85 }}
          className="absolute -bottom-3 -left-3 w-9 h-9 rounded-full bg-slate-900 border border-primary/50 text-text-main flex items-center justify-center shadow-lg z-20 cursor-pointer"
          aria-label="Send Email"
        >
          <Mail className="w-4 h-4 text-primary" />
        </motion.a>
      </motion.div>
    </div>
  );
};

export default MobileGlowCard;
