import { MetadataRoute } from 'next';
import { seoConfig } from '@/data';

/**
 * Generate robots.txt for SEO
 * This file tells search engine crawlers which pages to index
 */
export default function robots(): MetadataRoute.Robots {
  const baseUrl = seoConfig.siteUrl;

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: '/api/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}