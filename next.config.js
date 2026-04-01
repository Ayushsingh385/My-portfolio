/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable React strict mode for better development experience
  reactStrictMode: true,

  // Image optimization configuration
  images: {
    domains: ['images.unsplash.com', 'github.com', 'avatars.githubusercontent.com'],
    formats: ['image/avif', 'image/webp'],
  },

  // Enable experimental features for better performance
  experimental: {
    // Optimize package imports for faster builds
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
};

module.exports = nextConfig;