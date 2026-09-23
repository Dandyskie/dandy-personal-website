import React, { useState, useEffect } from 'react';
import { Copy, Check, ArrowUp } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const NAV_KEYS = [
  { key: 'home', href: '#hero' },
  { key: 'about', href: '#about' },
  { key: 'projects', href: '#projects' },
  { key: 'gallery', href: '#gallery' },
  { key: 'contact', href: '#contact' },
];

const SOCIAL_ITEMS = [
  { label: 'Instagram', href: 'https://instagram.com' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/dandy-rama-wiguna-3575ab370/' },
  { label: 'GitHub', href: 'https://github.com/Dandyskie' },
];

const Footer = () => {
  const { t } = useTranslation();
  const [copied, setCopied] = useState(false);
  const [wibTime, setWibTime] = useState('');

  // Update real-time WIB clock
  useEffect(() => {
    const updateTime = () => {
      try {
        const formatted = new Intl.DateTimeFormat('en-US', {
          timeZone: 'Asia/Jakarta',
          hour: '2-digit',
          minute: '2-digit',
          hour12: true,
        }).format(new Date());
        setWibTime(`${formatted} WIB`);
      } catch {
        setWibTime('WIB');
      }
    };

    updateTime();
    const interval = setInterval(updateTime, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleCopyEmail = async () => {
    const email = 'dandyskie@gmail.com';
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(email);
      } else {
        const textArea = document.createElement('textarea');
        textArea.value = email;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
      }
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    } catch {
      setCopied(false);
    }
  };

  const handleScrollTo = (href) => {
    const el = document.querySelector(href);
    if (!el) return;
    const navHeight = 80;
    const y = el.getBoundingClientRect().top + window.pageYOffset - navHeight;
    window.scrollTo({ top: y, behavior: 'smooth' });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#070709] text-white pt-24 pb-12 overflow-hidden selection:bg-[#38BDF8] selection:text-[#070709]">
      {/* Giant Ambient Watermark Lettering */}
      <div 
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none overflow-hidden z-0"
        aria-hidden="true"
      >
        <span className="font-sans font-black text-[19vw] leading-none text-white/[0.025] tracking-tighter uppercase whitespace-nowrap">
          DANDYSKIE
        </span>
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
        {/* Upper Main Section: Left Headline + Right Nav Columns */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-14 lg:gap-8 items-start">
          
          {/* Left Column: Available Pill + Big Headline + Copy Email */}
          <div className="lg:col-span-8 flex flex-col items-start">
            {/* Status Pill Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-xs text-stone-300 font-sans tracking-wide mb-8 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
              </span>
              <span>{t('footer.available')}</span>
            </div>

            {/* Huge Headline */}
            <h2 className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-black tracking-tight leading-[1.08] text-white font-sans max-w-2xl">
              {t('footer.headline1')}<br />
              {t('footer.headline2')}<br />
              <span className="text-stone-400 hover:text-[#38BDF8] transition-colors">{t('footer.headlineAccent')}</span><br />
              {t('footer.headline3')}
            </h2>

            {/* Email Address with Copy Button */}
            <div className="mt-10 flex flex-col items-start">
              <button
                type="button"
                onClick={handleCopyEmail}
                className="group inline-flex items-center gap-3 text-xl sm:text-2xl md:text-3xl font-bold tracking-tight text-white hover:text-[#38BDF8] transition-colors cursor-pointer border-b border-transparent hover:border-[#38BDF8] pb-1"
                title="Click to copy email address"
              >
                <span>dandyskie@gmail.com</span>
                <span className="p-1.5 rounded-lg border border-white/15 bg-white/[0.06] group-hover:bg-white/[0.12] group-hover:border-[#38BDF8]/40 transition-all text-stone-300">
                  {copied ? (
                    <Check className="w-4 h-4 text-emerald-400" />
                  ) : (
                    <Copy className="w-4 h-4" />
                  )}
                </span>
              </button>
              <span className="text-xs text-stone-500 font-sans mt-2">
                {copied ? t('footer.copiedEmail') : t('footer.copyEmail')}
              </span>
            </div>
          </div>

          {/* Right Column: MENU and SOCIALS stacked */}
          <div className="lg:col-span-4 flex flex-col sm:flex-row lg:flex-col gap-10 lg:pl-12 lg:items-start">
            {/* Menu Links */}
            <div className="flex flex-col gap-3 min-w-[140px]">
              <span className="text-[11px] font-bold text-stone-500 tracking-[0.2em] uppercase font-sans">
                {t('footer.menu')}
              </span>
              <nav className="flex flex-col gap-2">
                {NAV_KEYS.map((item) => (
                  <a
                    key={item.key}
                    href={item.href}
                    onClick={(e) => {
                      e.preventDefault();
                      handleScrollTo(item.href);
                    }}
                    className="text-base font-semibold text-stone-300 hover:text-white transition-colors cursor-pointer w-fit py-0.5"
                  >
                    {t(`nav.${item.key}`)}
                  </a>
                ))}
              </nav>
            </div>

            {/* Social Links */}
            <div className="flex flex-col gap-3 min-w-[140px]">
              <span className="text-[11px] font-bold text-stone-500 tracking-[0.2em] uppercase font-sans">
                {t('footer.socials')}
              </span>
              <div className="flex flex-col gap-2">
                {SOCIAL_ITEMS.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    target="_blank"
                    rel="noreferrer"
                    className="text-base font-semibold text-stone-300 hover:text-white transition-colors cursor-pointer w-fit py-0.5"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar Divider */}
        <div className="border-t border-white/[0.08] mt-20 pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          
          {/* Brand Info & Live Location/Clock */}
          <div className="flex flex-col gap-2">
            <div>
              <span className="text-base sm:text-lg font-bold text-white tracking-tight font-sans">
                Dandy.
              </span>
              <p className="text-xs text-stone-400 font-sans mt-0.5">
                {t('footer.tagline')}
              </p>
            </div>

            {/* Live Location and Time */}
            <div className="flex items-center gap-2 text-xs text-stone-400 font-sans mt-1">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Sukoharjo, Central Java - Indonesia</span>
              <span className="text-stone-600">•</span>
              <span className="text-stone-300 font-mono">{wibTime || '07:20 PM WIB'}</span>
            </div>
          </div>

          {/* Copyright & Scroll to Top Button */}
          <div className="flex items-center gap-5 w-full md:w-auto justify-between md:justify-end">
            <p className="text-xs text-stone-500 font-sans">
              &copy; {new Date().getFullYear()} Dandy Rama | Dandyskie. {t('footer.rights')}
            </p>
            
            <button
              type="button"
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-10 h-10 rounded-full border border-white/10 bg-white/[0.03] hover:bg-white/[0.08] hover:border-white/25 text-stone-400 hover:text-white flex items-center justify-center transition-all cursor-pointer shadow-lg group"
            >
              <ArrowUp className="w-4 h-4 group-hover:-translate-y-0.5 transition-transform" />
            </button>
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
