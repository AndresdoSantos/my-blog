'use client'

import { ReactNode } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { TbMenu } from 'react-icons/tb'

const PATH_NAME = {
  '/writing': true,
  '/learning': true,
  '/projects': true,
}

type Props = {
  children: ReactNode
}

export function SideBar({ children }: Props) {
  const pathname = usePathname()
  const { back } = useRouter()

  return (
    <section
      data-open={!!(PATH_NAME as any)[pathname]}
      className="fixed left-0 sm:left-[15rem] data-[open=false]:hidden data-[open=true]:flex sm:data-[open=false]:flex sm:data-[open=true]:flex flex-col gap-y-2 min-h-screen h-auto w-full sm:w-[25rem] sm:max-w-[25rem] bg-[#171717] px-2.5 border-x border-x-zinc-700/50"
    >
      <header className="flex items-center justify-between h-12 px-2.5 py-5">
        <button type="button" onClick={back} className="sm:hidden">
          <TbMenu size={18} className="text-white" />
        </button>

        <h2 className="text-sm font-bold text-white capitalize">
          {pathname.split('/')[1]}
        </h2>
      </header>

      {children}
    </section>
  )
}
