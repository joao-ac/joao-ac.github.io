/*import type { Metadata } from "next";
import localFont from "next/font/local";*/
import "./globals.css";
import { Providers } from './providers'
import { JetBrains_Mono } from 'next/font/google'
import { LanguageProvider } from '@/contexts/LanguageContext';
import { cn } from '@/lib/utils'
export const metadata = {
  title: 'João Antonio - Portfolio',
  description: 'Portfolio of João Antonio, a Systems Analysis and Development student.',
  icons: {
    icon: '/favicon.png',
  },
};

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <LanguageProvider>
        <body className={cn(jetbrainsMono.className)}>
          <div className="min-h-screen" >
            <Providers>{children}</Providers>
         </div>
        </body>
      </LanguageProvider>
    </html>
  )
}
