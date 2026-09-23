import React from 'react';

const TECH_ITEMS = [
  'Next.js', 'React.js', 'Vue.js', 'JavaScript', 'TypeScript', 'Tailwind CSS',
  'Laravel', 'PHP', 'Node.js', 'MySQL', 'PostgreSQL',
  'Git & GitHub', 'Figma', 'REST APIs', 'Vite',
];

const TechMarquee = () => {
  const items = [...TECH_ITEMS, ...TECH_ITEMS];

  return (
    <section className="py-5 border-y border-[#E8E8E2] bg-white/50 overflow-hidden">
      <div className="marquee-track flex items-center gap-8 whitespace-nowrap">
        {items.map((tech, idx) => (
          <span
            key={idx}
            className="flex items-center gap-3 text-sm font-sans font-medium text-[#888] shrink-0 select-none"
          >
            <span className="w-1 h-1 rounded-full bg-[#38BDF8]" />
            {tech}
          </span>
        ))}
      </div>
    </section>
  );
};

export default TechMarquee;
