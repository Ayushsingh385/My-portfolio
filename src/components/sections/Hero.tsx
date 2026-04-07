'use client';

import { motion } from 'framer-motion';
import { ArrowDown, Download, Mail } from 'lucide-react';
import { Button } from '@/components/ui';
import { personalInfo, socialLinks } from '@/data';

/**
 * Hero Section Component
 * The landing section with animated introduction
 */
export function Hero() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.23, 1, 0.32, 1] },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Deep midnight background with animated gradient mesh */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-primary-50/20 dark:from-[#020617] dark:via-[#0a0f1e] dark:to-[#0f0720]">
        {/* Animated gradient orbs */}
        <motion.div
          animate={{
            x: [0, 30, -20, 0],
            y: [0, -30, 20, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{
            x: [0, -20, 30, 0],
            y: [0, 20, -30, 0],
            scale: [1, 0.95, 1.1, 1],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 70%)' }}
        />
        <motion.div
          animate={{
            x: [0, 15, -15, 0],
            y: [0, -15, 15, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full blur-3xl"
          style={{ background: 'radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative z-10 container mx-auto px-4 sm:px-6 lg:px-8 py-20"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Greeting */}
          <motion.div variants={itemVariants} className="mb-6">
            <motion.span
              whileHover={{ scale: 1.05 }}
              className="inline-block px-5 py-2.5 rounded-full text-sm font-medium border"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))',
                borderColor: 'rgba(99,102,241,0.2)',
                color: '#818cf8',
              }}
            >
              <span className="animate-wave inline-block mr-1">👋</span> Welcome to my portfolio
            </motion.span>
          </motion.div>

          {/* Name & Greeting */}
          <motion.h1
            variants={itemVariants}
            className="flex flex-col items-center gap-3 mb-8"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
              Hi, I&apos;m
            </span>
            <span className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-none">
              <span className="gradient-text whitespace-nowrap">{personalInfo.name}</span>
            </span>
          </motion.h1>

          {/* Title */}
          <motion.h2
            variants={itemVariants}
            className="text-xl sm:text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-6"
          >
            {personalInfo.title}
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            className="text-lg text-gray-500 dark:text-gray-400 mb-10 max-w-2xl mx-auto"
          >
            {personalInfo.tagline}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10"
          >
            <Button
              variant="primary"
              size="lg"
              leftIcon={<Mail className="w-5 h-5" />}
              onClick={() => scrollToSection('#contact')}
            >
              Get In Touch
            </Button>
            <motion.a
              href={personalInfo.resumeUrl}
              download
              whileHover={{ scale: 1.03, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-[#0f172a] border-2 border-gray-200 dark:border-gray-700 rounded-full shadow-md hover:shadow-lg hover:border-primary-500 dark:hover:border-primary-400 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
            {socialLinks.map((social, index) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 hover:text-white transition-all duration-300 border border-transparent hover:border-primary-500/50"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2 + index * 0.1 }}
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  backgroundColor: 'rgba(99, 102, 241, 0.2)',
                  boxShadow: '0 0 20px rgba(99, 102, 241, 0.3)',
                }}
                whileTap={{ scale: 0.95 }}
                aria-label={social.ariaLabel}
              >
                <social.icon className="w-5 h-5" />
              </motion.a>
            ))}
          </motion.div>
        </div>

      </motion.div>
      
      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-16 inset-x-0 flex justify-center z-20"
      >
        <motion.button
          onClick={() => scrollToSection('#about')}
          className="flex flex-col items-center text-gray-400 dark:text-gray-500 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          aria-label="Scroll to about section"
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <ArrowDown className="w-5 h-5" />
        </motion.button>
      </motion.div>

      {/* Decorative floating elements with gradient borders */}
      <motion.div
        animate={{ y: [0, -20, 0], rotate: [0, 180, 360] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-20 left-10 w-20 h-20 rounded-full"
        style={{ border: '2px solid rgba(99,102,241,0.2)' }}
      />
      <motion.div
        animate={{ y: [0, 15, 0], rotate: [45, 90, 45] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute top-40 right-20 w-10 h-10 rounded-lg"
        style={{ background: 'rgba(236,72,153,0.15)' }}
      />
      <motion.div
        animate={{ y: [0, -10, 0], rotate: [12, -12, 12] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut' }}
        className="absolute bottom-40 left-20 w-16 h-16 rounded-lg"
        style={{ border: '2px solid rgba(139,92,246,0.2)' }}
      />
      {/* Small glowing dots */}
      <div className="absolute top-1/3 right-10 w-2 h-2 rounded-full bg-primary-500/50 animate-glow-dot" />
      <div className="absolute bottom-1/3 left-16 w-2 h-2 rounded-full bg-accent-500/50 animate-glow-dot animation-delay-500" />
      <div className="absolute top-2/3 right-1/3 w-1.5 h-1.5 rounded-full bg-secondary-500/50 animate-glow-dot animation-delay-300" />
    </section>
  );
}