import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Globe } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import ShinyText from '../components/ShinyText';

const ServicesCta = () => {
  const { t } = useTranslation();

  return (
    <section id="services" className="py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="relative rounded-3xl bg-[#0B0B0E] p-10 md:p-16 overflow-hidden"
        >
          {/* Subtle glow */}
          <div
            className="absolute inset-0 pointer-events-none opacity-40"
            style={{
              background: 'radial-gradient(ellipse 50% 60% at 70% 20%, rgba(56, 189, 248, 0.3) 0%, transparent 70%)'
            }}
          />

          <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-8">
            <div className="flex flex-col gap-4 max-w-xl">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-[#38BDF8]/15">
                  <Globe className="w-5 h-5 text-[#38BDF8]" />
                </div>
                <span className="text-sm font-sans font-medium text-[#38BDF8]">
                  Web Development Solutions
                </span>
              </div>

              <div>
                <ShinyText
                  text={t('services.title')}
                  color="#FFFFFF"
                  shineColor="#38BDF8"
                  speed={3}
                  className="text-2xl sm:text-3xl md:text-4xl lg:text-[2.6rem] font-sans font-bold tracking-tight leading-tight block"
                />
              </div>

              <p className="text-sm md:text-base font-sans text-[#8E8E9F] leading-relaxed">
                {t('services.desc')}
              </p>
            </div>

            <a
              href="#"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white hover:bg-[#F0F0ED] text-[#0B0B0E] font-sans text-sm font-bold transition-all shadow-lg hover:shadow-xl cursor-pointer group shrink-0"
            >
              <span>{t('services.cta')}</span>
              <ArrowRight className="w-4 h-4 text-[#0284C7] transition-transform group-hover:translate-x-1" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesCta;
