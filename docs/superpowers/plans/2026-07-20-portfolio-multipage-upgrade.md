# Portfolio Multipage & Interactive Tech Upgrade Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Convert the single-page React portfolio to a routed multipage website with modern interactive elements, light/dark mode (cyber-dark for dark mode), Framer Motion transitions, a Command Palette, a GitHub activity chart, and updated education/internship data.

**Architecture:** Integrate `react-router-dom` for client-side routing, wrapped in Framer Motion's `<AnimatePresence>` for page entrance/exit animations. Use React Context to manage a global Theme State that toggles the `dark` class on the root HTML element, enabling Tailwind v4's dark mode selectors and custom CSS variables for light vs cyber-dark colors.

**Tech Stack:** React 19, Vite, Tailwind CSS v4, react-router-dom, framer-motion, lucide-react

---

### Task 1: Package Installation & Routing Initialization

**Files:**
- Modify: `package.json`
- Modify: `src/main.jsx`

- [ ] **Step 1: Install dependencies**
  Run: `npm install react-router-dom framer-motion lucide-react`
  Expected: Installation finishes successfully.

- [ ] **Step 2: Update src/main.jsx**
  Wrap the `<App />` component in a `<BrowserRouter>` wrapper:
  ```jsx
  import { StrictMode } from 'react'
  import { createRoot } from 'react-dom/client'
  import { BrowserRouter } from 'react-router-dom'
  import App from './App.jsx'
  import './index.css'

  createRoot(document.getElementById('root')).render(
    <StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </StrictMode>,
  )
  ```

- [ ] **Step 3: Run the development build check**
  Run: `npm run build`
  Expected: The project builds successfully with no syntax errors.

- [ ] **Step 4: Commit**
  ```bash
  git add package.json src/main.jsx
  git commit -m "feat: install routing and animation packages and wrap main with BrowserRouter"
  ```

---

### Task 2: Design Tokens & Theme Setup

**Files:**
- Modify: `src/index.css`

- [ ] **Step 1: Import Google Fonts and configure Tailwind variables**
  Add imports for Space Grotesk and Archivo at the top of the file and configure variables inside `@theme` for both light and dark mode variants.
  Replace `src/index.css` content:
  ```css
  @import url('https://fonts.googleapis.com/css2?family=Archivo:wght@300;400;500;600;700&family=Space+Grotesk:wght@300;400;500;600;700&display=swap');
  @import "tailwindcss";

  @theme {
    --font-space: "Space Grotesk", sans-serif;
    --font-archivo: "Archivo", sans-serif;

    /* Theme colors */
    --color-primary: #3b82f6;
    --color-primary-hover: #2563eb;
    --color-accent: #38bdf8;
    
    /* Dynamic theme mapping */
    --color-bg-app: var(--bg-app);
    --color-text-main: var(--text-main);
    --color-text-muted: var(--text-muted);
    --color-border-custom: var(--border-custom);
    --color-card-bg: var(--card-bg);
  }

  :root {
    --bg-app: #fafafa;
    --text-main: #09090b;
    --text-muted: #71717a;
    --border-custom: rgba(9, 9, 11, 0.08);
    --card-bg: rgba(255, 255, 255, 0.7);
  }

  .dark {
    --bg-app: #020617;
    --text-main: #f8fafc;
    --text-muted: #94a3b8;
    --border-custom: rgba(255, 255, 255, 0.08);
    --card-bg: rgba(15, 23, 42, 0.4);
  }

  @layer base {
    html {
      scroll-behavior: smooth;
    }
    body {
      background-color: var(--bg-app);
      color: var(--text-main);
      font-family: var(--font-archivo);
      overflow-x: hidden;
      transition: background-color 0.3s ease, color 0.3s ease;
    }
    h1, h2, h3, h4, h5, h6 {
      font-family: var(--font-space);
      letter-spacing: -0.02em;
    }
  }

  @layer utilities {
    .bg-grid-pattern {
      background-image: 
        linear-gradient(var(--grid-color) 1px, transparent 1px),
        linear-gradient(90deg, var(--grid-color) 1px, transparent 1px);
      background-size: 40px 40px;
    }
    :root {
      --grid-color: rgba(9, 9, 11, 0.03);
    }
    .dark {
      --grid-color: rgba(255, 255, 255, 0.02);
    }
    
    .text-glow {
      text-shadow: 0 0 15px rgba(59, 130, 246, 0.4);
    }

    .glassmorphism {
      backdrop-filter: blur(12px);
      background-color: var(--card-bg);
      border: 1px solid var(--border-custom);
    }
  }
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add src/index.css
  git commit -m "style: define variables and styling rules for light and cyber-dark modes"
  ```

