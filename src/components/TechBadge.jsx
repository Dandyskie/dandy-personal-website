import React from 'react';

const TechBadge = ({ name }) => {
  return (
    <div className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-text-muted text-sm font-medium transition-all duration-300 hover:border-primary/50 hover:text-white hover:bg-primary/10 hover:-translate-y-0.5 inline-block cursor-default">
      {name}
    </div>
  );
};

export default TechBadge;
