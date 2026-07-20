import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { summaryText } from '../data/portfolioData';
import GithubGrid from '../components/GithubGrid';
import Hero from '../sections/Hero';
import ScrollReveal from '../components/ScrollReveal';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-12"
    >
      <Hero />
      
      {/* Summary Card with ScrollReveal */}
      <ScrollReveal variant="spring-up" delay={0.1}>
        <motion.section 
          whileHover={{ y: -5, boxShadow: "0 8px 30px rgba(59, 130, 246, 0.06)" }}
          transition={{ type: "spring", stiffness: 300, damping: 20 }}
          className="glassmorphism p-8 rounded-2xl flex flex-col gap-4 relative overflow-hidden group hover:border-primary/30 transition-colors duration-300"
        >
          <div className="absolute top-0 left-0 w-1.5 h-full bg-primary" />
          <h2 className="text-2xl font-space font-bold text-text-main">Developer Summary</h2>
          <p className="text-text-muted leading-relaxed text-base md:text-lg">
            {summaryText}
          </p>
        </motion.section>
      </ScrollReveal>

      {/* GitHub Contribution Grid with ScrollReveal */}
      <ScrollReveal variant="zoom-in" delay={0.15}>
        <GithubGrid />
      </ScrollReveal>

      {/* Bento Grid Links with ScrollReveal */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <ScrollReveal variant="fade-right" delay={0.2} className="w-full flex">
          <motion.div
            whileHover={{ y: -5, scale: 1.01, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.08)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full flex"
          >
            <Link 
              to="/projects"
              className="w-full glassmorphism p-6 rounded-xl hover:border-primary/50 transition-all flex flex-col justify-between min-h-[140px] group"
            >
              <div>
                <h3 className="font-space text-lg font-bold text-text-main group-hover:text-primary transition-colors">Project Portfolio</h3>
                <p className="text-sm text-text-muted mt-1">Examine finished systems with problem-solution case studies.</p>
              </div>
              <span className="text-xs text-primary font-semibold self-end flex items-center gap-1">Browse Projects &rarr;</span>
            </Link>
          </motion.div>
        </ScrollReveal>
        
        <ScrollReveal variant="fade-left" delay={0.25} className="w-full flex">
          <motion.div
            whileHover={{ y: -5, scale: 1.01, boxShadow: "0 8px 25px rgba(59, 130, 246, 0.08)" }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="w-full flex"
          >
            <Link 
              to="/experience"
              className="w-full glassmorphism p-6 rounded-xl hover:border-primary/50 transition-all flex flex-col justify-between min-h-[140px] group"
            >
              <div>
                <h3 className="font-space text-lg font-bold text-text-main group-hover:text-primary transition-colors">Timeline & Background</h3>
                <p className="text-sm text-text-muted mt-1">Review education milestones and professional internships.</p>
              </div>
              <span className="text-xs text-primary font-semibold self-end flex items-center gap-1">View Timeline &rarr;</span>
            </Link>
          </motion.div>
        </ScrollReveal>
      </section>
    </motion.div>
  );
};

export default Home;
