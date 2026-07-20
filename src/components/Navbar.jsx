import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Sun, Moon, Search, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import CommandPalette from './CommandPalette';

const Navbar = () => {
  const location = useLocation();
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDark, setIsDark] = useState(true); // Cyber-dark defaults to true
  const [isPaletteOpen, setIsPaletteOpen] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showNavbar, setShowNavbar] = useState(true);

  // Sync HTML class on load
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  const toggleTheme = () => {
    setIsDark(prev => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
      return next;
    });
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Smart Hide/Reveal Navbar
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setShowNavbar(false); // Hide on scroll down
      } else {
        setShowNavbar(true); // Reveal on scroll up
      }
      
      setIsScrolled(currentScrollY > 20);
      setLastScrollY(currentScrollY);

      // Progress bar percentage calculation
      const totalScrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScrollHeight > 0) {
        setScrollPercent((currentScrollY / totalScrollHeight) * 100);
      } else {
        setScrollPercent(0);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  // Command palette hotkey listener
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsPaletteOpen(prev => !prev);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Projects', path: '/projects' },
    { name: 'Experience', path: '/experience' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      {/* Scroll Progress Bar */}
      <div 
        className="fixed top-0 left-0 h-1 bg-primary z-[60] transition-all duration-100" 
        style={{ width: `${scrollPercent}%` }}
      />
      
      <nav 
        className={`fixed left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
          showNavbar ? 'translate-y-0' : '-translate-y-full'
        } ${
          isScrolled 
            ? 'py-4 glassmorphism border-b border-border-custom shadow-md' 
            : 'py-6 bg-transparent'
        }`}
      >
        <div className="container max-w-7xl mx-auto px-6 flex justify-between items-center">
          <Link 
            to="/"
            onClick={() => setIsMobileMenuOpen(false)}
            className="text-2xl font-bold font-space text-text-main tracking-tight hover:scale-105 transition-transform"
          >
            Dandy<span className="text-primary">.dev</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                className={`font-space text-sm font-medium transition-all duration-300 relative group ${
                  location.pathname === link.path ? 'text-primary text-glow font-bold' : 'text-text-muted hover:text-text-main'
                }`}
              >
                {link.name}
                <span className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                  location.pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              </Link>
            ))}
            
            {/* Cmd+K trigger */}
            <button 
              onClick={() => setIsPaletteOpen(true)}
              className="flex items-center gap-1.5 px-3 py-1.5 text-xs text-text-muted hover:text-text-main rounded-md border border-border-custom glassmorphism transition-all cursor-pointer"
              title="Search / Actions"
            >
              <Search className="w-3.5 h-3.5" />
              <kbd className="font-mono text-[10px]">Ctrl+K</kbd>
            </button>

            {/* Theme toggler */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border-custom hover:bg-primary/10 transition-colors text-text-main cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-650" />}
            </button>
          </div>

          {/* Mobile toggles */}
          <div className="flex md:hidden items-center gap-3">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full border border-border-custom text-text-main cursor-pointer"
              aria-label="Toggle Theme"
            >
              {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-650" />}
            </button>
            <button
              onClick={() => setIsPaletteOpen(true)}
              className="p-2 rounded-full border border-border-custom text-text-main cursor-pointer"
              aria-label="Search Console"
            >
              <Search className="w-4 h-4" />
            </button>
            <button 
              className="p-2 rounded-full border border-border-custom text-text-main cursor-pointer"
              onClick={() => setIsMobileMenuOpen(true)}
              aria-label="Open menu"
            >
              <Menu className="w-4 h-4" />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Side Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            {/* Backdrop with strong blur */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsMobileMenuOpen(false)}
              className="fixed inset-0 bg-black/75 backdrop-blur-md z-50 md:hidden"
            />
            
            {/* Drawer Sliding from Right */}
            <motion.div 
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 right-0 bottom-0 w-72 bg-slate-950/95 border-l border-border-custom backdrop-blur-2xl z-50 p-6 flex flex-col justify-between shadow-2xl md:hidden"
            >
              <div className="flex flex-col gap-8">
                {/* Header inside drawer */}
                <div className="flex justify-between items-center border-b border-border-custom pb-4">
                  <span className="font-space text-lg font-bold text-text-main">Menu</span>
                  <button 
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="p-1.5 rounded-full border border-border-custom text-text-muted hover:text-text-main cursor-pointer"
                    aria-label="Close menu"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>

                {/* Nav Links */}
                <div className="flex flex-col gap-5">
                  {navLinks.map((link, idx) => (
                    <motion.div
                      key={link.name}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.05 }}
                    >
                      <Link 
                        to={link.path}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={`font-space text-lg font-semibold transition-all block py-2 ${
                          location.pathname === link.path 
                            ? 'text-primary text-glow font-bold translate-x-2' 
                            : 'text-text-main hover:text-primary hover:translate-x-2'
                        }`}
                      >
                        {link.name}
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>

              {/* Drawer Footer info */}
              <div className="border-t border-border-custom pt-4 flex flex-col gap-2">
                <span className="text-[10px] font-mono text-text-muted text-center">Dandy.dev // Portfolio 2026</span>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>

      {/* Command Palette Component */}
      <CommandPalette 
        isOpen={isPaletteOpen} 
        onClose={() => setIsPaletteOpen(false)} 
        toggleTheme={toggleTheme} 
        isDark={isDark} 
      />
    </>
  );
};

export default Navbar;
