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
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: 'easeOut' },
    },
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        {/* Gradient orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/10 dark:bg-primary-500/5 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent-500/10 dark:bg-accent-500/5 rounded-full blur-3xl animate-pulse-slow animation-delay-500" />
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
            <span className="inline-block px-4 py-2 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 text-sm font-medium">
              👋 Welcome to my portfolio
            </span>
          </motion.div>

          {/* Name & Greeting */}
          <motion.h1
            variants={itemVariants}
            className="flex flex-col items-center gap-3 mb-8"
          >
            <span className="text-xl sm:text-2xl md:text-3xl font-medium text-gray-600 dark:text-gray-400 flex items-center gap-2">
              Hi, I&apos;m <span className="animate-wave">👋</span>
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
            <a
              href={personalInfo.resumeUrl}
              download
              className="inline-flex items-center justify-center px-6 py-3 text-base font-medium text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-full shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div variants={itemVariants} className="flex items-center justify-center gap-4">
            {socialLinks.map((social) => (
              <motion.a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-primary-100 dark:hover:bg-primary-900/30 hover:text-primary-500 dark:hover:text-primary-400 transition-colors"
                whileHover={{ scale: 1.1, y: -3 }}
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
        variants={itemVariants}
        initial="hidden"
        animate="visible"
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

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 border-2 border-primary-500/20 rounded-full animate-float" />
      <div className="absolute top-40 right-20 w-10 h-10 bg-accent-500/20 rounded-lg rotate-45 animate-float animation-delay-200" />
      <div className="absolute bottom-40 left-20 w-16 h-16 border-2 border-accent-500/20 rounded-lg rotate-12 animate-float animation-delay-400" />
    </section>
  );
}