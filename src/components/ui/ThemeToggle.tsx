'use client';

import { motion } from 'framer-motion';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '@/hooks';

/**
 * Theme Toggle Component
 * Switches between light and dark mode with smooth animation
 */
export function ThemeToggle() {
  const { isDark, toggleTheme, mounted } = useTheme();

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="w-10 h-10 rounded-full bg-gray-200 dark:bg-gray-700 animate-pulse" />
    );
  }

  return (
    <motion.button
      onClick={toggleTheme}
      className="relative w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-800 flex items-center justify-center overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? 0 : 180,
          scale: isDark ? 1 : 0,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Moon className="w-5 h-5 text-primary-400" />
      </motion.div>
      <motion.div
        initial={false}
        animate={{
          rotate: isDark ? -180 : 0,
          scale: isDark ? 0 : 1,
        }}
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        className="absolute"
      >
        <Sun className="w-5 h-5 text-yellow-500" />
      </motion.div>
    </motion.button>
  );
}