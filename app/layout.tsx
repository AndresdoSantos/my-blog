// eslint-disable-next-line camelcase
import { Inter } from 'next/font/google'
import { ReactNode } from 'react'

import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Andres',
  description:
    'Blog by Andres dos Santos, created to show things that I study and like to share.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.className}`}>
        <div className="w-screen min-h-screen h-auto bg-white overflow-hidden">
          <main className="flex flex-col items-center min-h-screen max-w-5xl mx-auto">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
