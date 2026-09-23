import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ArrowUpRight } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const MobileDrawer = ({
  isOpen,
  onClose,
  navLinks = [],
  activeSection = '',
  onSelectLink
}) => {
  const { t, i18n } = useTranslation();
  const currentLang = i18n.language?.startsWith('id') ? 'id' : 'en';

  // Lock body scroll saat drawer aktif
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Heavy Backdrop Blur Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-xl"
          />

          {/* Slide-in Drawer Panel from Right */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 28, stiffness: 300 }}
            className="fixed top-0 right-0 bottom-0 w-[300px] max-w-[85vw] bg-white/95 backdrop-blur-2xl border-l border-[#E8E8E2] shadow-2xl p-6 flex flex-col justify-between z-10"
          >
            <div>
              {/* Header Drawer */}
              <div className="flex items-center justify-between pb-6 border-b border-[#E8E8E2]">
                <span className="font-sans text-xl font-bold text-[#111111]">
                  Dandy<span className="text-[#0284C7]">.</span>
                </span>
                <button
                  type="button"
                  onClick={onClose}
                  className="p-2 rounded-full hover:bg-[#FAFAF7] text-[#111111] cursor-pointer"
                  aria-label="Close menu"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Language Switcher in Mobile Drawer */}
              <div className="pt-4 flex items-center justify-between">
                <span className="text-xs font-sans text-[#777]">Language</span>
                <div className="flex items-center p-0.5 rounded-full border border-[#E8E8E2] bg-black/[0.04]">
                  <button
                    type="button"
                    onClick={() => i18n.changeLanguage('en')}
                    className={`px-3 py-1 rounded-full text-xs font-sans font-bold transition-all cursor-pointer ${
                      currentLang === 'en'
                        ? 'bg-white text-[#111] shadow-2xs'
                        : 'text-[#777]'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    type="button"
                    onClick={() => i18n.changeLanguage('id')}
                    className={`px-3 py-1 rounded-full text-xs font-sans font-bold transition-all cursor-pointer ${
                      currentLang === 'id'
                        ? 'bg-white text-[#111] shadow-2xs'
                        : 'text-[#777]'
                    }`}
                  >
                    ID
                  </button>
                </div>
              </div>

              {/* Navigation Links */}
              <nav className="flex flex-col gap-2 pt-6">
                {navLinks.map((link) => {
                  const isActive = activeSection === link.href.replace('#', '');
                  return (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => {
                        e.preventDefault();
                        onSelectLink(link.href);
                        onClose();
                      }}
                      className={`flex items-center justify-between px-4 py-3 rounded-2xl text-sm font-sans transition-all ${
                        isActive
                          ? 'bg-[#111111] text-white font-semibold shadow-xs'
                          : 'text-[#666666] hover:text-[#111111] hover:bg-[#FAFAF7]'
                      }`}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="w-4 h-4 opacity-50" />
                    </a>
                  );
                })}
              </nav>
            </div>

            {/* Bottom Action: Let's Talk CTA */}
            <div className="pt-6 border-t border-[#E8E8E2]">
              <button
                type="button"
                onClick={() => {
                  onSelectLink('#contact');
                  onClose();
                }}
                className="w-full py-3.5 px-4 rounded-full bg-[#111] hover:bg-[#222] text-white font-sans text-xs font-bold uppercase tracking-wider text-center flex items-center justify-center gap-2 shadow-sm transition-colors cursor-pointer"
              >
                <span>{t('nav.letsTalk')}</span>
                <span className="w-1.5 h-1.5 rounded-full bg-[#38BDF8]" />
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
};

export default MobileDrawer;
