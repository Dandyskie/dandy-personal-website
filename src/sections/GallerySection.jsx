import React from 'react';
import { motion } from 'framer-motion';
import { Camera } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import BlurText from '../components/BlurText';

const GALLERY_ITEMS = [
  { id: 1, aspect: 'aspect-[4/3]', span: 'md:col-span-2' },
  { id: 2, aspect: 'aspect-square', span: 'md:col-span-1' },
  { id: 3, aspect: 'aspect-square', span: 'md:col-span-1' },
  { id: 4, aspect: 'aspect-[4/3]', span: 'md:col-span-2' },
  { id: 5, aspect: 'aspect-[3/4]', span: 'md:col-span-1' },
  { id: 6, aspect: 'aspect-[3/4]', span: 'md:col-span-1' },
];

const GallerySection = () => {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-24 md:py-32 border-t border-[#E8E8E2]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="flex flex-col gap-2 mb-12">
          <BlurText
            key={t('gallery.title')}
            text={t('gallery.title')}
            delay={40}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#111] tracking-tight"
          />
          <p className="text-sm sm:text-base font-sans text-[#777] max-w-md">
            {t('gallery.subtitle')}
          </p>
        </div>

        {/* Masonry-style Grid Placeholders */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4">
          {GALLERY_ITEMS.map((item, idx) => (
            <div
              key={item.id}
              className={`${item.span} ${item.aspect} rounded-2xl bg-[#ECECE4] border border-[#E8E8E2] overflow-hidden flex items-center justify-center group cursor-pointer hover:border-[#38BDF8]/50 transition-all`}
            >
              <BlurText delay={idx * 60} className="w-full h-full flex items-center justify-center">
                {/* Placeholder state — replace with actual images */}
                <div className="flex flex-col items-center gap-2 text-[#bbb] group-hover:text-[#999] transition-colors">
                  <Camera className="w-6 h-6" />
                  <span className="text-xs font-sans">Photo {item.id}</span>
                </div>
              </BlurText>
            </div>
          ))}
        </div>

        <p className="text-xs font-sans text-[#aaa] mt-6 text-center">
          Photos coming soon — add your images to <code className="text-[#0284C7]">public/gallery/</code>
        </p>

      </div>
    </section>
  );
};

export default GallerySection;
