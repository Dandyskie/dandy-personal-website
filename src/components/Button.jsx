import React from 'react';

const Button = ({ children, variant = 'primary', className = '', ...props }) => {
  const baseClasses = "px-6 py-3 rounded-full font-medium transition-all duration-300 transform inline-flex items-center justify-center gap-2";
  
  const variants = {
    primary: "bg-primary text-white hover:bg-primary-hover shadow-lg hover:shadow-primary/25 hover:-translate-y-0.5",
    outline: "border border-white/20 text-white hover:bg-white/5 hover:border-white/40 shadow-sm hover:-translate-y-0.5"
  };

  return (
    <button 
      className={`${baseClasses} ${variants[variant]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
