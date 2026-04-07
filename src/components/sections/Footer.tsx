'use client';

import { motion } from 'framer-motion';
import { Heart, Github, Linkedin, Mail, ArrowUp } from 'lucide-react';
import { personalInfo, navLinks } from '@/data';

/**
 * Footer Component
 * Site footer with social links and quick navigation
 */
export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-[#020617] text-white">
      {/* Gradient top border */}
      <div className="absolute top-0 left-0 right-0 h-1" style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899, #8b5cf6, #6366f1)' }} />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <motion.a
              href="#hero"
              onClick={(e) => {
                e.preventDefault();
                scrollToTop();
              }}
              className="inline-block text-2xl font-bold mb-4"
              whileHover={{ scale: 1.05 }}
            >
              <span className="gradient-text">{personalInfo.name.split(' ')[0]}</span>
              <span className="text-primary-500">.</span>
            </motion.a>
            <p className="text-gray-400 mb-4 max-w-xs">
              {personalInfo.tagline}
            </p>
            {/* Social Links */}
            <div className="flex gap-3">
              {[
                { name: 'GitHub', icon: Github, href: 'https://github.com/Ayushsingh385' },
                { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/ayush-kumar-1singh' },
                { name: 'Email', icon: Mail, href: `mailto:${personalInfo.email}` },
              ].map((social) => (
                <motion.a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2 rounded-lg bg-white/5 text-gray-400 hover:text-white transition-all duration-300 border border-white/5 hover:border-primary-500/50"
                  style={{ '--hover-bg': 'rgba(99,102,241,0.15)' } as React.CSSProperties}
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}
                    className="text-gray-400 hover:text-primary-400 transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="hover:text-primary-400 transition-colors"
                >
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex items-center gap-2">
                <span className="w-4 h-4 flex items-center justify-center">📍</span>
                <span>{personalInfo.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/5 pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="text-gray-500 text-sm flex items-center gap-1">
              © {currentYear} {personalInfo.name}. Made with
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              using Next.js & Tailwind CSS
            </p>

            {/* Back to top */}
            <motion.button
              onClick={scrollToTop}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 text-gray-400 hover:text-white transition-all duration-300 border border-white/10 hover:border-primary-500/50"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
              Back to top
            </motion.button>
          </div>
        </div>
      </div>
    </footer>
  );
}