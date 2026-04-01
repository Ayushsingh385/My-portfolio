'use client';

import { motion } from 'framer-motion';
import { Home, ArrowLeft } from 'lucide-react';
import Link from 'next/link';

/**
 * 404 Not Found Page
 * Displayed when a user navigates to a non-existent route
 */
export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* 404 Number */}
          <motion.h1
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-9xl font-bold gradient-text mb-4"
          >
            404
          </motion.h1>

          {/* Error Message */}
          <motion.h2
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-4"
          >
            Oops! Page not found
          </motion.h2>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-gray-600 dark:text-gray-400 mb-8 max-w-md mx-auto"
          >
            The page you&apos;re looking for doesn&apos;t exist or has been moved.
            Let&apos;s get you back on track!
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full font-medium hover:shadow-lg transition-shadow"
            >
              <Home className="w-5 h-5" />
              Go to Homepage
            </Link>
            <button
              onClick={() => window.history.back()}
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 rounded-full font-medium border-2 border-gray-200 dark:border-gray-700 hover:border-primary-500 dark:hover:border-primary-400 transition-colors"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </motion.div>
        </motion.div>

        {/* Decorative Elements */}
        <div className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1 }}
            className="absolute -top-40 -right-40 w-80 h-80 bg-primary-500 rounded-full blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.1 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent-500 rounded-full blur-3xl"
          />
        </div>
      </div>
    </div>
  );
}