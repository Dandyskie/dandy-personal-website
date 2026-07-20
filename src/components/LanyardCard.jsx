import React, { useRef } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';

const LanyardCard = () => {
  const cardRef = useRef(null);

  // Motion values for tracking mouse hover position relative to card center
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth springs to emulate natural physics inertia
  const springConfig = { damping: 25, stiffness: 180, mass: 1 };
  const rotateXSpring = useSpring(y, springConfig);
  const rotateYSpring = useSpring(x, springConfig);

  // Maps mouse movement offsets (-0.5 to 0.5) to degree angles of 3D tilt
  const rotateX = useTransform(rotateXSpring, [-0.5, 0.5], [12, -12]);
  const rotateY = useTransform(rotateYSpring, [-0.5, 0.5], [-12, 12]);

  // Maps mouse movement to slight horizontal translations to simulate sliding on the lanyard hook
  const translateX = useTransform(rotateYSpring, [-0.5, 0.5], [-8, 8]);
  const translateY = useTransform(rotateXSpring, [-0.5, 0.5], [-8, 8]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Mouse coordinates relative to card center, normalized between -0.5 and 0.5
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    // Reset to neutral hanging position
    x.set(0);
    y.set(0);
  };

  return (
    <div className="w-full flex justify-center items-center py-8 select-none">
      {/* 3D Perspective Context Area */}
      <div 
        className="relative flex flex-col items-center"
        style={{ perspective: 1200 }}
      >
        {/* Lanyard Cord / Strap */}
        <div className="absolute top-[-110px] w-1 bg-gradient-to-b from-primary/60 via-primary/30 to-slate-800/80 h-[100px] z-0 rounded-full" />
        
        {/* Lanyard Metal Clip */}
        <div className="absolute top-[-15px] w-5 h-6 bg-slate-700 dark:bg-slate-800 rounded-sm border border-border-custom z-10 flex flex-col items-center justify-end">
          <div className="w-2 h-2 rounded-full bg-slate-900 border border-slate-600 mb-0.5" />
        </div>

        {/* 3D Card Holder */}
        <motion.div
          ref={cardRef}
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          style={{
            rotateX: rotateX,
            rotateY: rotateY,
            x: translateX,
            y: translateY,
            transformStyle: "preserve-3d"
          }}
          className="relative w-[280px] h-[400px] bg-slate-950/90 rounded-2xl p-5 border border-border-custom shadow-2xl backdrop-blur-md cursor-grab active:cursor-grabbing z-20 flex flex-col justify-between items-center overflow-hidden"
        >
          {/* Subtle Cyber Grid Background pattern inside card */}
          <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
          <div className="absolute inset-0 bg-radial-lighting opacity-20 pointer-events-none" />

          {/* Badge Clip Hole */}
          <div className="w-12 h-2.5 bg-slate-900 rounded-full border border-slate-800 z-10 flex items-center justify-center mb-2" />

          {/* Card Header */}
          <div className="w-full flex items-center justify-between border-b border-border-custom pb-3 z-10">
            <span className="text-[10px] font-mono tracking-widest text-primary font-bold">DEV ACCESS</span>
            <div className="w-3 h-3 rounded-full bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.6)]" />
          </div>

          {/* Profile Content */}
          <div className="flex flex-col items-center gap-3 z-10 w-full mt-2" style={{ transform: "translateZ(30px)" }}>
            {/* Avatar Photo Frame */}
            <div className="w-24 h-24 rounded-xl border border-primary/40 overflow-hidden bg-slate-900 shadow-md">
              <img 
                src="/dandyskie-hero.png" 
                alt="Dandy Rama Wiguna" 
                className="w-full h-full object-cover object-center pointer-events-none"
              />
            </div>
            
            <div className="text-center">
              <h3 className="font-space text-lg font-bold text-text-main">Dandy R. Wiguna</h3>
              <p className="text-xs text-primary font-mono font-semibold mt-0.5">Frontend Developer</p>
            </div>
          </div>

          {/* Card Tech Stats/Details */}
          <div className="w-full bg-slate-900/60 border border-border-custom rounded-lg p-2.5 z-10 flex flex-col gap-1.5 font-mono text-[10px]" style={{ transform: "translateZ(15px)" }}>
            <div className="flex justify-between">
              <span className="text-text-muted">DEPT:</span>
              <span className="text-text-main font-semibold">PPLG SPECIALIST</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">HOST:</span>
              <span className="text-text-main font-semibold">Dandy.dev</span>
            </div>
            <div className="flex justify-between">
              <span className="text-text-muted">STATUS:</span>
              <span className="text-green-400 font-bold">ACTIVE // INTERN</span>
            </div>
          </div>

          {/* Barcode / Graphic Footer */}
          <div className="w-full flex items-center justify-between border-t border-border-custom pt-3 mt-1 z-10">
            {/* Simulated Barcode */}
            <div className="flex flex-col gap-1 w-2/3">
              <div className="flex gap-[2px] h-6 items-end bg-transparent">
                {Array.from({ length: 22 }).map((_, i) => (
                  <div 
                    key={i} 
                    className="bg-text-main" 
                    style={{ 
                      width: `${(i % 3 === 0 ? 3 : (i % 2 === 0 ? 1 : 2))}px`,
                      height: '100%',
                      opacity: 0.8
                    }} 
                  />
                ))}
              </div>
              <span className="text-[7px] font-mono text-text-muted text-center tracking-[0.2em]">02072026-DRW</span>
            </div>
            <div className="text-[18px] font-bold font-space text-primary/40 select-none">DRW</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default LanyardCard;
