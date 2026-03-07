import React from 'react';
import Button from '../components/Button';
import SocialIcon from '../components/SocialIcon';

const Contact = () => {
  return (
    <footer id="contact" className="pt-24 bg-slate-950 border-t border-white/10 relative overflow-hidden">
      {/* Top CTA Section */}
      <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl relative z-10 pb-20">
        <h2 className="text-4xl md:text-5xl font-bold font-poppins text-white mb-6">
          Interested in working together?
        </h2>
        <p className="text-lg text-slate-400 mb-10 max-w-2xl mx-auto">
          I'm currently looking for new opportunities. Whether you have a question, a project proposal, or just want to say hi, I'll try my best to get back to you!
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button 
            variant="primary" 
            className="text-base px-8 py-3.5 shadow-lg shadow-blue-500/20"
            onClick={() => window.location.href = "https://wa.me/6282225532171"}
          >
            Let's Talk
          </Button>
          <Button 
            variant="outline" 
            className="text-base px-8 py-3.5"
            onClick={() => window.open("https://www.linkedin.com/in/dandy-rama-wiguna-3575ab370/", "_blank")}
          >
            Connect on LinkedIn
          </Button>
        </div>
      </div>
      
      {/* Professional Footer */}
      <div className="border-t border-white/5 bg-slate-950/80 backdrop-blur-md relative z-10">
        <div className="container mx-auto px-6 md:px-12 py-12 max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10 md:gap-8">
            
            {/* Logo Branch */}
            <div className="md:col-span-2">
              <a href="#home" className="text-2xl font-bold font-poppins text-white tracking-tight mb-4 inline-block">
                Dandy<span className="text-primary">.dev</span>
              </a>
              <p className="text-slate-400 text-sm max-w-xs leading-relaxed">
                Frontend Developer specializing in scalable React applications, modern UI/UX design, and robust web architectures.
              </p>
            </div>
            
            {/* Quick Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Navigation</h4>
              <ul className="space-y-3 test-sm text-slate-400">
                <li><a href="#home" className="hover:text-primary transition-colors">Home</a></li>
                <li><a href="#skills" className="hover:text-primary transition-colors">Technology</a></li>
                <li><a href="#projects" className="hover:text-primary transition-colors">Projects</a></li>
                <li><a href="#experience" className="hover:text-primary transition-colors">Experience</a></li>
              </ul>
            </div>
            
            {/* Social Links */}
            <div>
              <h4 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Connect</h4>
              <div className="flex gap-4">
                <a href="https://github.com/Dandyskie"  target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </a>
                <a href="https://www.linkedin.com/in/dandy-rama-wiguna-3575ab370/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-primary transition-colors p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </a>
                <a href="mailto:dandyskie@gmail.com" className="text-slate-400 hover:text-white transition-colors p-2 rounded-lg hover:bg-white/5 border border-transparent hover:border-white/10">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-slate-500 text-sm">
              © {new Date().getFullYear()} Dandy Wiguna. All rights reserved.
            </p>
            <div className="flex gap-4 text-sm text-slate-500">
              <span className="hover:text-slate-300 cursor-pointer transition-colors">Privacy Policy</span>
              <span className="hover:text-slate-300 cursor-pointer transition-colors">Terms of Service</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Contact;
