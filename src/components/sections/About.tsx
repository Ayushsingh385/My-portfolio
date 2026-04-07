/* eslint-disable @next/next/no-img-element */
'use client';

import { motion } from 'framer-motion';
import { Code2, Palette, Coffee, Rocket, MapPin, Mail, GraduationCap } from 'lucide-react';
import { Section, SectionHeader, Card } from '@/components/ui';
import { personalInfo } from '@/data';

/**
 * About Section Component
 * Personal introduction with skills highlights
 */
export function About() {
  const highlights = [
    {
      icon: Code2,
      title: 'Clean Code',
      description: 'Writing maintainable, scalable, and well-documented code.',
    },
    {
      icon: Palette,
      title: 'Design Focus',
      description: 'Creating intuitive and beautiful user interfaces.',
    },
    {
      icon: Coffee,
      title: 'Always Learning',
      description: 'Continuously improving and exploring new technologies.',
    },
    {
      icon: Rocket,
      title: 'Performance First',
      description: 'Building fast, optimized applications that scale.',
    },
  ];

  return (
    <Section id="about" background="gray">
      <SectionHeader
        title="About Me"
        subtitle="Get to know me better - my journey, passion, and what drives me as a developer."
      />

      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Image / Avatar Section */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div className="relative w-full max-w-md mx-auto">
            {/* Animated decorative background */}
            <motion.div
              animate={{ rotate: [3, -3, 3], scale: [1.05, 1, 1.05] }}
              transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
              className="absolute inset-0 rounded-2xl opacity-20"
              style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)' }}
            />

            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl p-8 backdrop-blur-sm border border-white/10 dark:border-gray-700/30">
              {/* Avatar Image */}
              <div className="aspect-square rounded-xl overflow-hidden flex items-center justify-center shadow-glow-primary">
                <div className="w-full h-full" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)' }}>
                {personalInfo.avatar ? (
                  <img
                    src={personalInfo.avatar}
                    alt={personalInfo.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      target.parentElement!.innerHTML = `
                        <span class="text-8xl font-bold text-white">
                          ${personalInfo.name.split(' ').map(n => n[0]).join('')}
                        </span>
                      `;
                    }}
                  />
                ) : (
                  <span className="text-8xl font-bold text-white">
                    {personalInfo.name.split(' ').map(n => n[0]).join('')}
                  </span>
                )}
                </div>
              </div>

              {/* Info cards */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -bottom-4 -right-4 bg-white dark:bg-[#0f172a] rounded-xl p-4 shadow-lg border border-gray-100/50 dark:border-gray-700/30"
              >
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary-400" />
                  <span className="text-gray-600 dark:text-gray-300">{personalInfo.location}</span>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ scale: 1.05 }}
                className="absolute -top-4 -left-4 bg-white dark:bg-[#0f172a] rounded-xl p-4 shadow-lg border border-gray-100/50 dark:border-gray-700/30"
              >
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="w-4 h-4 text-accent-500" />
                  <span className="text-gray-600 dark:text-gray-300">CS Student</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Content Section */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          {/* Bio */}
          <div className="prose prose-lg dark:prose-invert">
            {personalInfo.bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-gray-600 dark:text-gray-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>

          {/* Quick Info */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href={`mailto:${personalInfo.email}`}
              whileHover={{ scale: 1.05 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-sm transition-all duration-300 border"
              style={{
                background: 'linear-gradient(135deg, rgba(99,102,241,0.1), rgba(139,92,246,0.1))',
                borderColor: 'rgba(99,102,241,0.2)',
                color: '#818cf8',
              }}
            >
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </motion.a>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-white/5 text-gray-600 dark:text-gray-400 text-sm border border-gray-200/50 dark:border-gray-700/30">
              <MapPin className="w-4 h-4" />
              {personalInfo.location}
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mt-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <Card className="p-4 text-center" glass>
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-primary-400" />
                  <h4 className="font-semibold text-gray-900 dark:text-white mb-1">
                    {item.title}
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    {item.description}
                  </p>
                </Card>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Section>
  );
}