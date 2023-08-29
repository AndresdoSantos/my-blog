import { ReactNode } from 'react'

import { Menu } from '@/components/menu'
import { SignIn } from '@/components/sign-in'

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
            <aside className="fixed top-0 w-[15rem] min-h-screen flex flex-col justify-between h-auto bg-[#171717]">
              <div className="flex flex-col">
                <header className="flex items-center justify-start h-12 px-5">
                  <h2 className="text-sm font-bold line-clamp-1 text-white">
                    <span className="font-medium text-zinc-400">{`I'm`}</span>{' '}
                    Andres
                  </h2>
                </header>

                <Menu />
              </div>

              <footer className="px-2.5 pb-5">
                <SignIn />
              </footer>
            </aside>

            <main className="flex flex-col items-center min-h-screen">
              {children}
            </main>
          </SessionProvider>
        </div>
      </body>
    </html>
  )
}
