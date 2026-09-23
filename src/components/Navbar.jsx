import React, { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import MobileDrawer from './MobileDrawer';

const NAV_KEYS = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'experience', href: '#experience' },
  { key: 'projects', href: '#projects' },
  { key: 'gallery', href: '#gallery' },
  { key: 'contact', href: '#contact' },
];

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('id') ? 'id' : 'en';

  const [isScrolled, setIsScrolled] = useState(false);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = NAV_KEYS.map(link => document.querySelector(link.href)).filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: '-20% 0px -60% 0px', threshold: 0 }
    );

    sections.forEach((sec) => observer.observe(sec));
    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (href) => {
    const target = document.querySelector(href);
    if (!target) return;
    const navHeight = 85;
    const targetPosition = target.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: targetPosition, behavior: 'smooth' });
  };

  const navLinks = NAV_KEYS.map((item) => ({
    label: t(`nav.${item.key}`),
    href: item.href,
  }));

  return (
    <>
      <header
        className={`fixed z-40 transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
          isScrolled
            ? 'top-4 left-1/2 -translate-x-1/2 w-[94%] max-w-4xl rounded-full bg-white/85 backdrop-blur-xl border border-[#E8E8E2] shadow-[0_8px_30px_rgb(0,0,0,0.06)] py-2.5 px-6'
            : 'top-0 left-0 right-0 w-full bg-transparent py-6 px-6 md:px-12'
        }`}
      >
        <div className="w-full flex items-center justify-between">
          {/* Brand */}
          <a
            href="#hero"
            onClick={(e) => { e.preventDefault(); handleScrollTo('#hero'); }}
            className="font-sans text-lg font-bold text-[#111] hover:opacity-80 transition-opacity tracking-tight cursor-pointer shrink-0"
          >
            Dandy<span className="text-[#0284C7]">.</span>
          </a>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace('#', '');
              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => { e.preventDefault(); handleScrollTo(link.href); }}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-sans transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#111] text-white font-semibold shadow-xs'
                      : 'text-[#666] hover:text-[#111] hover:bg-black/5'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Desktop CTA & Language Toggle */}
          <div className="hidden md:flex items-center gap-3">
            {/* Language Switcher: EN | ID */}
            <div className="flex items-center p-0.5 rounded-full border border-[#E8E8E2] bg-black/[0.03]">
              <button
                type="button"
                onClick={() => i18n.changeLanguage('en')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-sans font-bold transition-all cursor-pointer ${
                  currentLang === 'en'
                    ? 'bg-white text-[#111] shadow-2xs'
                    : 'text-[#777] hover:text-[#111]'
                }`}
                title="Switch to English"
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => i18n.changeLanguage('id')}
                className={`px-2.5 py-1 rounded-full text-[11px] font-sans font-bold transition-all cursor-pointer ${
                  currentLang === 'id'
                    ? 'bg-white text-[#111] shadow-2xs'
                    : 'text-[#777] hover:text-[#111]'
                }`}
                title="Ganti ke Bahasa Indonesia"
              >
                ID
              </button>
            </div>

            {/* Let's Talk CTA (Replaces Pricelist) */}
            <button
              type="button"
              onClick={() => handleScrollTo('#contact')}
              className="px-4 py-2 rounded-full bg-[#111] hover:bg-[#222] text-white text-xs font-sans font-semibold transition-all shadow-xs cursor-pointer flex items-center gap-2 group"
            >
              <span>{t('nav.letsTalk')}</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8] group-hover:scale-125 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger */}
          <button
            type="button"
            onClick={() => setIsDrawerOpen(true)}
            className="w-10 h-10 rounded-full border border-[#ddd] bg-white/80 lg:hidden flex flex-col items-center justify-center gap-1.5 cursor-pointer"
            aria-label="Open menu"
          >
            <span className="w-4 h-[1.5px] bg-[#111]" />
            <span className="w-4 h-[1.5px] bg-[#111]" />
          </button>
        </div>
      </header>

      <MobileDrawer
        isOpen={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
        navLinks={navLinks}
        activeSection={activeSection}
        onSelectLink={handleScrollTo}
      />
    </>
  );
};

export default Navbar;
