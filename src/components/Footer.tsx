import { useTranslation } from '@/hooks/useTranslation';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-background border-t text-foreground py-6">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">
          {t('footer.copyright', { year: new Date().getFullYear().toString() })}
        </p>
        <p className="text-sm mt-2">
          {t('footer.credits')}
        </p>
      </div>
    </footer>
  );
} 