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
            {/* Decorative background */}
            <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-accent-500 rounded-2xl transform rotate-3 scale-105 opacity-20" />

            {/* Main image container */}
            <div className="relative bg-gradient-to-br from-primary-500/10 to-accent-500/10 rounded-2xl p-8 backdrop-blur-sm">
              {/* Avatar Image */}
              <div className="aspect-square rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 overflow-hidden flex items-center justify-center shadow-inner">
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

              {/* Info cards */}
              <div className="absolute -bottom-4 -right-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 text-sm">
                  <MapPin className="w-4 h-4 text-primary-500" />
                  <span className="text-gray-600 dark:text-gray-300">{personalInfo.location}</span>
                </div>
              </div>

              <div className="absolute -top-4 -left-4 bg-white dark:bg-gray-800 rounded-xl p-4 shadow-lg">
                <div className="flex items-center gap-2 text-sm">
                  <GraduationCap className="w-4 h-4 text-primary-500" />
                  <span className="text-gray-600 dark:text-gray-300">CS Student</span>
                </div>
              </div>
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
            <a
              href={`mailto:${personalInfo.email}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-50 dark:bg-primary-900/20 text-primary-600 dark:text-primary-400 text-sm hover:bg-primary-100 dark:hover:bg-primary-900/30 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {personalInfo.email}
            </a>
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-400 text-sm">
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
                  <item.icon className="w-8 h-8 mx-auto mb-2 text-primary-500" />
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