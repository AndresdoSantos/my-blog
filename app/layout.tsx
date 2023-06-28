// eslint-disable-next-line camelcase
import { DM_Mono, Inter } from 'next/font/google'
import Link from 'next/link'
import { ReactNode } from 'react'

import './globals.css'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })
const DMMono = DM_Mono({
  subsets: ['latin'],
  weight: '500',
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
      <body
        className={`${DMMono.variable} ${inter.variable} bg-white dark:bg-zinc-900`}
      >
        <header className="z-50 fixed top-0 flex items-center bg-white dark:bg-zinc-800/50 py-2.5 px-2.5 sm:px-5 w-full border-b border-b-zinc-100 dark:border-b-zinc-800">
          <section className="flex items-center gap-x-2.5">
            <div className="h-8 w-8 bg-zinc-100 rounded-full"></div>

            <span className="text-xs font-medium text-zinc-700 dark:text-white truncate">
              ANDRES DOS SANTOS
            </span>
          </section>

          <nav className="text-[13px] text-zinc-700 dark:text-white font-medium ml-auto sm:ml-[136px] sm:px-5">
            <Link href="blog">Blog</Link>
          </nav>
        </header>

        <main className="max-w-3xl mx-auto pt-20 px-5">{children}</main>
      </body>
    </html>
  )
}
