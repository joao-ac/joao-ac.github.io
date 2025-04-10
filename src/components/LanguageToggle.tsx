'use client'

import { useLanguage } from '@/contexts/LanguageContext';

export function LanguageToggle() {
  const { language, toggleLanguage } = useLanguage();

  return (
    <button
      onClick={toggleLanguage}
      className="text-foreground flex items-center gap-2"
    >
      <span className="text-shadow-sm">{language === 'en' ? '🇺🇸' : '🇧🇷'}</span>
      <span className="hidden sm:inline">{language === 'en' ? 'EN' : 'PT-BR'}</span>
    </button>
  );
} 