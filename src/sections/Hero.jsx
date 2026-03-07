import React from 'react';
import Button from '../components/Button';
import SocialIcon from '../components/SocialIcon';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-24 relative overflow-hidden bg-radial-lighting">

      <div className="container mx-auto px-6 md:px-12 relative z-10 flex flex-col lg:flex-row items-center gap-16 max-w-7xl">
        
        {/* Text Content */}
        <div className="flex-1 text-center lg:text-left animate-[fadeIn_1s_ease-out]">
          <div className="inline-block px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-slate-300 text-sm font-medium mb-8">
            ✨ Available for new opportunities
          </div>
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold font-poppins text-white leading-tight mb-6">
            Hi, I'm <span className="text-primary">Dandy Rama Wiguna</span>
          </h1>
          
          <h2 className="text-2xl lg:text-3xl text-slate-300 font-medium mb-8">
            Junior Frontend Developer
          </h2>
          
          <p className="text-lg text-slate-400 max-w-2xl mb-10 leading-relaxed mx-auto lg:mx-0">
            Hi! I'm Dandy Rama Wiguna, a PPLG student and aspiring Junior Frontend Developer who enjoys building modern and responsive websites. I'm passionate about web development and always eager to learn new technologies.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start mb-12">
            <Button variant="primary" onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>
              View Projects
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
            </Button>
            <Button variant="outline" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
              Contact Me
            </Button>
          </div>
          
          <div className="flex items-center gap-4 justify-center lg:justify-start">
            <SocialIcon 
              href="https://github.com/Dandyskie" 
              label="GitHub"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>} 
            />
            <SocialIcon 
              href="https://www.linkedin.com/in/dandy-rama-wiguna-3575ab370/" 
              label="LinkedIn"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>} 
            />
            <SocialIcon 
              href="https://www.instagram.com/dandyskiee" 
              label="Instagram"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>} 
            />
            <SocialIcon 
              href="mailto:dandyskie@gmail.com" 
              label="Email"
              icon={<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>} 
            />
          </div>
        </div>
        
        {/* Visual Element (Right side) */}
        <div className="hidden lg:block flex-1 relative animate-[fadeIn_1s_ease-out_0.5s_both]">
          <div className="w-full max-w-md mx-auto relative group">
            {/* Minimal SaaS Code/UI Mockup Card */}
            <div className="absolute inset-x-0 -bottom-6 h-64 bg-primary/20 blur-3xl rounded-full transform group-hover:bg-primary/30 transition-colors duration-500"></div>
            <div className="relative bg-slate-900/80 border border-white/10 backdrop-blur-xl rounded-2xl shadow-2xl overflow-hidden card-lift">
              {/* Mockup Header */}
              <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-slate-900/50">
                <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
                <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
              </div>
              {/* Mockup Body */}
              <div className="p-6 font-mono text-sm leading-relaxed text-slate-300">
                <p><span className="text-blue-400">import</span> React <span className="text-blue-400">from</span> 'react';</p>
                <p className="mt-2"><span className="text-blue-400">const</span> Developer = () =&gt; {'{'}</p>
                <p className="ml-4 mt-2"><span className="text-blue-400">return</span> (</p>
                <p className="ml-8 text-accent">&lt;Portfolio</p>
                <p className="ml-12">{"skills={['React', 'Tailwind', 'Laravel']}"}</p>
                <p className="ml-12">focus="Scalable Architecture"</p>
                <p className="ml-8 text-accent">/&gt;</p>
                <p className="ml-4">);</p>
                <p>{'}'};</p>
                <p className="mt-4"><span className="text-blue-400">export default</span> Developer;</p>
              </div>
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -right-6 top-10 bg-slate-800/90 border border-white/10 backdrop-blur-md rounded-xl p-3 shadow-xl transform translate-y-4 group-hover:-translate-y-2 transition-transform duration-700 ease-in-out delay-100">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-blue-500/20 flex items-center justify-center text-blue-400">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>
                </div>
                <div>
                  <div className="text-xs text-slate-400 font-medium">Performance</div>
                  <div className="text-sm font-bold text-white">99/100</div>
                </div>
              </div>
            </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
};

export default Hero;
