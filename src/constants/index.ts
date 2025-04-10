export const SITE_CONFIG = {
  name: 'João AC',
  title: 'João AC | Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
  url: 'https://joao-ac.github.io',
  author: 'João AC',
  email: 'your.email@example.com',
  github: 'https://github.com/joao-ac',
  linkedin: 'https://linkedin.com/in/your-profile',
  twitter: 'https://twitter.com/your-handle',
} as const;

export const NAV_LINKS = [
  { name: 'Home', href: '/' },
  { name: 'About', href: '/about' },
  { name: 'Projects', href: '/projects' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
] as const;

export const SOCIAL_LINKS = [
  { name: 'GitHub', href: SITE_CONFIG.github, icon: 'github' },
  { name: 'LinkedIn', href: SITE_CONFIG.linkedin, icon: 'linkedin' },
  { name: 'Twitter', href: SITE_CONFIG.twitter, icon: 'twitter' },
] as const;

export const THEME_CONFIG = {
  defaultTheme: 'system',
  storageKey: 'theme',
  themes: ['light', 'dark', 'system'] as const,
} as const; 