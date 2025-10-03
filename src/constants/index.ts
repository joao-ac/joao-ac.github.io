export const SITE_CONFIG = {
  name: 'João AC',
  title: 'João AC | Portfolio',
  description: 'Personal portfolio website showcasing my projects and skills',
  url: 'https://joao-ac.github.io',
  author: 'João AC',
  email: 'joao.ac1406@gmail.com',
  github: 'https://github.com/joao-ac',
  linkedin: 'https://www.linkedin.com/in/joao-ac1406/'
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
