'use client'

import { ThemeProvider } from 'next-themes'
import { LanguageProvider } from '@/contexts/LanguageContext'

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" enableSystem={true}>
      <LanguageProvider>{children}</LanguageProvider>
    </ThemeProvider>
  )
}
