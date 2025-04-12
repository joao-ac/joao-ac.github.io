import { useLanguage } from '@/contexts/LanguageContext';
import { en } from '@/translations/en';
import { pt } from '@/translations/pt';

type TranslationValue = string | number | { [key: string]: TranslationValue };

export function useTranslation() {
  const { language } = useLanguage();
  
  const t = (key: string, params?: Record<string, string>): string => {
    const translations = language === 'en' ? en : pt;
    
    const getNestedValue = (obj: TranslationValue, path: string[]): string | number | undefined => {
      if (path.length === 0) return undefined;
      if (typeof obj === 'string' || typeof obj === 'number') return undefined;
      
      const [current, ...rest] = path;
      const value = (obj as Record<string, TranslationValue>)[current];
      
      if (rest.length === 0) {
        return typeof value === 'string' || typeof value === 'number' ? value : undefined;
      }
      
      return getNestedValue(value, rest);
    };
    
    const value = getNestedValue(translations, key.split('.'));
    
    if (typeof value === 'string' && params) {
      return Object.entries(params).reduce((str, [key, val]) => 
        str.replace(`{${key}}`, val), value);
    }
    
    return String(value || key);
  };
  
  return { t };
} 