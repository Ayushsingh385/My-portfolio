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
      initial={{ y: 0, boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.05)' }}
      animate={{ y: 0, boxShadow: '0 4px 20px 0 rgba(0, 0, 0, 0.05)' }}
      whileHover={
        hover
          ? {
              y: -5,
              boxShadow:
                '0 25px 50px -12px rgba(0, 0, 0, 0.15), 0 0 15px rgba(10, 165, 233, 0.1)',
            }
          : undefined
      }
      transition={{ duration: 0.4, ease: [0.23, 1, 0.32, 1] }}
      className={cn(
        'rounded-2xl p-6 border border-gray-100/50 dark:border-gray-700/50 transition-colors duration-300',
        glass
          ? 'glass-card'
          : 'bg-white dark:bg-gray-800 shadow-card dark:shadow-card-dark',
        gradient && 'relative overflow-hidden',
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