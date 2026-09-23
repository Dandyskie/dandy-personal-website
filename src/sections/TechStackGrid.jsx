/**
 * ANATOMI FILE: src/sections/TechStackGrid.jsx
 * ====================================================================
 * 1. IMPORTS
 *    - React
 *    - Framer Motion: motion
 *    - Lucide Icons & Custom Tech SVGs
 *    - Local Component: ParallaxSection
 * 
 * 2. KONSEP DESAIN:
 *    - Terinspirasi langsung dari seksi "Technologies & Stack" pada Reference 2 (Unggul Fatih)
 *    - Menggabungkan ketegasan teknis dengan kartu putih bersih (editorial card)
 *    - Setiap item memiliki logo, nama tech, kategori peran, dan efek hover glow light blue
 * 
 * 3. EXPORT: Default export TechStackGrid
 * ====================================================================
 */

import React from 'react';
import { motion } from 'framer-motion';
import { 
  Code2, 
  Layers, 
  Database, 
  Server, 
  Cpu, 
  Globe, 
  Terminal, 
  GitBranch, 
  Zap, 
  Boxes, 
  Workflow 
} from 'lucide-react';
import ParallaxSection from '../components/ParallaxSection';

const FigmaIcon = (props) => (
  <svg viewBox="0 0 24 24" width="20" height="20" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M5 5.5A3.5 3.5 0 0 1 8.5 2H12v7H8.5A3.5 3.5 0 0 1 5 5.5z" />
    <path d="M12 2h3.5a3.5 3.5 0 1 1 0 7H12V2z" />
    <path d="M12 12.5a3.5 3.5 0 1 1 7 0 3.5 3.5 0 1 1-7 0z" />
    <path d="M5 19.5A3.5 3.5 0 0 1 8.5 16H12v3.5a3.5 3.5 0 1 1-7 0z" />
    <path d="M5 12.5A3.5 3.5 0 0 1 8.5 9H12v7H8.5A3.5 3.5 0 0 1 5 12.5z" />
  </svg>
);

const TECH_STACK = [
  {
    name: 'React.js',
    role: 'Frontend UI & Architecture',
    level: 'Advanced',
    icon: Globe,
    color: '#38BDF8',
  },
  {
    name: 'Vue.js',
    role: 'Progressive Web Apps',
    level: 'Proficient',
    icon: Code2,
    color: '#10B981',
  },
  {
    name: 'Laravel',
    role: 'Fullstack PHP Framework',
    level: 'Production Ready',
    icon: Terminal,
    color: '#F43F5E',
  },
  {
    name: 'JavaScript & TS',
    role: 'Core Language & Typing',
    level: 'Advanced',
    icon: Cpu,
    color: '#F59E0B',
  },
  {
    name: 'Tailwind CSS',
    role: 'Modern Utility Styling',
    level: 'Expert',
    icon: Layers,
    color: '#06B6D4',
  },
  {
    name: 'MySQL & Postgres',
    role: 'Relational Databases',
    level: 'Proficient',
    icon: Database,
    color: '#3B82F6',
  },
  {
    name: 'PHP 8+',
    role: 'Backend Logic & REST',
    level: 'Advanced',
    icon: Server,
    color: '#8B5CF6',
  },
  {
    name: 'Node.js',
    role: 'Server Runtime & APIs',
    level: 'Proficient',
    icon: Boxes,
    color: '#22C55E',
  },
  {
    name: 'Git & GitHub',
    role: 'Version Control & Flow',
    level: 'Daily Driver',
    icon: GitBranch,
    color: '#EA580C',
  },
  {
    name: 'Figma',
    role: 'UI/UX & Prototyping',
    level: 'Proficient',
    icon: FigmaIcon,
    color: '#EC4899',
  },
  {
    name: 'RESTful APIs',
    role: 'Integration & Endpoints',
    level: 'Advanced',
    icon: Zap,
    color: '#0284C7',
  },
  {
    name: 'Vite & Tooling',
    role: 'Build System & Performance',
    level: 'Advanced',
    icon: Workflow,
    color: '#A855F7',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: [0.16, 1, 0.3, 1],
    },
  },
};

const TechStackGrid = () => {
  return (
    <ParallaxSection
      id="skills"
      revealDirection="up"
      parallaxSpeed={0.25}
      className="py-20 md:py-28 border-b border-[#E8E8E2] bg-[#FAFAF7]"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Header terinspirasi Reference 2: Animated Indexed Title & Clean Sans */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 md:mb-16 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-2"
          >
            <span className="font-space text-xs uppercase tracking-widest text-[#0284C7] font-bold">
              // 01. TECHNOLOGIES & STACK
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#111111] tracking-tight">
              Tools of the <span className="font-serif italic font-normal text-[#0284C7]">Craft</span>
            </h2>
          </motion.div>
          
          <motion.p 
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="text-sm font-sans text-[#666666] max-w-md leading-relaxed"
          >
            A comprehensive toolset engineered for performance, maintainability, and clean user experiences across real-world systems.
          </motion.p>
        </div>

        {/* 12-Item Grid inspired by Ref 2 */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-5"
        >
          {TECH_STACK.map((tech, idx) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="tech-grid-card group relative p-5 md:p-6 rounded-2xl flex flex-col justify-between gap-4 cursor-default shadow-xs"
              >
                {/* Top Row: Icon & Tag */}
                <div className="flex items-center justify-between">
                  <div
                    className="w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-300"
                    style={{ backgroundColor: `${tech.color}18`, color: tech.color }}
                  >
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-space font-medium px-2 py-0.5 rounded-full bg-[#FAFAF7] border border-[#E8E8E2] text-[#666666] group-hover:border-[#38BDF8]/40 transition-colors">
                    {tech.level}
                  </span>
                </div>

                {/* Bottom Row: Name & Role */}
                <div>
                  <h3 className="font-sans font-bold text-base text-[#111111] tracking-tight group-hover:text-[#0284C7] transition-colors">
                    {tech.name}
                  </h3>
                  <p className="text-xs font-sans text-[#707070] mt-0.5">
                    {tech.role}
                  </p>
                </div>

                {/* Subtle Accent bottom border on hover */}
                <div className="absolute bottom-0 left-6 right-6 h-0.5 bg-[#38BDF8] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full origin-left" />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </ParallaxSection>
  );
};

export default TechStackGrid;
