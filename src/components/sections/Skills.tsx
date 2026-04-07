'use client';

import { motion } from 'framer-motion';
import { Section, SectionHeader, Card, TechBadge } from '@/components/ui';
import { skillsData } from '@/data';

/**
 * Skills Section Component
 * Displays technical skills with progress bars and technology icons
 */
export function Skills() {
  return (
    <Section id="skills" background="white">
      <SectionHeader
        title="Skills & Technologies"
        subtitle="Technologies I stay up-to-date with and use in my projects."
      />

      {/* Skill Categories with Progress Bars */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-center mb-20">
        {skillsData.categories.map((category, categoryIndex) => (
          <motion.div
            key={category.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: categoryIndex * 0.1 }}
          >
            <Card className="h-full" glass>
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 rounded-xl text-white" style={{ background: 'linear-gradient(135deg, #6366f1, #8b5cf6, #ec4899)' }}>
                  <category.icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
                  {category.name}
                </h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: skillIndex * 0.05 }}
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="text-xs text-gray-500 dark:text-gray-400">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="h-2 bg-gray-200 dark:bg-gray-800 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: skillIndex * 0.1 }}
                        className="h-full rounded-full"
                        style={{ background: 'linear-gradient(90deg, #6366f1, #8b5cf6, #ec4899)' }}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Technology Icons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
          Technologies I Work With
        </h3>
        <div className="flex flex-wrap justify-center gap-3">
          {skillsData.technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.2, 
                ease: 'easeOut',
                scale: { delay: index * 0.03 }, 
                opacity: { delay: index * 0.03 } 
              }}
              whileHover={{ 
                scale: 1.15, 
                y: -5,
                boxShadow: '0 0 15px rgba(99, 102, 241, 0.3)',
              }}
            >
              <TechBadge name={tech.name} icon={tech.icon} />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Stats for Students */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mt-12 grid md:grid-cols-3 gap-6"
      >
        <Card className="text-center p-6" gradient>
          <div className="text-4xl font-bold gradient-text mb-2">10+</div>
          <p className="text-gray-600 dark:text-gray-400">Projects Completed</p>
        </Card>
        <Card className="text-center p-6" gradient>
          <div className="text-4xl font-bold gradient-text mb-2">500+</div>
          <p className="text-gray-600 dark:text-gray-400">Hours of Coding</p>
        </Card>
        <Card className="text-center p-6" gradient>
          <div className="text-4xl font-bold gradient-text mb-2">8</div>
          <p className="text-gray-600 dark:text-gray-400">Certifications</p>
        </Card>
      </motion.div>
    </Section>
  );
}