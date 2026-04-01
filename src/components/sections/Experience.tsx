'use client';

import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, MapPin, Calendar } from 'lucide-react';
import { Section, SectionHeader, Badge } from '@/components/ui';
import { experienceData } from '@/data';
import { formatDate } from '@/lib/utils';

/**
 * Experience Section Component
 * Timeline display of work experience and education
 */
export function Experience() {
  return (
    <Section id="experience" background="white">
      <SectionHeader
        title="Experience & Education"
        subtitle="My academic background and key educational milestones."
      />

      <div className="relative">
        {/* Timeline line */}
        <div className="absolute left-0 md:left-1/2 transform md:-translate-x-px top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 via-accent-500 to-primary-500 hidden md:block" />

        <div className="space-y-12">
          {experienceData.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`relative flex flex-col md:flex-row gap-8 ${
                index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              }`}
            >
              {/* Timeline dot */}
              <div className="absolute left-0 md:left-1/2 transform -translate-x-1/2 -translate-y-0 top-0 hidden md:block">
                <div className={`w-12 h-12 rounded-full flex items-center justify-center ${
                  exp.type === 'work'
                    ? 'bg-gradient-to-br from-primary-500 to-accent-500'
                    : 'bg-gradient-to-br from-accent-500 to-primary-500'
                }`}>
                  {exp.type === 'work' ? (
                    <Briefcase className="w-5 h-5 text-white" />
                  ) : (
                    <GraduationCap className="w-5 h-5 text-white" />
                  )}
                </div>
              </div>

              {/* Content */}
              <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-12' : 'md:pl-12'}`}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="relative bg-white dark:bg-gray-800 rounded-2xl p-6 shadow-card dark:shadow-card-dark border border-gray-100 dark:border-gray-700"
                >
                  {/* Type badge */}
                  <div className="absolute -top-3 left-6">
                    <Badge variant={exp.type === 'work' ? 'primary' : 'info'}>
                      {exp.type === 'work' ? 'Work' : 'Education'}
                    </Badge>
                  </div>

                  {/* Header */}
                  <div className="mb-4 mt-2">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                      {exp.title}
                    </h3>
                    <p className="text-primary-500 font-medium">{exp.company}</p>
                  </div>

                  {/* Meta info */}
                  <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {formatDate(exp.startDate)} - {exp.endDate === 'Present' ? 'Present' : formatDate(exp.endDate)}
                    </span>
                    <span className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      {exp.location}
                    </span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {exp.description}
                  </p>

                  {/* Achievements */}
                  <div className="mb-4">
                    <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                      Key Achievements:
                    </h4>
                    <ul className="space-y-2">
                      {exp.achievements.slice(0, 3).map((achievement, i) => (
                        <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary-500 mt-1.5 flex-shrink-0" />
                          {achievement}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* Empty space for timeline layout */}
              <div className="hidden md:block flex-1" />
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}