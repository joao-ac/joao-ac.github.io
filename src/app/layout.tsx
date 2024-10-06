/*import type { Metadata } from "next";
import localFont from "next/font/local";*/
import "./globals.css";
import { Providers } from './providers'
import { JetBrains_Mono } from 'next/font/google'

export const metadata = {
  title: 'João Antonio - Portfolio',
  description: 'Portfolio of João Antonio, a Systems Analysis and Development student.',
};

const jetbrainsMono = JetBrains_Mono({ subsets: ['latin'] })
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={jetbrainsMono.className}>
        <Providers>{children}</Providers>
      </body>
    </html>
  )
}