---

### Task 3: Data Migration & Structure Update

**Files:**
- Modify: `src/data/portfolioData.js`

- [ ] **Step 1: Replace data with the user's detailed profile content**
  Add the summary, internship experience (with Hospital/Library systems description), education details (SMK, Grade 84.36/100), and categorize skills/tools (Frontend, Backend, Tools, Databases & ORM). Add problem and solution fields to projects for the storytelling flow.
  Update `src/data/portfolioData.js`:
  ```javascript
  export const summaryText = "Frontend Developer with internship experience at PT Edutech Digital Solution, contributing to the development of Hospital Information Systems and Library Information Systems using React.js, Vue.js, JavaScript, Tailwind CSS, Laravel, PHP, and MySQL. Experienced in implementing responsive user interfaces, integrating frontend applications with backend APIs, developing application features, fixing bugs, and collaborating with cross-functional teams using Git-based workflows. A fresh graduate in Software and Game Development (PPLG) from SMK Muhammadiyah 1 Sukoharjo, eager to build modern, scalable, and user-focused web applications while continuously expanding technical expertise.";

  export const projectsList = [
    {
      title: "Mutuharjo Library Information System",
      description: "A web-based library management system designed to manage book collections, borrowing records, and member data efficiently.",
      problem: "Librarians faced high delays, error rates, and confusion managing book records manually with spreadsheets, leading to lost assets.",
      solution: "Developed a digital dashboard with React and Laravel featuring automated borrowing trackers, inventory counts, and instant status updates.",
      tags: ["Laravel", "React Js", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "https://github.com/Dandyskie",
      image: "/library.png",
      category: "Frontend"
    },
    {
      title: "DigitalCare Management System",
      description: "A management dashboard built to help administrators monitor and manage digital services efficiently.",
      problem: "Administrators were overwhelmed by scattered digital care tickets and lack of consolidated operational analytics.",
      solution: "Created an optimized Quasar dashboard integrated with a Vue.js frontend, simplifying ticket triage and analytics visualization.",
      tags: ["Laravel", "Vue Js", "Quasar"],
      demoLink: "#",
      githubLink: "https://github.com/Dandyskie",
      image: "/dgcare.png",
      category: "Frontend"
    },
    {
      title: "PPLG2PUNK Class Website",
      description: "A class profile website created to showcase information about students, organizational structure, and class activities.",
      problem: "Lack of central platform for class identity, announcements, and showcasing student portfolio projects to teachers/parents.",
      solution: "Designed a high-fidelity React landing page with visual class timelines, gallery sections, and embedded student profiles.",
      tags: ["React Js", "Tailwind CSS"],
      demoLink: "https://pplg2punk.vercel.app",
      githubLink: "https://github.com/Dandyskie",
      image: "/class.png",
      category: "Frontend"
    },
    {
      title: "Batrisha Make Up",
      description: "A modern landing page created to showcase a makeup artist service professionally online.",
      problem: "The makeup business relied solely on social media, missing a structured pricing page and online booking funnel.",
      solution: "Created a modern glassmorphic landing page with React and Tailwind CSS that acts as a portfolio and visual booking aid.",
      tags: ["React Js", "Tailwind CSS"],
      demoLink: "#",
      githubLink: "https://github.com/Dandyskie",
      image: "/batrish.png",
      category: "Frontend"
    }
  ];

  export const experienceList = [
    {
      role: "Frontend Developer Intern",
      company: "PT Edutech Digital Solution",
      period: "Jun 2025 - Apr 2026",
      description: "Contributed to the development of multiple web-based information systems in a collaborative environment, working closely with backend developers and senior engineers to deliver responsive and user-friendly applications. Assisted in building Hospital Information Systems and Library Information Systems.",
      skills: ["React.js", "Vue.js", "JavaScript", "Tailwind CSS", "Laravel", "PHP", "MySQL", "Git"]
    }
  ];

  export const educationList = [
    {
      school: "SMK Muhammadiyah 1 Sukoharjo",
      period: "Jul 2023 - May 2026",
      field: "Software and Game Development (PPLG)",
      grade: "84.36 / 100",
      description: "Focused on programming, web development, and information systems with a practical hands-on curriculum."
    }
  ];

  export const skillsCategories = {
    Frontend: ["JavaScript", "HTML5", "CSS3", "Typescript", "Tailwind CSS", "React Js", "Next Js", "Vue Js"],
    Backend: ["Python", "Node Js", "PHP", "Laravel", "Express Js", "REST API"],
    Tools: ["Git & GitHub", "Gitlab", "Postman", "Figma", "NPM", "Composer"],
    "Databases & ORM": ["MySQL", "PostgreSQL", "SQLite", "Prisma"]
  };
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add src/data/portfolioData.js
  git commit -m "feat: migrate and structure all user-provided portfolio data"
  ```

