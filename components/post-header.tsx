'use client'

import { ReactNode, useMemo, useState } from 'react'

type Props = {
  title: string
  children?: ReactNode
}

export function PostHeader({ title, children }: Props) {
  const [isShow, setIsShow] = useState(false)

  useMemo(
    () =>
      window &&
      window.addEventListener('scroll', function () {
        const scrollPosition =
          window.scrollY || document.documentElement.scrollTop

        if (scrollPosition > 73) {
          setIsShow(true)
        }

        if (isShow && scrollPosition < 73) {
          setIsShow(false)
        }
      }),
    [isShow],
  )

  return (
    <header
      data-show={isShow}
      className="data-[show=true]:bg-zinc-800/50 data-[show=false]:bg-inherit backdrop-blur-sm fixed top-0 flex items-center justify-between px-20 h-12 w-[calc(100%_-_40rem)] border-b border-b-zinc-800"
    >
      <div className="w-1/2">
        <h2 className="text-sm font-bold text-primary line-clamp-1 text-white">
          {isShow ? title : null}
        </h2>
      </div>

      {children}
    </header>
  )
}
