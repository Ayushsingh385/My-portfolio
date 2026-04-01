'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Filter } from 'lucide-react';
import { Section, SectionHeader, Card, Badge } from '@/components/ui';
import { projectsData, projectFilters } from '@/data';
import { cn } from '@/lib/utils';

/**
 * Projects Section Component
 * Displays project cards with filtering functionality
 */
export function Projects() {
  const [activeFilter, setActiveFilter] = useState('all');

  const filteredProjects = activeFilter === 'all'
    ? projectsData
    : projectsData.filter((project) => project.category === activeFilter);

  return (
    <Section id="projects" background="gray">
      <SectionHeader
        title="My Projects"
        subtitle="A selection of projects I've worked on. Each one taught me something new."
      />

      {/* Filter Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex flex-wrap justify-center gap-3 mb-12"
      >
        <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-white dark:bg-gray-800 rounded-full shadow-sm">
          <Filter className="w-4 h-4 text-gray-400" />
          <span className="text-sm text-gray-500 dark:text-gray-400">Filter:</span>
        </div>
        {projectFilters.map((filter) => (
          <motion.button
            key={filter.value}
            onClick={() => setActiveFilter(filter.value)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={cn(
              'px-4 py-2 rounded-full text-sm font-medium transition-all',
              activeFilter === filter.value
                ? 'bg-primary-500 text-white shadow-lg'
                : 'bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700'
            )}
          >
            {filter.label}
          </motion.button>
        ))}
      </motion.div>

      {/* Projects Grid */}
      <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        <AnimatePresence mode="popLayout">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
            >
              <Card className="h-full overflow-hidden group" glass>
                {/* Project Image */}
                <div className="relative h-48 -mx-6 -mt-6 mb-4 overflow-hidden bg-gradient-to-br from-primary-500/20 to-accent-500/20">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-500/30 to-accent-500/30 flex items-center justify-center">
                    <span className="text-6xl">{project.image === '/projects/ecommerce.jpg' ? '🛒' : project.image === '/projects/ai-content.jpg' ? '🤖' : project.image === '/projects/taskmanager.jpg' ? '📋' : project.image === '/projects/fitness.jpg' ? '💪' : project.image === '/projects/portfolio-builder.jpg' ? '🎨' : '🏠'}</span>
                  </div>
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-gray-900/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <motion.a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                      aria-label={`View ${project.title} live demo`}
                    >
                      <ExternalLink className="w-5 h-5" />
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className="p-3 rounded-full bg-white text-gray-900 hover:bg-primary-500 hover:text-white transition-colors"
                      aria-label={`View ${project.title} source code`}
                    >
                      <Github className="w-5 h-5" />
                    </motion.a>
                  </div>
                  {/* Featured badge */}
                  {project.featured && (
                    <div className="absolute top-3 right-3">
                      <Badge variant="primary" size="sm">
                        Featured
                      </Badge>
                    </div>
                  )}
                </div>

                {/* Category Badge */}
                <div className="mb-3">
                  <Badge variant="secondary" size="sm">
                    {project.category}
                  </Badge>
                </div>

                {/* Project Info */}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.technologies.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 4 && (
                    <span className="px-2 py-1 text-xs bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400 rounded">
                      +{project.technologies.length - 4}
                    </span>
                  )}
                </div>
              </Card>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>

      {/* View More Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mt-12"
      >
        <a
          href="https://github.com/Ayushsingh385"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-6 py-3 text-primary-500 hover:text-primary-600 font-medium transition-colors"
        >
          View All Projects on GitHub
          <ExternalLink className="w-4 h-4" />
        </a>
      </motion.div>
    </Section>
  );
}