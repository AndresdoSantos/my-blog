// eslint-disable-next-line camelcase
import { DM_Mono, Inter } from 'next/font/google'
import { ReactNode } from 'react'

import { ThemeProvider } from '@/contexts/theme-provider'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

const DMMono = DM_Mono({
  subsets: ['latin'],
  weight: '500',
  display: 'swap',
  variable: '--font-dm-mono',
})

export const metadata = {
  title: 'Andres',
  description:
    'Blog by Andres dos Santos, created to show things that I study and like to share.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${DMMono.variable} ${inter.variable}`}>
        <ThemeProvider>
          <div className="w-screen min-h-screen h-auto dark:bg-zinc-900">
            <main className="flex flex-col items-center min-h-screen max-w-5xl mx-auto">
              {children}
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
