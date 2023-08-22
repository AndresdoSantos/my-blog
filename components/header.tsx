import Link from 'next/link'

// import { Theme } from './theme'

export function Header() {
  return (
    <header className="z-10 backdrop-blur-sm fixed top-0 flex items-center justify-between px-20 h-20 max-h-[70px] w-screen  border-b ">
      <div className="flex items-center relative">
        [<div className="bg-zinc-200 rounded-full h-2 w-2 ml-1"></div>
        <div className="bg-zinc-500 rounded-full h-2 w-2"></div>
        <div className="bg-zinc-800 rounded-full h-2 w-2 mr-1"></div>]
      </div>

      <div className="h-4 w-[1px] bg-zinc-200  ml-10"></div>

      <div className="flex items-center ml-10 gap-x-2.5 mr-auto">
        <Link href="/">
          <span className="py-2 px-3 text-xs text-zinc-700  font-medium hover:bg-zinc-100 rounded">
            POSTS
          </span>
        </Link>

        <Link href="/work">
          <span className="py-2 px-3 text-xs text-zinc-700  font-medium hover:bg-zinc-100 rounded">
            SEE MY WORK
          </span>
        </Link>
      </div>

      {/** <section className="flex items-center space-x-5">
        <Theme /> 
        <input
          type="text"
          className="h-[36px] w-[200px] outline-none transition-all duration-200 border-2 border-zinc-200  focus:w-[220px] rounded-full bg-zinc-100  text-[13px] px-3 focus:border-zinc-500"
          placeholder="Tag or title"
        />
      </section> */}
    </header>
  )
}
