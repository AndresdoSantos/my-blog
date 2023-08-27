// eslint-disable-next-line camelcase
import { ReactNode } from 'react'

import { Menu } from '@/components/menu'

import './globals.css'
import { inter, roboto_mono } from './fonts'

export const metadata = {
  title: 'Andres',
  description:
    'Blog by Andres dos Santos, created to show things that I study and like to share.',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/highlight.min.js"></script>

        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/highlight.js/11.5.0/styles/atom-one-light.min.css"
          integrity="sha512-o5v54Kh5PH0dgnf9ei0L+vMRsbm5fvIvnR/XkrZZjN4mqdaeH7PW66tumBoQVIaKNVrLCZiBEfHzRY4JJSMK/Q=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />

        <script>hljs.initHighlightingOnLoad();</script>
      </head>

      <body
        className={`${inter.variable} ${roboto_mono.variable} bg-[#050505] bg-dotted-spacing-[10px] bg-dotted-zinc-900`}
      >
        <div className="w-screen min-h-screen h-auto font-sans">
          <aside className="fixed top-0 w-[15rem] min-h-screen h-auto bg-[#171717] px-2.5">
            <header className="h-12 px-2.5 py-5">
              <h2 className="text-sm font-bold line-clamp-1 text-white">
                <span className="font-medium text-zinc-400">{`I'm`}</span>{' '}
                Andres
              </h2>
            </header>

            <Menu />
          </aside>

          <main className="flex flex-col items-center min-h-screen">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}