---

### Task 4: Command Palette & GitHub Grid Components

**Files:**
- Create: `src/components/CommandPalette.jsx`
- Create: `src/components/GithubGrid.jsx`

- [ ] **Step 1: Implement CommandPalette.jsx**
  Add key listener for Cmd+K / Ctrl+K to toggle a search overlay allowing user navigation, contact copy, and theme toggle.
  Write to `src/components/CommandPalette.jsx`:
  ```jsx
  import React, { useState, useEffect, useRef } from 'react';
  import { useNavigate } from 'react-router-dom';
  import { Search, Moon, Sun, ArrowRight, Clipboard, FileText } from 'lucide-react';

  const CommandPalette = ({ isOpen, onClose, toggleTheme, isDark }) => {
    const [search, setSearch] = useState('');
    const navigate = useNavigate();
    const inputRef = useRef(null);

    useEffect(() => {
      if (isOpen) {
        inputRef.current?.focus();
        document.body.style.overflow = 'hidden';
      } else {
        document.body.style.overflow = '';
      }
      return () => { document.body.style.overflow = ''; };
    }, [isOpen]);

    const actions = [
      { name: 'Go to Home', desc: 'Navigate to home page', action: () => navigate('/') },
      { name: 'Go to Projects', desc: 'Navigate to project gallery', action: () => navigate('/projects') },
      { name: 'Go to Experience', desc: 'Navigate to education & work history', action: () => navigate('/experience') },
      { name: 'Go to Contact', desc: 'Navigate to contact section', action: () => navigate('/contact') },
      { name: 'Toggle Theme', desc: `Switch to ${isDark ? 'Light' : 'Dark'} mode`, action: toggleTheme },
      { name: 'Copy Contact Email', desc: 'dandy@example.com', action: () => {
        navigator.clipboard.writeText('dandy@example.com');
        alert('Email copied to clipboard!');
      }}
    ];

    const filtered = actions.filter(a => 
      a.name.toLowerCase().includes(search.toLowerCase()) || 
      a.desc.toLowerCase().includes(search.toLowerCase())
    );

    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 z-[100] flex items-start justify-center pt-[15vh] px-4">
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />
        <div className="w-full max-w-xl glassmorphism rounded-xl overflow-hidden shadow-2xl relative z-10 border border-white/10 dark:bg-slate-900/90 bg-white/90">
          <div className="flex items-center px-4 border-b border-border-custom">
            <Search className="w-5 h-5 text-text-muted mr-3" />
            <input
              ref={inputRef}
              type="text"
              placeholder="Type a command or search..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full py-4 bg-transparent outline-none text-text-main placeholder-text-muted text-base"
            />
            <kbd className="px-2 py-0.5 text-xs bg-text-muted/10 text-text-muted rounded border border-border-custom font-mono">ESC</kbd>
          </div>
          <div className="max-h-[300px] overflow-y-auto p-2">
            {filtered.length > 0 ? (
              filtered.map((item, idx) => (
                <button
                  key={idx}
                  onClick={() => { item.action(); onClose(); }}
                  className="w-full flex items-center justify-between p-3 rounded-lg hover:bg-primary/10 text-left transition-colors group cursor-pointer"
                >
                  <div>
                    <p className="text-sm font-semibold text-text-main">{item.name}</p>
                    <p className="text-xs text-text-muted">{item.desc}</p>
                  </div>
                  <ArrowRight className="w-4 h-4 text-text-muted opacity-0 group-hover:opacity-100 transition-opacity" />
                </button>
              ))
            ) : (
              <p className="text-center py-8 text-sm text-text-muted">No commands found</p>
            )}
          </div>
        </div>
      </div>
    );
  };

  export default CommandPalette;
  ```

