import React from 'react';
import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import BlurText from '../components/BlurText';
import ShinyText from '../components/ShinyText';

const ExperienceSection = () => {
  const { t } = useTranslation();
  const timelineItems = t('experience.items', { returnObjects: true }) || [];

  return (
    <section id="experience" className="py-24 md:py-32 border-t border-[#E8E8E2] bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="mb-12 flex flex-col gap-2">
          <BlurText
            key={t('experience.title')}
            text={t('experience.title')}
            delay={40}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#111] tracking-tight"
          />
          <p className="text-sm sm:text-base font-sans text-[#777]">
            {t('experience.subtitle')}
          </p>
        </div>

        {/* Timeline */}
        <div className="flex flex-col">
          {timelineItems.map((item, idx) => {
            const isCurrent = idx === 0;

            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08, ease: [0.16, 1, 0.3, 1] }}
                className="group grid grid-cols-1 md:grid-cols-12 gap-4 md:gap-8 py-7 border-b border-[#E8E8E2] last:border-b-0 hover:bg-[#E0F2FE]/20 px-4 -mx-4 rounded-2xl transition-colors"
              >
                {/* Period & Location */}
                <div className="md:col-span-3 flex flex-col gap-1">
                  <span className="text-sm font-sans font-semibold text-[#111]">
                    {item.period}
                  </span>
                  {item.location && (
                    <span className="text-xs font-sans text-[#888]">
                      {item.location}
                    </span>
                  )}
                  {isCurrent && (
                    <span className="inline-flex items-center gap-1.5 w-fit mt-1 px-2.5 py-0.5 rounded-full bg-[#E0F2FE] border border-[#BAE6FD] text-[11px] font-sans font-semibold text-[#0284C7]">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#0284C7] animate-pulse" />
                      Active
                    </span>
                  )}
                </div>

                {/* Role & Company */}
                <div className="md:col-span-4">
                  <h3 className="text-base font-sans font-bold text-[#111] group-hover:text-[#0284C7] transition-colors flex items-center gap-2">
                    {isCurrent ? (
                      <ShinyText
                        text={item.role}
                        color="#111111"
                        shineColor="#0284C7"
                        speed={3}
                      />
                    ) : (
                      item.role
                    )}
                  </h3>
                  <p className="text-sm font-sans font-medium text-[#666] mt-0.5">
                    {item.company}
                  </p>
                </div>

                {/* Description with BlurText */}
                <div className="md:col-span-5">
                  <BlurText
                    key={item.description}
                    text={item.description}
                    delay={10}
                    animateBy="words"
                    direction="top"
                    className="text-sm font-sans text-[#555] leading-relaxed"
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default ExperienceSection;
