import React, { useState } from 'react';
import Hero from '../sections/Hero';
import TechMarquee from '../sections/TechMarquee';
import AboutSection from '../sections/AboutSection';
import ExperienceSection from '../sections/ExperienceSection';
import SelectedWorks from '../sections/SelectedWorks';
import GallerySection from '../sections/GallerySection';
import ServicesCta from '../sections/ServicesCta';
import ContactSection from '../sections/ContactSection';
import ProjectModal from '../components/ProjectModal';

const Home = () => {
  const [selectedProject, setSelectedProject] = useState(null);

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

      {/* 5. Projects — 2×2 grid */}
      <SelectedWorks onOpenModal={setSelectedProject} />

      {/* 6. Gallery — Moments & photos */}
      <GallerySection />

      {/* 7. Services — Link to compro/pricelist */}
      <ServicesCta />

      {/* 8. Contact — Form + info */}
      <ContactSection />

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
};

export default Home;
