import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';
import GlobalBackground from './components/GlobalBackground';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1800);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-base text-text-main font-inter selection:bg-primary/30 selection:text-white">
      <GlobalBackground />
      
      {/* Loading Screen */}
      <div 
        className={`fixed inset-0 bg-base bg-grid-pattern z-[100] flex items-center justify-center transition-all duration-1000 ease-in-out ${
          loading ? 'opacity-100 backdrop-blur-md' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-radial-lighting opacity-50"></div>
        <div className="flex flex-col items-center gap-6 relative z-10">
          {/* Circular Tech Spinner */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-slate-800 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-primary border-r-primary rounded-full animate-[spin_1s_cubic-bezier(0.5,0.1,0.5,0.9)_infinite]"></div>
            <div className="absolute inset-2 border-4 border-transparent border-l-accent border-b-accent rounded-full animate-[spin_1.5s_cubic-bezier(0.5,0.1,0.5,0.9)_infinite_reverse]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-2 h-2 bg-white rounded-full animate-pulse shadow-[0_0_10px_rgba(255,255,255,0.8)]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-white font-poppins font-bold tracking-[0.2em] text-sm animate-pulse">
              WAITING....
            </p>
            <p className="text-slate-500 font-mono text-[10px] tracking-wider">
              WELCOME, HI VISITOR
            </p>
          </div>
        </div>
      </div>

      <Navbar />
      <main className="relative z-10">
        <Hero />
        <TechStack />
        <Projects />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
