import React from 'react';
import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import TechStack from './sections/TechStack';
import Projects from './sections/Projects';
import Experience from './sections/Experience';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="min-h-screen bg-base bg-grid-pattern text-text-main font-inter selection:bg-primary/30 selection:text-white">
      <Navbar />
      <main>
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
