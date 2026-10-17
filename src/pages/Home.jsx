import React from 'react';
import Hero from '../sections/Hero';
import TechMarquee from '../sections/TechMarquee';
import AboutSection from '../sections/AboutSection';
import ExperienceSection from '../sections/ExperienceSection';
import SelectedWorks from '../sections/SelectedWorks';
import GallerySection from '../sections/GallerySection';
import ServicesCta from '../sections/ServicesCta';
import ContactSection from '../sections/ContactSection';

const Home = () => {
  return (
    <div className="flex flex-col w-full">
      {/* 1. Hero — Clean intro with photo */}
      <Hero />

      {/* 2. Tech Marquee — Auto-scroll tech stack */}
      <TechMarquee />

      {/* 3. About — Photo + bio + stats */}
      <AboutSection />

      {/* 4. Experience — Clean timeline */}
      <ExperienceSection />

      {/* 5. Projects — Responsive Showcase Grid with Category Filters */}
      <SelectedWorks />

      {/* 6. Gallery — Moments & photos */}
      <GallerySection />

      {/* 7. Services — Link to compro/pricelist */}
      <ServicesCta />

      {/* 8. Contact — Form + info */}
      <ContactSection />
    </div>
  );
};

export default Home;
