import React, { useRef, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform, animate } from 'framer-motion';

const LanyardCard = () => {
  const cardRef = useRef(null);
  const [isFlipped, setIsFlipped] = useState(false);

  // Position motion values for dragging.
  const dragX = useMotionValue(0);
  const dragY = useMotionValue(0);

  // Hover offsets for pointer-based tilting
  const hoverX = useMotionValue(0);
  const hoverY = useMotionValue(0);

  // Smooth springs to emulate natural physics inertia
  const springConfig = { damping: 20, stiffness: 120, mass: 1.1 };
  const x = useSpring(dragX, springConfig);
  const y = useSpring(dragY, springConfig);
  const hoverSpringX = useSpring(hoverX, { damping: 18, stiffness: 150 });
  const hoverSpringY = useSpring(hoverY, { damping: 18, stiffness: 150 });

  // Spring specifically for flip rotation
  const flipY = useSpring(0, { damping: 20, stiffness: 110 });

  useEffect(() => {
    flipY.set(isFlipped ? 180 : 0);
  }, [isFlipped, flipY]);

  // Combined rotation calculations
  const rotateX = useTransform(
    [y, hoverSpringY],
    ([latestY, latestHoverY]) => {
      // Drag tilt (pitch) and hover tilt combined
      const dragTilt = (latestY / 120) * -22;
      const hoverTilt = latestHoverY * -12;
      return dragTilt + hoverTilt;
    }
  );

  const rotateY = useTransform(
    [x, hoverSpringX, flipY],
    ([latestX, latestHoverX, latestFlipY]) => {
      // Drag tilt (yaw) and hover tilt combined. Reversed when flipped.
      const dragTilt = (latestX / 120) * 22;
      const hoverTilt = latestHoverX * 12;
      const multiplier = latestFlipY > 90 ? -1 : 1;
      return latestFlipY + (dragTilt + hoverTilt) * multiplier;
    }
  );

  // Maps coordinates to translations to simulate sliding on the lanyard hook
  const translateX = useTransform(x, [-120, 120], [-10, 10]);
  const translateY = useTransform(y, [-120, 120], [-10, 10]);

  // Clip rotation swings slightly less than the card itself (hinge lag effect)
  const clipRotate = useTransform(x, [-150, 150], [-15, 15]);

  // Dynamic light glare/reflection coordinates
  const shineX = useTransform(hoverSpringX, [-0.5, 0.5], ["-30%", "130%"]);
  const shineY = useTransform(hoverSpringY, [-0.5, 0.5], ["-30%", "130%"]);

  // Opposite shadows translation to simulate card lifting from a constant light source
  const shadowX = useTransform(x, [-120, 120], [18, -18]);
  const shadowY = useTransform(y, [-120, 120], [-18, 18]);

  // Dynamic SVG Lanyard Loop String
  const stringPath = useTransform(
    [dragX, dragY],
    ([tx, ty]) => {
      // Left anchor (-15, -120), right anchor (15, -120).
      // Control points sway based on card movement to simulate string flex.
      const leftControlX = -20 + tx * 0.35;
      const leftControlY = -70 + ty * 0.25;
      const rightControlX = 20 + tx * 0.35;
      const rightControlY = -70 + ty * 0.25;
      
      // Ends at hook clip position (tx, -18 + ty)
      return `M -15 -120 Q ${leftControlX} ${leftControlY} ${tx} ${-18 + ty} Q ${rightControlX} ${rightControlY} 15 -120`;
    }
  );

  useEffect(() => {
    // Initial drop-swing pendulum entry animation on load
    dragX.set(70);
    dragY.set(-35);

    const controlsX = animate(dragX, 0, {
      type: "spring",
      stiffness: 75,
      damping: 10,
      mass: 1.3
    });

    const controlsY = animate(dragY, 0, {
      type: "spring",
      stiffness: 75,
      damping: 10,
      mass: 1.3
    });

    return () => {
      controlsX.stop();
      controlsY.stop();
    };
  }, [dragX, dragY]);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    
    // Normalized position relative to center [-0.5, 0.5]
    const mouseX = (e.clientX - rect.left) / width - 0.5;
    const mouseY = (e.clientY - rect.top) / height - 0.5;

    hoverX.set(mouseX);
    hoverY.set(mouseY);
  };

  const handleMouseLeave = () => {
    hoverX.set(0);
    hoverY.set(0);
  };

  return (
    <div className="w-full flex justify-center items-center py-8 select-none">
      {/* 3D Perspective Context Area */}
      <div 
        className="relative flex flex-col items-center"
        style={{ perspective: 1200 }}
      >
        {/* Dynamic Lanyard Loop String SVG */}
        <svg 
          className="absolute top-[-120px] left-1/2 -translate-x-1/2 w-[160px] h-[130px] pointer-events-none z-0 overflow-visible"
          viewBox="-80 -120 160 130"
        >
          <defs>
            <linearGradient id="lanyard-grad" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="var(--color-primary)" stopOpacity="0.85" />
              <stop offset="60%" stopColor="var(--color-primary)" stopOpacity="0.4" />
              <stop offset="100%" stopColor="var(--color-slate-400)" stopOpacity="0.15" />
            </linearGradient>
          </defs>
          <motion.path
            d={stringPath}
            stroke="url(#lanyard-grad)"
            strokeWidth="3.5"
            strokeLinecap="round"
            fill="none"
            className="drop-shadow-[0_3px_8px_rgba(59,130,246,0.18)]"
          />
        </svg>
        
        {/* Lanyard Metal Clip */}
        <motion.div 
          style={{
            x: dragX,
            y: dragY,
            rotate: clipRotate,
            transformStyle: "preserve-3d"
          }}
          className="absolute top-[-18px] w-5 h-6 bg-gradient-to-b from-slate-300 to-slate-450 dark:from-slate-700 dark:to-slate-800 rounded-sm border border-slate-350 dark:border-slate-650 shadow-md z-10 flex flex-col items-center justify-end"
        >
          <div className="w-2 h-2 rounded-full bg-slate-400 dark:bg-slate-900 border border-slate-300 dark:border-slate-750 mb-0.5" />
        </motion.div>

        {/* 3D Card Holder Outer Wrapper to separate Cast Shadow */}
        <div className="relative transform-preserve-3d">
          {/* Layered Floating Shadow */}
          <motion.div
            style={{
              x: shadowX,
              y: shadowY,
              rotateX: rotateX,
              rotateY: rotateY,
              filter: "blur(22px)",
              transformStyle: "preserve-3d"
            }}
            className="absolute inset-0 bg-slate-400/20 dark:bg-black/55 rounded-2xl -z-10 pointer-events-none"
          />

          {/* 3D Interactive Card Body Container (transparent parent, preserves 3D, no overflow-hidden) */}
          <motion.div
            ref={cardRef}
            drag
            dragConstraints={{ left: 0, right: 0, top: 0, bottom: 0 }}
            dragElastic={0.65}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{
              rotateX: rotateX,
              rotateY: rotateY,
              x: dragX,
              y: dragY,
              transformStyle: "preserve-3d"
            }}
            className="relative w-[280px] h-[400px] cursor-grab active:cursor-grabbing z-20"
          >
            {/* Front Card Face */}
            <div 
              className="absolute inset-0 p-5 flex flex-col justify-between items-center bg-gradient-to-b from-blue-50/98 to-slate-100/95 dark:from-slate-900/90 dark:to-slate-950/95 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-xl dark:shadow-2xl overflow-hidden"
              style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
            >
              {/* Subtle Cyber Grid Background pattern inside card */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="absolute inset-0 bg-radial-lighting opacity-15 pointer-events-none" />

              {/* Dynamic Glare Reflection Overlay */}
              <motion.div
                style={{
                  background: "radial-gradient(circle at center, rgba(255,255,255,0.06) 0%, transparent 65%)",
                  left: shineX,
                  top: shineY,
                  width: "140%",
                  height: "140%",
                  pointerEvents: "none"
                }}
                className="absolute -translate-x-1/2 -translate-y-1/2 mix-blend-overlay z-30"
              />

              {/* Top Section Group */}
              <div className="w-full flex flex-col items-center gap-2 z-10">
                {/* Badge Clip Hole */}
                <div className="w-12 h-2 bg-slate-200 dark:bg-slate-950 rounded-full border border-slate-350 dark:border-slate-850" />
                
                {/* Card Header */}
                <div className="w-full flex items-center justify-between border-b border-slate-300/80 dark:border-slate-800/80 pb-2.5">
                  <span className="text-[9px] font-mono tracking-[0.25em] text-primary font-bold">DEV ACCESS</span>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setIsFlipped(true);
                      }}
                      className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary text-[8px] font-mono hover:bg-primary/25 transition-all cursor-pointer"
                    >
                      FLIP
                    </button>
                  </div>
                </div>
              </div>

              {/* Profile Content */}
              <div className="flex flex-col items-center gap-3 z-10 w-full" style={{ transform: "translateZ(30px)" }}>
                {/* Avatar Photo Frame */}
                <div className="relative w-20 h-20 rounded-full border border-primary/30 p-[3px] bg-white dark:bg-slate-900/80 shadow-[0_0_12px_rgba(59,130,246,0.15)] flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 rounded-full border border-primary/10 animate-pulse pointer-events-none" />
                  <img 
                    src="/dandyskie-hero.png" 
                    alt="Dandy Rama Wiguna" 
                    className="w-full h-full object-cover object-center rounded-full pointer-events-none"
                  />
                </div>
                
                <div className="text-center">
                  <h3 className="font-space text-base font-extrabold text-text-main tracking-tight uppercase">Dandy Rama Wiguna</h3>
                  <p className="text-[9.5px] text-text-muted font-mono tracking-wider uppercase mt-0.5">Junior Frontend Developer</p>
                </div>
              </div>

              {/* Card Tech Stats/Details */}
              <div 
                className="w-full bg-white/70 dark:bg-slate-950/40 border border-slate-300/60 dark:border-slate-850/80 rounded-xl p-3 z-10 flex flex-col gap-2 font-mono text-[9px] text-text-muted" 
                style={{ transform: "translateZ(15px)" }}
              >
                <div className="flex justify-between border-b border-slate-300/50 dark:border-slate-900/60 pb-1.5">
                  <span>DEPT:</span>
                  <span className="text-text-main font-semibold">FRONTEND DEV</span>
                </div>
                <div className="flex justify-between border-b border-slate-300/50 dark:border-slate-900/60 pb-1.5">
                  <span>ID:</span>
                  <span className="text-text-main font-semibold">DRW-2026-SYS</span>
                </div>
                <div className="flex justify-between">
                  <span>ACCESS:</span>
                  <span className="text-emerald-500 dark:text-emerald-400 font-bold">GRANTED // LVL 1</span>
                </div>
              </div>

              {/* Barcode / Graphic Footer */}
              <div className="w-full flex items-center justify-between border-t border-slate-300 dark:border-slate-850 pt-2.5 z-10">
                {/* Simulated Barcode */}
                <div className="flex flex-col gap-1 w-2/3">
                  <div className="flex gap-[2.5px] h-5 items-end bg-transparent opacity-65">
                    {Array.from({ length: 20 }).map((_, i) => (
                      <div 
                        key={i} 
                        className="bg-text-main" 
                        style={{ 
                          width: `${(i % 3 === 0 ? 3 : (i % 2 === 0 ? 1 : 2))}px`,
                          height: '100%',
                        }} 
                      />
                    ))}
                  </div>
                  <span className="text-[6.5px] font-mono text-text-muted tracking-[0.2em]">02072026-DRW-SYS</span>
                </div>
                <div className="text-[11px] font-mono font-bold text-primary/45 tracking-widest uppercase">DRW</div>
              </div>
            </div>

            {/* Back Card Face */}
            <div 
              className="absolute inset-0 p-5 flex flex-col justify-between items-center bg-gradient-to-b from-blue-50/98 to-slate-100/95 dark:from-slate-900/95 dark:to-slate-950/98 rounded-2xl border border-slate-300 dark:border-slate-800 shadow-xl dark:shadow-2xl overflow-hidden"
              style={{ 
                backfaceVisibility: 'hidden', 
                WebkitBackfaceVisibility: 'hidden', 
                transform: 'rotateY(180deg)' 
              }}
            >
              {/* Subtle Cyber Grid Background pattern inside card */}
              <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
              <div className="absolute inset-0 bg-radial-lighting opacity-15 pointer-events-none" />

              {/* Top Section Group */}
              <div className="w-full flex flex-col items-center gap-2 z-10">
                {/* Badge Clip Hole */}
                <div className="w-12 h-2 bg-slate-200 dark:bg-slate-950 rounded-full border border-slate-300 dark:border-slate-850" />
                
                {/* Card Header */}
                <div className="w-full flex items-center justify-between border-b border-slate-300/80 dark:border-slate-800/80 pb-2.5">
                  <span className="text-[9px] font-mono tracking-[0.25em] text-red-500 dark:text-red-400 font-bold">SECURE SHELL</span>
                  <button 
                    onClick={(e) => {
                      e.stopPropagation();
                      setIsFlipped(false);
                    }}
                    className="px-2 py-0.5 rounded bg-primary/10 border border-primary/20 text-primary text-[8px] font-mono hover:bg-primary/25 transition-all cursor-pointer"
                  >
                    FLIP
                  </button>
                </div>
              </div>

              {/* Gold Chip & Logo Info */}
              <div className="flex flex-col items-center gap-3 z-10 w-full" style={{ transform: "translateZ(30px)" }}>
                {/* Gold Contact Chip */}
                <div className="w-10 h-8 rounded bg-gradient-to-r from-amber-500/90 via-yellow-400/90 to-amber-600/90 border border-amber-400/30 p-1 flex flex-col justify-between gap-1 shadow-inner opacity-80">
                  <div className="flex justify-between h-2">
                    <div className="w-2.5 h-full bg-amber-950/20 rounded-sm" />
                    <div className="w-2.5 h-full bg-amber-950/20 rounded-sm" />
                  </div>
                  <div className="w-full h-1 bg-amber-950/20 rounded-sm" />
                  <div className="flex justify-between h-2">
                    <div className="w-2.5 h-full bg-amber-950/20 rounded-sm" />
                    <div className="w-2.5 h-full bg-amber-950/20 rounded-sm" />
                  </div>
                </div>

                <div className="text-center mt-1">
                  <h3 className="font-space text-base font-extrabold text-text-main tracking-tight uppercase">Dandy Rama Wiguna</h3>
                  <p className="text-[9px] text-primary font-mono tracking-widest uppercase mt-0.5">EST. 2026 // WEB DEVELOPER</p>
                </div>
              </div>

              {/* Back Card Tech Details */}
              <div 
                className="w-full bg-white/70 dark:bg-slate-950/40 border border-slate-300/60 dark:border-slate-850/80 rounded-xl p-3 z-10 flex flex-col gap-2 font-mono text-[9px] text-text-muted" 
                style={{ transform: "translateZ(15px)" }}
              >
                <div className="flex justify-between border-b border-slate-300/50 dark:border-slate-900/60 pb-1.5">
                  <span>ACCESS CODE:</span>
                  <span className="text-primary font-semibold">0x7F9A9E</span>
                </div>
                <div className="flex justify-between border-b border-slate-300/50 dark:border-slate-900/60 pb-1.5">
                  <span>STATION:</span>
                  <span className="text-text-main font-semibold">WORKSPACE_01</span>
                </div>
                <div className="flex justify-between">
                  <span>IP ADDR:</span>
                  <span className="text-text-main font-semibold">192.168.1.100</span>
                </div>
              </div>

              {/* Holographic scanner logo */}
              <div className="w-full flex items-center justify-between border-t border-slate-300 dark:border-slate-850 pt-2.5 z-10">
                <span className="text-[7.5px] font-mono text-text-muted">SECURE SHELL v2.04</span>
                <span className="text-[9px] font-mono text-emerald-500 dark:text-emerald-400 font-bold tracking-wider">ONLINE</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default LanyardCard;