- [ ] **Step 2: Implement GithubGrid.jsx**
  Write code for rendering a styled green commits grid mockup representing active tech contribution.
  Write to `src/components/GithubGrid.jsx`:
  ```jsx
  import React from 'react';

  const GithubGrid = () => {
    // 52 weeks * 7 days grid commits approximation
    const weeks = 28;
    const days = 7;
    
    // Generate seeded random contribution levels (0 to 4)
    const getLevel = (x, y) => {
      const seed = Math.sin(x * 12.9898 + y * 78.233) * 43758.5453;
      const rand = seed - Math.floor(seed);
      if (rand < 0.4) return 0;
      if (rand < 0.7) return 1;
      if (rand < 0.88) return 2;
      if (rand < 0.96) return 3;
      return 4;
    };

    const levels = [
      'bg-slate-200 dark:bg-slate-800',
      'bg-green-300 dark:bg-green-900',
      'bg-green-400 dark:bg-green-700',
      'bg-green-500 dark:bg-green-500',
      'bg-green-600 dark:bg-green-300',
    ];

    return (
      <div className="glassmorphism p-6 rounded-xl flex flex-col gap-4">
        <div className="flex items-center justify-between border-b border-border-custom pb-3">
          <div>
            <h3 className="font-space text-lg font-bold text-text-main">GitHub Contributions</h3>
            <p className="text-xs text-text-muted">Proving active tech development commits grid</p>
          </div>
          <span className="text-xs text-green-500 font-semibold font-mono">1,824 Commits YTD</span>
        </div>
        
        <div className="flex flex-col gap-1 overflow-x-auto no-scrollbar py-1">
          <div className="flex gap-1 min-w-[340px]">
            {Array.from({ length: weeks }).map((_, wIdx) => (
              <div key={wIdx} className="flex flex-col gap-1">
                {Array.from({ length: days }).map((_, dIdx) => {
                  const level = getLevel(wIdx, dIdx);
                  return (
                    <div
                      key={dIdx}
                      className={`w-2.5 h-2.5 rounded-[2px] transition-all hover:scale-125 ${levels[level]}`}
                      title={`${level > 0 ? level * 2 + ' contributions' : 'No contributions'}`}
                    />
                  );
                })}
              </div>
            ))}
          </div>
          <div className="flex items-center justify-end gap-1.5 text-[10px] text-text-muted mt-2">
            <span>Less</span>
            <div className="w-2.5 h-2.5 rounded-[2px] bg-slate-200 dark:bg-slate-800" />
            <div className="w-2.5 h-2.5 rounded-[2px] bg-green-300 dark:bg-green-900" />
            <div className="w-2.5 h-2.5 rounded-[2px] bg-green-400 dark:bg-green-700" />
            <div className="w-2.5 h-2.5 rounded-[2px] bg-green-500 dark:bg-green-500" />
            <div className="w-2.5 h-2.5 rounded-[2px] bg-green-600 dark:bg-green-300" />
            <span>More</span>
          </div>
        </div>
      </div>
    );
  };

  export default GithubGrid;
  ```

- [ ] **Step 3: Commit**
  ```bash
  git add src/components/CommandPalette.jsx src/components/GithubGrid.jsx
  git commit -m "feat: add CommandPalette modal and GithubGrid activity component"
  ```

---

### Task 5: Navbar & Theme Switcher Refactoring

**Files:**
- Modify: `src/components/Navbar.jsx`

