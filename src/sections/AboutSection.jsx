import React from 'react';
import { motion } from 'framer-motion';
import { Mail, FileDown } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import BlurText from '../components/BlurText';
import ShinyText from '../components/ShinyText';

const AboutSection = () => {
  const { t } = useTranslation();

  const stats = [
    { value: '5+', label: t('about.stats.production') },
    { value: '3+', label: t('about.stats.frameworks') },
    { value: '100%', label: t('about.stats.delivery') },
  ];

  return (
    <section id="about" className="py-24 md:py-32 border-t border-[#E8E8E2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">

          {/* Left Column: Photo + Socials + CV Download */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex flex-col gap-5"
          >
            <div className="aspect-[4/5] sm:aspect-[3/4] rounded-2xl overflow-hidden bg-[#ECECE4] border border-[#E8E8E2]">
              <BlurText delay={100} className="w-full h-full">
                <img
                  src="/dandy-gdgbandung.png"
                  alt="Dandy Rama Wiguna"
                  className="w-full h-full object-cover object-[center_12%]"
                />
              </BlurText>
            </div>

            {/* Social Links & Download Resume Button */}
            <div className="flex flex-wrap items-center gap-3">
              <div className="flex items-center gap-2">
                <a
                  href="https://github.com/Dandyskie"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-[#E8E8E2] hover:border-[#38BDF8] hover:bg-[#E0F2FE]/30 text-[#555] hover:text-[#0284C7] transition-all"
                  aria-label="GitHub"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href="https://www.linkedin.com/in/dandy-rama-wiguna-3575ab370/"
                  target="_blank"
                  rel="noreferrer"
                  className="p-2.5 rounded-xl border border-[#E8E8E2] hover:border-[#38BDF8] hover:bg-[#E0F2FE]/30 text-[#555] hover:text-[#0284C7] transition-all"
                  aria-label="LinkedIn"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href="mailto:dandyskie@gmail.com"
                  className="p-2.5 rounded-xl border border-[#E8E8E2] hover:border-[#38BDF8] hover:bg-[#E0F2FE]/30 text-[#555] hover:text-[#0284C7] transition-all"
                  aria-label="Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>

              {/* CV Download Button */}
              <a
                href="/data/CV-Dandy-Rama-Wiguna.pdf"
                target="_blank"
                rel="noreferrer"
                download="CV-Dandy-Rama-Wiguna.pdf"
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl border border-[#E8E8E2] hover:border-[#111] bg-white text-[#111] text-xs font-sans font-semibold hover:shadow-xs transition-all group cursor-pointer"
              >
                <FileDown className="w-4 h-4 text-[#0284C7] group-hover:scale-110 transition-transform" />
                <span>{t('about.downloadCv')}</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Bio + Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 flex flex-col gap-8"
          >
            <div className="flex flex-col gap-4">
              <BlurText
                key={t('about.title')}
                text={t('about.title')}
                delay={40}
                animateBy="words"
                direction="top"
                className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#111] tracking-tight"
              />

              <div className="flex flex-col gap-4 text-base sm:text-lg text-[#444] leading-relaxed font-sans">
                <BlurText
                  key={t('about.p1')}
                  text={t('about.p1')}
                  delay={12}
                  animateBy="words"
                  direction="top"
                  className="text-base sm:text-lg text-[#444] leading-relaxed font-sans"
                />
                <BlurText
                  key={t('about.p2')}
                  text={t('about.p2')}
                  delay={12}
                  animateBy="words"
                  direction="top"
                  className="text-base sm:text-lg text-[#444] leading-relaxed font-sans"
                />
              </div>
            </div>

            {/* Inline Stats */}
            <div className="grid grid-cols-3 gap-4 py-6 border-y border-[#E8E8E2]">
              {stats.map((stat, idx) => (
                <div key={idx} className="flex flex-col gap-1">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-sans font-bold text-[#0284C7]">
                    {stat.value}
                  </span>
                  <span className="text-xs sm:text-sm font-sans text-[#777]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Quick Info */}
            <div className="flex flex-wrap gap-x-8 gap-y-3 text-sm font-sans text-[#666]">
              <div>
                <span className="text-[#111] font-semibold">{t('about.locationLabel')}</span>
                <span className="ml-2">{t('about.locationValue')}</span>
              </div>
              <div>
                <span className="text-[#111] font-semibold">{t('about.focusLabel')}</span>
                <span className="ml-2">{t('about.focusValue')}</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-[#111] font-semibold">{t('about.statusLabel')}</span>
                <ShinyText
                  text={t('about.statusValue')}
                  color="#0284C7"
                  shineColor="#38BDF8"
                  speed={2.5}
                  className="font-medium"
                />
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
