/**
 * ANATOMI FILE: src/App.jsx
 * ====================================================================
 * 1. IMPORTS
 *    - React, useState, useEffect
 *    - React Router: Routes, Route (Menjamin kompatibilitas link rute)
 *    - Core Shell Components: Navbar, Footer
 *    - Single Page View: Home
 *    - React Bits Effect: SplashCursor (Fluid cursor interaktif)
 * 
 * 2. KOMPONEN UTAMA (App)
 *    - State: isMounted (Memastikan WebGL / client effects hanya berjalan setelah mount)
 *    - Render Shell:
 *      * SplashCursor: Efek kursor fluid interaktif dari React Bits
 *      * Navbar: Navigasi fixed di atas
 *      * Main: Kontainer utama membungkus alur single-page Home
 *      * Footer: Dark footer penutup
 * 
 * 3. EXPORT
 *    - Default export App
 * ====================================================================
 * ALUR KERJA:
 * Root component dari aplikasi portofolio. Menyatukan tema global,
 * efek kursor, dan alur single-page scrolling yang mulus.
 * ====================================================================
 */

import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import ProjectDetail from './pages/ProjectDetail';
import SplashCursor from './components/SplashCursor';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo({ top: 0, behavior: 'instant' });
    } else {
      const element = document.querySelector(hash);
      if (element) {
        const navHeight = 85;
        const targetPos = element.getBoundingClientRect().top + window.pageYOffset - navHeight;
        window.scrollTo({ top: targetPos, behavior: 'smooth' });
      }
    }
  }, [pathname, hash]);

  return null;
}

function App() {
  const [isMounted] = useState(() => typeof window !== 'undefined');

  return (
    <div className="min-h-screen bg-[#F5F5F0] text-[#1A1A1A] font-sans antialiased relative selection:bg-[#38BDF8] selection:text-white">
      {/* Scroll restoration helper */}
      <ScrollToTop />

      {/* React Bits: Fluid Interactive Splash Cursor */}
      {isMounted && (
        <SplashCursor
          TRANSPARENT={true}
          SPLAT_RADIUS={0.15}
          DENSITY_DISSIPATION={4.5}
          VELOCITY_DISSIPATION={2.5}
          PRESSURE={0.1}
          RAINBOW_MODE={false}
          COLOR="#38BDF8"
        />
      )}

      {/* Global Fixed Navbar */}
      <Navbar />

      {/* Main Single-Page Content & Dedicated Pages */}
      <main className="relative z-10 w-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/project/:slug" element={<ProjectDetail />} />
          <Route path="/portfolio/:slug" element={<ProjectDetail />} />
          {/* Catch-all fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </main>

      {/* Editorial Dark Footer */}
      <Footer />
    </div>
  );
}

export default App;
