import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import GlobalBackground from './components/GlobalBackground';
import Home from './pages/Home';
import ProjectsPage from './pages/ProjectsPage';
import ExperiencePage from './pages/ExperiencePage';
import ContactPage from './pages/ContactPage';

function App() {
  const [loading, setLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen bg-bg-app text-text-main font-archivo selection:bg-primary/30 transition-colors duration-300">
      <GlobalBackground />
      
      {/* Loading Screen */}
      <div 
        className={`fixed inset-0 bg-bg-app bg-grid-pattern z-[100] flex items-center justify-center transition-all duration-700 ease-in-out ${
          loading ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      >
        <div className="absolute inset-0 bg-radial-lighting opacity-40"></div>
        <div className="flex flex-col items-center gap-6 relative z-10">
          {/* Circular Tech Spinner */}
          <div className="relative w-20 h-20">
            <div className="absolute inset-0 border-4 border-border-custom rounded-full"></div>
            <div className="absolute inset-0 border-4 border-transparent border-t-primary border-r-primary rounded-full animate-[spin_1s_cubic-bezier(0.5,0.1,0.5,0.9)_infinite]"></div>
            <div className="absolute inset-2 border-4 border-transparent border-l-accent border-b-accent rounded-full animate-[spin_1.5s_cubic-bezier(0.5,0.1,0.5,0.9)_infinite_reverse]"></div>
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
            </div>
          </div>
          <div className="flex flex-col items-center gap-1">
            <p className="text-text-main font-space font-bold tracking-[0.2em] text-sm animate-pulse">
              INITIALIZING...
            </p>
            <p className="text-text-muted font-mono text-[10px] tracking-wider uppercase">
              Welcome, Visitor
            </p>
          </div>
        </div>
      </div>

      <Navbar />
      
      <main className="relative z-10 pt-28 pb-16 px-6 max-w-6xl mx-auto">
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/projects" element={<ProjectsPage />} />
            <Route path="/experience" element={<ExperiencePage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </AnimatePresence>
      </main>
    </div>
  );
}

export default App;
