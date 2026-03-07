import React from 'react';

const SocialIcon = ({ href, icon, label }) => {
  return (
    <a 
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className="p-3 rounded-full border border-card-border bg-card-bg text-text-muted transition-all duration-300 hover:border-primary hover:text-primary hover:bg-[rgba(59,130,246,0.1)] hover:-translate-y-1 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] flex items-center justify-center"
    >
      {icon}
    </a>
  );
};

export default SocialIcon;
