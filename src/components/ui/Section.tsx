'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface SectionProps {
  id: string;
  children: ReactNode;
  className?: string;
  containerClassName?: string;
  background?: 'white' | 'gray' | 'gradient';
}

/**
 * Section Component
 * A wrapper for page sections with consistent styling and animations
 */
export function Section({
  id,
  children,
  className,
  containerClassName,
  background = 'white',
}: SectionProps) {
  const backgrounds = {
    white: 'bg-white dark:bg-gray-900',
    gray: 'bg-gray-50 dark:bg-gray-800/50',
    gradient: 'bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800',
  };

  return (
    <section
      id={id}
      className={cn(
        'py-16 md:py-24 lg:py-32',
        backgrounds[background],
        className
      )}
    >
      <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8', containerClassName)}>
        {children}
      </div>
    </section>
  );
}

/**
 * Section Header Component
 * Consistent header styling for sections
 */
interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export function SectionHeader({ title, subtitle, centered = true, className }: SectionHeaderProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={cn('mb-12 md:mb-16', centered && 'text-center', className)}
    >
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white mb-4">
        {title}
        <span className="text-primary-500">.</span>
      </h2>
      {subtitle && (
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}