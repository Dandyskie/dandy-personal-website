import React from 'react';

const GithubGrid = () => {
  // 36 weeks * 7 days grid commits approximation to fit screen perfectly
  const weeks = 36;
  const days = 7;
  
  // Generate seeded random contribution levels (0 to 4) based on position
  const getLevel = (x, y) => {
    const seed = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
    const rand = seed - Math.floor(seed);
    if (rand < 0.45) return 0;
    if (rand < 0.75) return 1;
    if (rand < 0.90) return 2;
    if (rand < 0.97) return 3;
    return 4;
  };

  const levels = [
    'bg-slate-200 dark:bg-slate-800',
    'bg-green-100 dark:bg-green-900/30',
    'bg-green-300 dark:bg-green-700/50',
    'bg-green-500 dark:bg-green-500/85',
    'bg-green-600 dark:bg-green-400',
  ];

  return (
    <div className="glassmorphism p-6 rounded-xl flex flex-col gap-4">
      <div className="flex items-center justify-between border-b border-border-custom pb-3">
        <div>
          <h3 className="font-space text-lg font-bold text-text-main">GitHub Activity</h3>
          <p className="text-xs text-text-muted">Proving active tech development commit contributions</p>
        </div>
        <span className="text-xs text-green-500 font-semibold font-mono">1,824 Commits YTD</span>
      </div>
      
      <div className="flex flex-col gap-1 overflow-x-auto no-scrollbar py-1">
        <div className="flex gap-1 min-w-[420px]">
          {Array.from({ length: weeks }).map((_, wIdx) => (
            <div key={wIdx} className="flex flex-col gap-1">
              {Array.from({ length: days }).map((_, dIdx) => {
                const level = getLevel(wIdx, dIdx);
                return (
                  <div
                    key={dIdx}
                    className={`w-3 h-3 rounded-[2px] transition-all hover:scale-125 cursor-help ${levels[level]}`}
                    title={`${level > 0 ? level * 3 + ' contributions' : 'No contributions'}`}
                  />
                );
              })}
            </div>
          ))}
        </div>
        <div className="flex items-center justify-end gap-1.5 text-[10px] text-text-muted mt-3">
          <span>Less</span>
          <div className="w-3 h-3 rounded-[2px] bg-slate-200 dark:bg-slate-800" />
          <div className="w-3 h-3 rounded-[2px] bg-green-100 dark:bg-green-900/30" />
          <div className="w-3 h-3 rounded-[2px] bg-green-300 dark:bg-green-700/50" />
          <div className="w-3 h-3 rounded-[2px] bg-green-500 dark:bg-green-500/85" />
          <div className="w-3 h-3 rounded-[2px] bg-green-600 dark:bg-green-400" />
          <span>More</span>
        </div>
      </div>
    </div>
  );
};

export default GithubGrid;
