'use client';

import { motion, HTMLMotionProps } from 'framer-motion';
import { cn } from '@/lib/utils';
import { ReactNode, forwardRef } from 'react';

// Button variants configuration
const buttonVariants = {
  primary: 'bg-gradient-to-r from-primary-500 to-accent-500 text-white shadow-lg hover:shadow-xl',
  secondary: 'bg-white dark:bg-gray-800 text-gray-900 dark:text-white border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400',
  outline: 'bg-transparent border-2 border-primary-500 text-primary-500 hover:bg-primary-500 hover:text-white',
  ghost: 'bg-transparent hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-700 dark:text-gray-200',
};

const buttonSizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg',
};

interface ButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  variant?: keyof typeof buttonVariants;
  size?: keyof typeof buttonSizes;
  children: ReactNode;
  isLoading?: boolean;
  leftIcon?: ReactNode;
  rightIcon?: ReactNode;
}

/**
 * Reusable Button Component
 * Supports multiple variants, sizes, and loading states
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      children,
      isLoading = false,
      leftIcon,
      rightIcon,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: disabled || isLoading ? 1 : 1.02 }}
        whileTap={{ scale: disabled || isLoading ? 1 : 0.98 }}
        className={cn(
          'inline-flex items-center justify-center gap-2 rounded-full font-medium transition-all duration-300',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900',
          buttonVariants[variant],
          buttonSizes[size],
          className
        )}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading && (
          <motion.span
            className="w-4 h-4 border-2 border-current border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
          />
        )}
        {!isLoading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
        <span>{children}</span>
        {!isLoading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
      </motion.button>
    );
  }
);

Button.displayName = 'Button';

/**
 * Icon Button Component
 * A circular button designed for icons
 */
interface IconButtonProps extends Omit<HTMLMotionProps<'button'>, 'children'> {
  icon: ReactNode;
  'aria-label': string;
  variant?: 'primary' | 'secondary' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, variant = 'ghost', size = 'md', className, 'aria-label': ariaLabel, ...props }, ref) => {
    const sizes = {
      sm: 'w-8 h-8',
      md: 'w-10 h-10',
      lg: 'w-12 h-12',
    };

    const variants = {
      primary: 'bg-primary-500 text-white hover:bg-primary-600',
      secondary: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-700',
      ghost: 'bg-transparent text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800',
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        className={cn(
          'rounded-full flex items-center justify-center transition-colors',
          'focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 dark:focus:ring-offset-gray-900',
          sizes[size],
          variants[variant],
          className
        )}
        aria-label={ariaLabel}
        {...props}
      >
        {icon}
      </motion.button>
    );
  }
);

IconButton.displayName = 'IconButton';