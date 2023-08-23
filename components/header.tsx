import Link from 'next/link'

// import { Theme } from './theme'

export function Header() {
  return (
    <header className="z-10 backdrop-blur-sm fixed top-0 flex items-center justify-between px-5 sm:px-20 h-20 max-h-[70px] w-screen border-b">
      <div className="flex items-center relative">
        [<div className="bg-zinc-200 rounded-full h-2 w-2 ml-1"></div>
        <div className="bg-zinc-500 rounded-full h-2 w-2"></div>
        <div className="bg-zinc-800 rounded-full h-2 w-2 mr-1"></div>]
      </div>

      <div className="h-4 w-[1px] bg-zinc-200 ml-5 sm:ml-10"></div>

      <div className="flex items-center ml-5 sm:ml-10 gap-x-2.5 mr-auto">
        <Link href="/">
          <span className="py-2 px-3 text-xs text-zinc-700 font-medium hover:bg-zinc-100 rounded">
            POSTS
          </span>
        </Link>

        <Link href="/work">
          <span className="py-2 px-3 text-xs text-zinc-700 font-medium hover:bg-zinc-100 rounded">
            SEE MY WORK
          </span>
        </Link>
      </div>
    </header>
  )
}
