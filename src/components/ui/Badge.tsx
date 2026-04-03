'use client';

import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BadgeProps {
  children: ReactNode;
  variant?: 'primary' | 'secondary' | 'success' | 'warning' | 'info';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

/**
 * Badge Component
 * A small label component for displaying status or category
 */
export function Badge({ children, variant = 'primary', size = 'md', className }: BadgeProps) {
  const variants = {
    primary: 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300',
    secondary: 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
    success: 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
    warning: 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
    info: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
  };

  const sizes = {
    sm: 'px-2 py-0.5 text-xs',
    md: 'px-3 py-1 text-sm',
    lg: 'px-4 py-1.5 text-base',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variants[variant],
        sizes[size],
        className
      )}
    >
      {children}
    </span>
  );
}

/**
 * Animated Badge Component
 * Badge with entrance animation
 */
export function AnimatedBadge({ children, variant = 'primary', size = 'md', className }: BadgeProps) {
  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.2 }}
      className={cn(
        'inline-flex items-center font-medium rounded-full',
        variant === 'primary' && 'bg-primary-100 text-primary-800 dark:bg-primary-900/30 dark:text-primary-300',
        variant === 'secondary' && 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-300',
        variant === 'success' && 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-300',
        variant === 'warning' && 'bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-300',
        variant === 'info' && 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300',
        size === 'sm' && 'px-2 py-0.5 text-xs',
        size === 'md' && 'px-3 py-1 text-sm',
        size === 'lg' && 'px-4 py-1.5 text-base',
        className
      )}
    >
      {children}
    </motion.span>
  );
}

/**
 * Tech Stack Badge Component
 * Displays technology icons/names with hover effect
 */
interface TechBadgeProps {
  name: string;
  icon?: string;
}

export function TechBadge({ name, icon }: TechBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 px-2 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700">
      {icon && <span>{icon}</span>}
      {name}
    </span>
  );
}