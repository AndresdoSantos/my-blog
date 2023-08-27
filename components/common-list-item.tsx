'use client'

import dayjs from 'dayjs'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode } from 'react'

type Props = {
  slug: string
  title: string
  createdAt: string
  children?: ReactNode
}

export function CommonListItem({ createdAt, slug, title, children }: Props) {
  const pathname = usePathname()

  return (
    <Link key={slug} href={slug}>
      <div
        data-same-slug={pathname === slug}
        className="flex items-center gap-x-5 mb-2 space-y-1 p-2.5 rounded-md hover:data-[same-slug=false]:bg-zinc-800/50 data-[same-slug=true]:bg-zinc-700/50"
      >
        {children}
        <div className="flex flex-col">
          <span className="text-sm text-white font-medium line-clamp-3">
            {title}
          </span>
          <span className="text-xs text-white text-opacity-60 font-medium line-clamp-3">
            {dayjs(createdAt).format('MMMM DD[, ]YYYY')}
          </span>
        </div>
      </div>
    </Link>
  )
}
