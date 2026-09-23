import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Send, CheckCircle2 } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { GithubIcon, LinkedinIcon } from '../components/SocialIcons';
import BlurText from '../components/BlurText';

const ContactSection = () => {
  const { t } = useTranslation();
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSent, setIsSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSent(true);
      setFormData({ name: '', email: '', message: '' });
      setTimeout(() => setIsSent(false), 5000);
    }, 1000);
  };

  return (
    <section id="contact" className="py-24 md:py-32 border-t border-[#E8E8E2] bg-[#FAFAF7]">
      <div className="max-w-6xl mx-auto px-6 md:px-12">

        <div className="mb-12 flex flex-col gap-3">
          <BlurText
            key={t('contact.title')}
            text={t('contact.title')}
            delay={40}
            animateBy="words"
            direction="top"
            className="text-3xl sm:text-4xl md:text-5xl font-sans font-bold text-[#111] tracking-tight"
          />
          <p className="text-sm sm:text-base font-sans text-[#777] max-w-md">
            {t('contact.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-4"
          >
            <a
              href="mailto:dandyskie@gmail.com"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#38BDF8]/50 transition-all group"
            >
              <div className="p-2.5 rounded-xl bg-[#E0F2FE] text-[#0284C7] group-hover:scale-105 transition-transform">
                <Mail className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-sans text-[#999]">Email</p>
                <p className="text-sm font-sans font-medium text-[#111]">dandyskie@gmail.com</p>
              </div>
            </a>

            <a
              href="https://github.com/Dandyskie"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#38BDF8]/50 transition-all group"
            >
              <div className="p-2.5 rounded-xl bg-[#E0F2FE] text-[#0284C7] group-hover:scale-105 transition-transform">
                <GithubIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-sans text-[#999]">GitHub</p>
                <p className="text-sm font-sans font-medium text-[#111]">github.com/Dandyskie</p>
              </div>
            </a>

            <a
              href="https://www.linkedin.com/in/dandy-rama-wiguna-3575ab370/"
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-4 p-4 rounded-2xl bg-white border border-[#E8E8E2] hover:border-[#38BDF8]/50 transition-all group"
            >
              <div className="p-2.5 rounded-xl bg-[#E0F2FE] text-[#0284C7] group-hover:scale-105 transition-transform">
                <LinkedinIcon className="w-4 h-4" />
              </div>
              <div>
                <p className="text-xs font-sans text-[#999]">LinkedIn</p>
                <p className="text-sm font-sans font-medium text-[#111]">Dandy Rama Wiguna</p>
              </div>
            </a>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="lg:col-span-7"
          >
            <form
              onSubmit={handleSubmit}
              className="p-6 md:p-8 rounded-2xl bg-white border border-[#E8E8E2] flex flex-col gap-5"
            >
              {isSent && (
                <div className="p-4 rounded-xl bg-[#E0F2FE] border border-[#BAE6FD] flex items-center gap-2 text-[#0369A1] text-sm font-sans font-medium">
                  <CheckCircle2 className="w-4 h-4 text-[#0284C7] shrink-0" />
                  <span>{t('contact.successMsg')}</span>
                </div>
              )}

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-sans font-medium text-[#555]">
                  {t('contact.nameLabel')}
                </label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder={t('contact.namePlaceholder')}
                  className="px-4 py-3 rounded-xl border border-[#E8E8E2] bg-[#FAFAF7] focus:bg-white focus:border-[#38BDF8] text-sm text-[#111] outline-none transition-colors font-sans"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-sans font-medium text-[#555]">
                  {t('contact.emailLabel')}
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder={t('contact.emailPlaceholder')}
                  className="px-4 py-3 rounded-xl border border-[#E8E8E2] bg-[#FAFAF7] focus:bg-white focus:border-[#38BDF8] text-sm text-[#111] outline-none transition-colors font-sans"
                />
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-sm font-sans font-medium text-[#555]">
                  {t('contact.messageLabel')}
                </label>
                <textarea
                  rows={4}
                  required
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder={t('contact.messagePlaceholder')}
                  className="px-4 py-3 rounded-xl border border-[#E8E8E2] bg-[#FAFAF7] focus:bg-white focus:border-[#38BDF8] text-sm text-[#111] outline-none transition-colors resize-none font-sans"
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="mt-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#111] hover:bg-[#222] text-white font-sans text-sm font-semibold transition-colors disabled:opacity-60 cursor-pointer shadow-sm"
              >
                {isSubmitting ? (
                  <span>{t('contact.sending')}</span>
                ) : (
                  <>
                    <span>{t('contact.sendBtn')}</span>
                    <Send className="w-3.5 h-3.5 text-[#38BDF8]" />
                  </>
                )}
              </button>
            </form>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