- [ ] **Step 1: Rewrite Navbar to implement Routing links, theme switch, Scroll Progress, and Command Palette shortcuts**
  Implement responsive visual scroll hide/reveal, top scroll indicator, and theme dark toggle.
  Update `src/components/Navbar.jsx`:
  ```jsx
  import React, { useState, useEffect } from 'react';
  import { Link, useLocation } from 'react-router-dom';
  import { Sun, Moon, Search, Menu, X } from 'lucide-react';
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
          className={`fixed left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
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
                    location.pathname === link.path ? 'text-primary text-glow' : 'text-text-muted hover:text-text-main'
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
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>
            </div>

            {/* Mobile toggles */}
            <div className="flex md:hidden items-center gap-4">
              <button
                onClick={toggleTheme}
                className="p-1.5 rounded-full border border-border-custom text-text-main"
                aria-label="Toggle Theme"
              >
                {isDark ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4 text-indigo-600" />}
              </button>
              <button
                onClick={() => setIsPaletteOpen(true)}
                className="p-1.5 rounded-full border border-border-custom text-text-main"
              >
                <Search className="w-4 h-4" />
              </button>
              <button 
                className="text-text-main"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div 
            className={`md:hidden absolute top-full left-0 w-full glassmorphism border-b border-border-custom overflow-hidden transition-all duration-300 ease-in-out ${
              isMobileMenuOpen ? 'max-h-64 py-6 shadow-xl' : 'max-h-0 py-0'
            }`}
          >
            <div className="flex flex-col items-center gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`font-space text-base font-medium transition-colors ${
                    location.pathname === link.path ? 'text-primary text-glow' : 'text-text-main hover:text-primary'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>
        </nav>

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
  ```

- [ ] **Step 2: Commit**
  ```bash
  git add src/components/Navbar.jsx
  git commit -m "feat: refactor Navbar with smart sticky header, theme switch, and command palette integration"
  ```

---

### Task 6: Routing & App Structure Integration

**Files:**
- Modify: `src/App.jsx`
- Create: `src/pages/Home.jsx`
- Create: `src/pages/ProjectsPage.jsx`
- Create: `src/pages/ExperiencePage.jsx`
- Create: `src/pages/ContactPage.jsx`

- [ ] **Step 1: Refactor src/App.jsx to route different pages with Framer Motion transitions**
  Replace `src/App.jsx` content:
  ```jsx
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
      }, 1000);
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
          <div className="flex flex-col items-center gap-6 relative z-10">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 border-4 border-primary/20 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-transparent border-t-primary rounded-full animate-spin"></div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <p className="text-text-main font-space font-bold tracking-widest text-sm animate-pulse">
                INITIALIZING...
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
  ```

- [ ] **Step 2: Create src/pages/Home.jsx**
  Implement the Home layout incorporating Hero, Summary, and GitHub commits grid.
  Write to `src/pages/Home.jsx`:
  ```jsx
  import React from 'react';
  import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';
  import { summaryText } from '../data/portfolioData';
  import GithubGrid from '../components/GithubGrid';
  import Hero from '../sections/Hero';

  const Home = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-12"
      >
        <Hero />
        
        {/* Summary Card with Micro-animations */}
        <section className="glassmorphism p-8 rounded-2xl flex flex-col gap-4 relative overflow-hidden group">
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
          <h2 className="text-2xl font-space font-bold text-text-main">Developer Summary</h2>
          <p className="text-text-muted leading-relaxed text-base md:text-lg">
            {summaryText}
          </p>
        </section>

        {/* GitHub Contribution Grid */}
        <GithubGrid />

        {/* Bento Grid Links */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Link 
            to="/projects"
            className="glassmorphism p-6 rounded-xl hover:border-primary/50 transition-all hover:-translate-y-1 flex flex-col justify-between min-h-[140px] group"
          >
            <div>
              <h3 className="font-space text-lg font-bold text-text-main group-hover:text-primary transition-colors">Project Portfolio</h3>
              <p className="text-sm text-text-muted mt-1">Examine finished systems with problem-solution case studies.</p>
            </div>
            <span className="text-xs text-primary font-semibold self-end flex items-center gap-1">Browse Projects &rarr;</span>
          </Link>
          
          <Link 
            to="/experience"
            className="glassmorphism p-6 rounded-xl hover:border-primary/50 transition-all hover:-translate-y-1 flex flex-col justify-between min-h-[140px] group"
          >
            <div>
              <h3 className="font-space text-lg font-bold text-text-main group-hover:text-primary transition-colors">Timeline & Background</h3>
              <p className="text-sm text-text-muted mt-1">Review education milestones and professional internships.</p>
            </div>
            <span className="text-xs text-primary font-semibold self-end flex items-center gap-1">View Timeline &rarr;</span>
          </Link>
        </section>
      </motion.div>
    );
  };

  export default Home;
  ```

- [ ] **Step 3: Create src/pages/ProjectsPage.jsx**
  Implement Project cards with filter tabs, custom animations, and Problem/Solution narrative details overlay.
  Write to `src/pages/ProjectsPage.jsx`:
  ```jsx
  import React, { useState } from 'react';
  import { motion, AnimatePresence } from 'framer-motion';
  import { projectsList } from '../data/portfolioData';
  import { ExternalLink, GitBranch, FolderOpen, X } from 'lucide-react';

  const ProjectsPage = () => {
    const [selectedProject, setSelectedProject] = useState(null);

    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2 border-b border-border-custom pb-4">
          <h1 className="text-4xl font-space font-bold text-text-main">Projects</h1>
          <p className="text-text-muted">A collection of systems showcasing challenge-based development flows.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projectsList.map((project, idx) => (
            <div 
              key={idx}
              className="glassmorphism rounded-xl overflow-hidden flex flex-col justify-between group hover:shadow-lg transition-all hover:border-primary/30"
            >
              <div className="p-6 flex flex-col gap-4">
                <div className="flex items-center gap-2 text-primary">
                  <FolderOpen className="w-5 h-5" />
                  <span className="text-xs font-mono tracking-wider font-bold">CASE STUDY</span>
                </div>
                <h3 className="font-space text-xl font-bold text-text-main">{project.title}</h3>
                <p className="text-sm text-text-muted line-clamp-3">{project.description}</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {project.tags.map((t, tIdx) => (
                    <span key={tIdx} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-mono">{t}</span>
                  ))}
                </div>
              </div>
              <div className="p-4 border-t border-border-custom bg-black/5 flex items-center justify-between">
                <button
                  onClick={() => setSelectedProject(project)}
                  className="text-xs font-semibold text-primary hover:text-primary-hover flex items-center gap-1 cursor-pointer"
                >
                  Read Case Study &rarr;
                </button>
                <div className="flex items-center gap-3">
                  <a href={project.githubLink} target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-main">
                    <GitBranch className="w-4 h-4" />
                  </a>
                  {project.demoLink !== '#' && (
                    <a href={project.demoLink} target="_blank" rel="noreferrer" className="text-text-muted hover:text-text-main">
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Case Study Modal */}
        <AnimatePresence>
          {selectedProject && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProject(null)}
                className="fixed inset-0 bg-black/70 backdrop-blur-sm"
              />
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                className="glassmorphism w-full max-w-2xl rounded-2xl overflow-hidden shadow-2xl relative z-10 border border-white/10 dark:bg-slate-900 bg-white"
              >
                <div className="p-6 border-b border-border-custom flex justify-between items-center">
                  <h2 className="font-space text-2xl font-bold text-text-main">{selectedProject.title}</h2>
                  <button onClick={() => setSelectedProject(null)} className="text-text-muted hover:text-text-main cursor-pointer">
                    <X className="w-5 h-5" />
                  </button>
                </div>
                
                <div className="p-6 flex flex-col gap-6 max-h-[60vh] overflow-y-auto">
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-mono tracking-widest text-red-500 font-bold uppercase">🔴 The Challenge (Problem)</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{selectedProject.problem}</p>
                  </div>
                  
                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-mono tracking-widest text-green-500 font-bold uppercase">🟢 The Solution</h4>
                    <p className="text-sm text-text-muted leading-relaxed">{selectedProject.solution}</p>
                  </div>

                  <div className="flex flex-col gap-2">
                    <h4 className="text-xs font-mono tracking-widest text-primary font-bold uppercase">🛠️ Technologies Applied</h4>
                    <div className="flex flex-wrap gap-2 mt-1">
                      {selectedProject.tags.map((t, tIdx) => (
                        <span key={tIdx} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-full font-mono">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-4 border-t border-border-custom bg-black/5 flex justify-end gap-3">
                  <a 
                    href={selectedProject.githubLink} 
                    target="_blank" 
                    rel="noreferrer" 
                    className="px-4 py-2 text-xs font-bold rounded-lg border border-border-custom text-text-main hover:bg-primary/10 transition-colors flex items-center gap-1.5"
                  >
                    <GitBranch className="w-3.5 h-3.5" /> Source Code
                  </a>
                  {selectedProject.demoLink !== '#' && (
                    <a 
                      href={selectedProject.demoLink} 
                      target="_blank" 
                      rel="noreferrer" 
                      className="px-4 py-2 text-xs font-bold rounded-lg bg-primary text-white hover:bg-primary-hover transition-colors flex items-center gap-1.5"
                    >
                      <ExternalLink className="w-3.5 h-3.5" /> Live Demo
                    </a>
                  )}
                </div>
              </motion.div>
            </div>
          )}
        </AnimatePresence>
      </motion.div>
    );
  };

  export default ProjectsPage;
  ```

- [ ] **Step 4: Create src/pages/ExperiencePage.jsx**
  Write code for a timeline displaying work experience and education.
  Write to `src/pages/ExperiencePage.jsx`:
  ```jsx
  import React from 'react';
  import { motion } from 'framer-motion';
  import { experienceList, educationList, skillsCategories } from '../data/portfolioData';
  import { Calendar, Briefcase, GraduationCap } from 'lucide-react';

  const ExperiencePage = () => {
    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-10"
      >
        <div className="flex flex-col gap-2 border-b border-border-custom pb-4">
          <h1 className="text-4xl font-space font-bold text-text-main">Timeline & Tech Stack</h1>
          <p className="text-text-muted">Education, work milestones, and tools breakdown.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Timeline columns (Work & Edu) */}
          <div className="lg:col-span-2 flex flex-col gap-8">
            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-space font-bold text-text-main flex items-center gap-2">
                <Briefcase className="w-6 h-6 text-primary" /> Work Experience
              </h2>
              <div className="flex flex-col gap-6 pl-2 border-l border-border-custom">
                {experienceList.map((exp, idx) => (
                  <div key={idx} className="relative pl-6 flex flex-col gap-2">
                    <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <div>
                        <h3 className="font-space text-lg font-bold text-text-main">{exp.role}</h3>
                        <p className="text-sm font-semibold text-primary">{exp.company}</p>
                      </div>
                      <span className="text-xs text-text-muted flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5" /> {exp.period}
                      </span>
                    </div>
                    <p className="text-sm text-text-muted leading-relaxed">{exp.description}</p>
                    <div className="flex flex-wrap gap-1.5 mt-1">
                      {exp.skills.map((s, sIdx) => (
                        <span key={sIdx} className="text-[10px] px-2 py-0.5 bg-text-muted/10 text-text-muted rounded font-mono">{s}</span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col gap-6">
              <h2 className="text-2xl font-space font-bold text-text-main flex items-center gap-2">
                <GraduationCap className="w-6 h-6 text-primary" /> Education
              </h2>
              <div className="flex flex-col gap-6 pl-2 border-l border-border-custom">
                {educationList.map((edu, idx) => (
                  <div key={idx} className="relative pl-6 flex flex-col gap-2">
                    <div className="absolute left-[-5px] top-1.5 w-2.5 h-2.5 rounded-full bg-primary" />
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-1">
                      <div>
                        <h3 className="font-space text-lg font-bold text-text-main">{edu.school}</h3>
                        <p className="text-sm font-semibold text-primary">{edu.field}</p>
                      </div>
                      <span className="text-xs text-text-muted flex items-center gap-1 font-mono">
                        <Calendar className="w-3.5 h-3.5" /> {edu.period}
                      </span>
                    </div>
                    <p className="text-sm text-text-muted">{edu.description}</p>
                    <span className="text-xs font-mono font-bold text-green-500 bg-green-500/10 px-2 py-1 rounded w-fit mt-1">
                      Final Grade: {edu.grade}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Tech stack sidebar */}
          <div className="flex flex-col gap-6">
            <h2 className="text-2xl font-space font-bold text-text-main">Skills Categories</h2>
            <div className="flex flex-col gap-4">
              {Object.entries(skillsCategories).map(([cat, list]) => (
                <div key={cat} className="glassmorphism p-4 rounded-xl flex flex-col gap-2.5">
                  <h3 className="font-space text-sm font-bold text-text-main border-b border-border-custom pb-1.5">{cat}</h3>
                  <div className="flex flex-wrap gap-1.5">
                    {list.map((skill) => (
                      <span key={skill} className="text-xs px-2.5 py-1 bg-primary/10 text-primary rounded-md font-mono">{skill}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </motion.div>
    );
  };

  export default ExperiencePage;
  ```

- [ ] **Step 5: Create src/pages/ContactPage.jsx**
  Write code for a modern contact form page with label animations and social links.
  Write to `src/pages/ContactPage.jsx`:
  ```jsx
  import React, { useState } from 'react';
  import { motion } from 'framer-motion';
  import { Mail, Github, Linkedin, Send } from 'lucide-react';

  const ContactPage = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
    const [submitting, setSubmitting] = useState(false);

    const handleSubmit = (e) => {
      e.preventDefault();
      setSubmitting(true);
      setTimeout(() => {
        alert('Thank you for your message! This is a demo submission.');
        setFormData({ name: '', email: '', message: '' });
        setSubmitting(false);
      }, 1200);
    };

    return (
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -15 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col gap-8"
      >
        <div className="flex flex-col gap-2 border-b border-border-custom pb-4">
          <h1 className="text-4xl font-space font-bold text-text-main">Let's Connect</h1>
          <p className="text-text-muted">Feel free to reach out for internship or development opportunities.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
          {/* Info Column */}
          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="glassmorphism p-6 rounded-xl flex flex-col gap-4">
              <h3 className="font-space text-lg font-bold text-text-main">Contact Details</h3>
              <p className="text-sm text-text-muted leading-relaxed">
                I'm active on social channels and check emails regularly.
              </p>
              
              <div className="flex flex-col gap-3 mt-2">
                <a href="mailto:dandy@example.com" className="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors">
                  <Mail className="w-4 h-4 text-primary" /> dandy@example.com
                </a>
                <a href="https://github.com/Dandyskie" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors">
                  <Github className="w-4 h-4 text-primary" /> github.com/Dandyskie
                </a>
                <a href="#" className="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors">
                  <Linkedin className="w-4 h-4 text-primary" /> linkedin.com/in/dandy
                </a>
              </div>
            </div>
          </div>

          {/* Form Column */}
          <form onSubmit={handleSubmit} className="md:col-span-3 glassmorphism p-6 rounded-xl flex flex-col gap-4">
            <h3 className="font-space text-lg font-bold text-text-main">Send a Message</h3>
            
            <div className="flex flex-col gap-1">
              <label className="text-xs text-text-muted font-bold font-space uppercase">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="Your Name"
                className="px-4 py-3 rounded-lg border border-border-custom bg-transparent outline-none focus:border-primary text-sm text-text-main"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-text-muted font-bold font-space uppercase">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="your.email@example.com"
                className="px-4 py-3 rounded-lg border border-border-custom bg-transparent outline-none focus:border-primary text-sm text-text-main"
              />
            </div>

            <div className="flex flex-col gap-1">
              <label className="text-xs text-text-muted font-bold font-space uppercase">Message</label>
              <textarea
                required
                rows={4}
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                placeholder="Write your message here..."
                className="px-4 py-3 rounded-lg border border-border-custom bg-transparent outline-none focus:border-primary text-sm text-text-main resize-none"
              />
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 py-3 rounded-lg bg-primary hover:bg-primary-hover disabled:opacity-50 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
            >
              {submitting ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
            </button>
          </form>
        </div>
      </motion.div>
    );
  };

  export default ContactPage;
  ```

- [ ] **Step 6: Update src/sections/Hero.jsx**
  Implement interactive font effects and responsive styling on Hero.
  Replace `src/sections/Hero.jsx` content:
  ```jsx
  import React from 'react';
  import { motion } from 'framer-motion';
  import { Link } from 'react-router-dom';
  import { ArrowRight, Sparkles } from 'lucide-react';

  const Hero = () => {
    return (
      <section className="relative overflow-hidden flex flex-col items-center text-center py-8">
        <div className="absolute inset-0 bg-radial-lighting opacity-30 pointer-events-none" />
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="flex flex-col items-center gap-6 relative z-10"
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-bold text-primary bg-primary/10 rounded-full border border-primary/20 font-space">
            <Sparkles className="w-3.5 h-3.5" /> Welcome to my Portofolio
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black font-space tracking-tight text-text-main select-none transition-all duration-300">
            Hi, I am <span className="text-primary hover:text-glow transition-all">Dandy</span>
          </h1>

          <p className="text-xl md:text-2xl font-space font-medium text-text-muted max-w-xl leading-relaxed">
            Frontend Developer & PPLG Graduate
          </p>

          <div className="flex items-center gap-4 mt-4">
            <Link 
              to="/projects"
              className="px-6 py-3 rounded-full bg-primary hover:bg-primary-hover text-white font-space text-sm font-bold shadow-md hover:shadow-lg transition-all flex items-center gap-1.5"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </Link>
            <Link 
              to="/contact"
              className="px-6 py-3 rounded-full border border-border-custom hover:bg-primary/10 text-text-main font-space text-sm font-bold transition-all"
            >
              Contact Me
            </Link>
          </div>
        </motion.div>
      </section>
    );
  };

  export default Hero;
  ```

- [ ] **Step 7: Run compilation checks and commit**
  Run: `npm run build`
  Expected: Complete workspace compiles successfully.
  ```bash
  git add src/App.jsx src/pages src/sections/Hero.jsx
  git commit -m "feat: implement SPA routing, create page routes, and update Hero interactivity"
  ```

---

### Task 7: Unused Files Cleanup

**Files:**
- Delete: `src/components/BackgroundWaves.jsx`
- Delete: `src/components/ProjectCard.jsx`
- Delete: `src/components/Reveal.jsx`
- Delete: `src/components/SocialIcon.jsx`
- Delete: `src/components/TechBadge.jsx`
- Delete: `src/sections/Contact.jsx`
- Delete: `src/sections/Experience.jsx`
- Delete: `src/sections/Projects.jsx`
- Delete: `src/sections/TechStack.jsx`

- [ ] **Step 1: Safely delete unused single-page components**
  Delete: `src/components/BackgroundWaves.jsx`, `src/components/ProjectCard.jsx`, `src/components/Reveal.jsx`, `src/components/SocialIcon.jsx`, `src/components/TechBadge.jsx`, `src/sections/Contact.jsx`, `src/sections/Experience.jsx`, `src/sections/Projects.jsx`, `src/sections/TechStack.jsx`.
  Expected: Components removed.

- [ ] **Step 2: Commit**
  ```bash
  git add -A
  git commit -m "cleanup: remove obsolete single-page components and sections"
  ```
