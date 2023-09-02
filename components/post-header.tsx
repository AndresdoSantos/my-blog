'use client'

import { useRouter } from 'next/navigation'
import { ReactNode, useMemo, useState } from 'react'
import { TbMenu } from 'react-icons/tb'

type Props = {
  title: string
  children?: ReactNode
}

export function PostHeader({ title, children }: Props) {
  const { back } = useRouter()

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
      className="data-[show=true]:bg-zinc-800/50 data-[show=false]:bg-inherit backdrop-blur-sm fixed top-0 flex items-center justify-between px-5 sm:px-20 h-12 w-full sm:w-[calc(100%_-_40rem)]"
    >
      <button type="button" onClick={back} className="sm:hidden">
        <TbMenu size={18} className="text-white" />
      </button>

      <h2 className="text-sm font-bold text-primary line-clamp-1 text-white">
        {isShow ? title : null}
      </h2>

      {children}
    </header>
  )
}
