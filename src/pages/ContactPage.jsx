import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send } from 'lucide-react';

const ContactPage = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitting(true);
    setTimeout(() => {
      alert('Thank you for your message! This is a demo submission.');
      setFormData({ name: '', email: '', message: '' });
      setSubmitting(false);
    }, 1200);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -15 }}
      transition={{ duration: 0.3 }}
      className="flex flex-col gap-8"
    >
      <div className="flex flex-col gap-2 border-b border-border-custom pb-4">
        <h1 className="text-4xl font-space font-bold text-text-main">Let's Connect</h1>
        <p className="text-text-muted">Feel free to reach out for internship or development opportunities.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Info Column */}
        <div className="md:col-span-2 flex flex-col gap-6">
          <div className="glassmorphism p-6 rounded-xl flex flex-col gap-4">
            <h3 className="font-space text-lg font-bold text-text-main">Contact Details</h3>
            <p className="text-sm text-text-muted leading-relaxed">
              I'm active on social channels and check emails regularly.
            </p>
            
            <div className="flex flex-col gap-3 mt-2">
              <a href="mailto:dandyskie@gmail.com" className="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors">
                <Mail className="w-4 h-4 text-primary" /> dandyskie@gmail.com
              </a>
              <a href="https://github.com/Dandyskie" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors">
                <span className="text-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg>
                </span>
                github.com/Dandyskie
              </a>
              <a href="https://www.linkedin.com/in/dandy-rama-wiguna-3575ab370/" target="_blank" rel="noreferrer" className="flex items-center gap-3 text-sm text-text-muted hover:text-primary transition-colors">
                <span className="text-primary flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg>
                </span>
                linkedin.com/in/dandy-rama-wiguna
              </a>
            </div>
          </div>
        </div>

        {/* Form Column */}
        <form onSubmit={handleSubmit} className="md:col-span-3 glassmorphism p-6 rounded-xl flex flex-col gap-4">
          <h3 className="font-space text-lg font-bold text-text-main">Send a Message</h3>
          
          <div className="flex flex-col gap-1">
            <label className="text-xs text-text-muted font-bold font-space uppercase">Name</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="Your Name"
              className="px-4 py-3 rounded-lg border border-border-custom bg-transparent outline-none focus:border-primary text-sm text-text-main"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-text-muted font-bold font-space uppercase">Email</label>
            <input
              type="email"
              required
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="your.email@example.com"
              className="px-4 py-3 rounded-lg border border-border-custom bg-transparent outline-none focus:border-primary text-sm text-text-main"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs text-text-muted font-bold font-space uppercase">Message</label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Write your message here..."
              className="px-4 py-3 rounded-lg border border-border-custom bg-transparent outline-none focus:border-primary text-sm text-text-main resize-none"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="mt-2 py-3 rounded-lg bg-primary hover:bg-primary-hover disabled:opacity-50 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 cursor-pointer shadow-md"
          >
            {submitting ? 'Sending...' : <><Send className="w-4 h-4" /> Send Message</>}
          </button>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactPage;
