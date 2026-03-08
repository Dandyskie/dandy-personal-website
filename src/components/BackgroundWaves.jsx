import React from 'react';

const BackgroundWaves = () => {
  return (
    <div className="absolute inset-0 z-0 pointer-events-none opacity-[0.15] mix-blend-screen overflow-hidden">
      <svg 
        className="absolute w-full h-full text-primary" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 1440 2000"
        preserveAspectRatio="xMinYMin slice"
      >
        <path 
          fill="none" 
          stroke="currentColor" 
          strokeWidth="1.5" 
          d="M0,400 C320,500 420,200 720,400 C1020,600 1120,300 1440,400"
          className="animate-[wave_15s_ease-in-out_infinite_alternate]"
        />
        <path 
          fill="none" 
          stroke="url(#grad1)" 
          strokeWidth="1" 
          d="M0,450 C320,350 420,650 720,450 C1020,250 1120,550 1440,450"
          className="animate-[wave_20s_ease-in-out_infinite_alternate_reverse]"
        />
        <path 
          fill="none" 
          stroke="url(#grad2)" 
          strokeWidth="2" 
          d="M0,500 C320,600 420,300 720,500 C1020,700 1120,400 1440,500"
          className="animate-[wave_25s_ease-in-out_infinite_alternate]"
        />
        
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#38bdf8', stopOpacity: 1 }} />
            <stop offset="100%" style={{ stopColor: '#3b82f6', stopOpacity: 1 }} />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#2563eb', stopOpacity: 0.8 }} />
            <stop offset="100%" style={{ stopColor: '#60a5fa', stopOpacity: 0.8 }} />
          </linearGradient>
        </defs>
      </svg>

      <style jsx="true">{`
        @keyframes wave {
          0% { transform: translateY(0) scaleY(1); }
          50% { transform: translateY(20px) scaleY(1.05); }
          100% { transform: translateY(-20px) scaleY(0.95); }
        }
      `}</style>
    </div>
  );
};

export default BackgroundWaves;
