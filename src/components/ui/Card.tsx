'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  glass?: boolean;
  gradient?: boolean;
}

/**
 * Card Component
 * A versatile card component with optional glassmorphism and gradient effects
 */
export function Card({ children, className, hover = true, glass = false, gradient = false }: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      whileHover={hover ? { y: -5, transition: { duration: 0.2 } } : undefined}
      className={cn(
        'rounded-2xl p-6',
        glass
          ? 'glass-card'
          : 'bg-white dark:bg-gray-800 shadow-card dark:shadow-card-dark',
        gradient && 'relative overflow-hidden',
        hover && 'transition-shadow duration-300 hover:shadow-2xl',
        className
      )}
    >
      {/* Gradient border effect */}
      {gradient && (
        <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-primary-500/20 to-accent-500/20 -z-10" />
      )}
      {children}
    </motion.div>
  );
}

/**
 * Card Header Component
 */
interface CardHeaderProps {
  children: ReactNode;
  className?: string;
}

export function CardHeader({ children, className }: CardHeaderProps) {
  return (
    <div className={cn('mb-4', className)}>
      {children}
    </div>
  );
}

/**
 * Card Title Component
 */
interface CardTitleProps {
  children: ReactNode;
  className?: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
}

export function CardTitle({ children, className, as: Tag = 'h3' }: CardTitleProps) {
  return (
    <Tag className={cn('text-xl font-bold text-gray-900 dark:text-white', className)}>
      {children}
    </Tag>
  );
}

/**
 * Card Description Component
 */
interface CardDescriptionProps {
  children: ReactNode;
  className?: string;
}

export function CardDescription({ children, className }: CardDescriptionProps) {
  return (
    <p className={cn('text-gray-600 dark:text-gray-400 text-sm', className)}>
      {children}
    </p>
  );
}

/**
 * Card Content Component
 */
interface CardContentProps {
  children: ReactNode;
  className?: string;
}

export function CardContent({ children, className }: CardContentProps) {
  return (
    <div className={cn('space-y-4', className)}>
      {children}
    </div>
  );
}

/**
 * Card Footer Component
 */
interface CardFooterProps {
  children: ReactNode;
  className?: string;
}

export function CardFooter({ children, className }: CardFooterProps) {
  return (
    <div className={cn('mt-4 pt-4 border-t border-gray-100 dark:border-gray-700', className)}>
      {children}
    </div>
  );
}