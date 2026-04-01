import type { Metadata, Viewport } from 'next';
import { Inter, Fira_Code } from 'next/font/google';
import '@/styles/globals.css';
import { seoConfig } from '@/data';

// Font configurations
const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const firaCode = Fira_Code({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-fira-code',
});

/**
 * Metadata configuration for SEO
 * Customize these values in src/data/index.ts
 */
export const metadata: Metadata = {
  metadataBase: new URL(seoConfig.siteUrl),
  title: {
    default: seoConfig.title,
    template: `%s | ${seoConfig.author}`,
  },
  description: seoConfig.description,
  keywords: seoConfig.keywords,
  authors: [{ name: seoConfig.author }],
  creator: seoConfig.author,
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: seoConfig.siteUrl,
    title: seoConfig.title,
    description: seoConfig.description,
    siteName: seoConfig.author,
    images: [
      {
        url: seoConfig.image,
        width: 1200,
        height: 630,
        alt: `${seoConfig.author} - Portfolio`,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: seoConfig.title,
    description: seoConfig.description,
    creator: seoConfig.twitterHandle,
    images: [seoConfig.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your verification codes here
    // google: 'your-google-verification-code',
    // yandex: 'your-yandex-verification-code',
  },
};

/**
 * Viewport configuration for better mobile experience
 */
export const viewport: Viewport = {
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#ffffff' },
    { media: '(prefers-color-scheme: dark)', color: '#111827' },
  ],
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

/**
 * Root Layout Component
 * Wraps all pages with necessary providers and global styles
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${firaCode.variable}`}>
      <head>
        {/* Favicon links */}
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="icon" href="/icon.svg" type="image/svg+xml" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/site.webmanifest" />
      </head>
      <body className="font-sans antialiased bg-white dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
        {/* Skip to main content link for accessibility */}
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary-500 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>
        {children}
      </body>
    </html>
  );
}