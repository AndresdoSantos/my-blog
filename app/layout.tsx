import { ReactNode } from 'react'

import { Menu } from '@/components/menu'
// import { SignIn } from '@/components/sign-in'

import { inter, roboto_mono } from './fonts'

import SessionProvider from './providers/session-provider'

import './globals.css'

export const metadata = {
  title: 'Andres',
  description:
    'Portifolio by Andres dos Santos, created to show things that I study and like to share.',
}

export default async function RootLayout({
  children,
}: {
  children: ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${roboto_mono.variable} bg-[#050505] bg-dotted-spacing-[10px] bg-dotted-zinc-900`}
      >
        <div className="w-screen min-h-screen h-auto font-sans">
          <SessionProvider>
            <Menu />

            <main className="flex flex-col items-center min-h-screen">
              {children}
            </main>
          </SessionProvider>
        </div>
      </body>
    </html>
  )
}
