'use client'

import { useMemo, useState } from 'react'

type Props = {
  title: string
}

export function PostHeader({ title }: Props) {
  const [isShow, setIsShow] = useState(false)

  useMemo(
    () =>
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
      className="data-[show=true]:bg-zinc-800/50 data-[show=false]:bg-inherit backdrop-blur-sm fixed top-0 flex items-center px-20 h-12 w-full border-b border-b-zinc-800"
    >
      <h2 className="text-sm font-bold text-primary transform-gpu line-clamp-1 text-white">
        {isShow ? title : null}
      </h2>
    </header>
  )
}
