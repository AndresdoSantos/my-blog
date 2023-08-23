'use client'

import Link from 'next/link'
import dayjs from 'dayjs'
import { useMemo, useState } from 'react'

import { X } from './icons/X'

type Props = {
  createdAt: string
  title: string
}

export function PostHeader({ createdAt, title }: Props) {
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
    <header className="bg-white  flex items-center h-14 w-full pl-5 pr-20 border-b border-b-zinc-100  fixed top-0 left-0 right-0">
      <div className="flex items-center w-full">
        <span className="text-[13px] text-zinc-600 flex-1 gap-x-[2px] hidden sm:flex">
          By{' '}
          <span className="text-[13px] font-medium text-zinc-800  -tracking-wide">
            Andres
          </span>{' '}
          on{' '}
          <time className="text-[13px] font-medium text-zinc-800  -tracking-wide">
            {dayjs(createdAt).format('MMM DD[, ]YYYY')}
          </time>
        </span>

        <div className="flex items-center justify-between w-[56rem]">
          {isShow && (
            <span className="text-xs text-[14px] font-medium text-zinc-600  flex items-center sm:ml-[32px]">
              {title}
            </span>
          )}
        </div>

        {/** <Like likes={data.post.likes} slug={data.post.slug} /> */}

        <div className="flex flex-1">
          <Link href="/" className="ml-auto">
            <X />
          </Link>
        </div>
      </div>
    </header>
  )
}
