import { SEOProps } from '@/types';
import { SITE_CONFIG } from '@/constants';

export function generateSEOConfig({
  title,
  description,
  keywords = [],
  image = '/og-image.png',
  type = 'website',
}: SEOProps) {
  const siteTitle = title ? `${title} | ${SITE_CONFIG.name}` : SITE_CONFIG.title;
  const siteDescription = description || SITE_CONFIG.description;
  const siteKeywords = Array.from(new Set([...keywords, 'portfolio', 'developer', 'web'])).join(', ');

  return {
    title: siteTitle,
    description: siteDescription,
    keywords: siteKeywords,
    openGraph: {
      title: siteTitle,
      description: siteDescription,
      url: SITE_CONFIG.url,
      siteName: SITE_CONFIG.name,
      images: [
        {
          url: image,
          width: 1200,
          height: 630,
          alt: siteTitle,
        },
      ],
      type,
    },
    twitter: {
      card: 'summary_large_image',
      title: siteTitle,
      description: siteDescription,
      images: [image],
      creator: SITE_CONFIG.twitter,
    },
  };
} 