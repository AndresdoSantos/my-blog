import dayjs from 'dayjs'
import Link from 'next/link'

import { client } from '@/apollo-client'
import {
  GET_POST_BY_SLUG_QUERY,
  PostBySlug,
} from '@/gql/queries/get-post-by-slug-query'

import { GithubLogo } from '@/components/GithubLogo'
import { ThumbsUp } from '@/components/icons/ThumbsUp'
import { X } from '@/components/icons/X'

async function getPostBySlug(slug: string) {
  const { data } = await client.query<PostBySlug>({
    query: GET_POST_BY_SLUG_QUERY,
    variables: {
      slug,
    },
  })

  return {
    data,
  }
}

type Props = {
  params: {
    slug: string
  }
}

export default async function Post({ params }: Props) {
  const { data } = await getPostBySlug(params.slug)

  return (
    <div className="mx-auto max-w-4xl">
      <section className="flex items-center h-14 w-full px-5 border-b border-b-zinc-100 bg-white fixed top-0 left-0 right-0">
        <div className="flex items-center w-full">
          <span className="text-[13px] text-zinc-600 flex flex-1 gap-x-[2px]">
            Writted by{' '}
            <span className="text-[13px] font-medium text-zinc-800 -tracking-wide">
              Andres
            </span>{' '}
            on{' '}
            <time className="text-[13px] font-medium text-zinc-800 -tracking-wide">
              {dayjs(data.post.createdAt).format('MMMM DD[, ]YYYY')}
            </time>
          </span>

          <div className="flex items-center justify-between w-[56rem]">
            <span className="text-[13px] text-zinc-600 flex items-center">
              Blog <div className="h-1 w-1 rounded-full bg-zinc-500 mx-2"></div>{' '}
              {data.post.title}
            </span>

            <button className="transition-[:hover] duration-300 hover:scale-125 flex items-center gap-x-2">
              <ThumbsUp />
              <span className="text-zinc-700 text-xs font-medium mt-0.5">
                25
              </span>
            </button>
          </div>

          <div className="flex flex-1">
            <Link href="/" className="ml-auto">
              <X />
            </Link>
          </div>
        </div>
      </section>

      <h1 className="text-2xl font-bold text-zinc-700 -tracking-wider leading-10 mt-20">
        {data.post.title}
      </h1>
      <span className="text-sm font-normal text-zinc-600 -tracking-tight">
        {data.post.description}
      </span>

      <div
        dangerouslySetInnerHTML={{ __html: data.post.content.html }}
        className="post-content"
      />

      <div className="mb-5 mt-10 flex items-center">
        <span className="text-sm text-zinc-700 font-medium block mr-3.5">
          Tags
        </span>
        <ul className="flex flex-wrap gap-2">
          {data.post.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs text-zinc-700 bg-zinc-100 font-medium py-2 px-3.5 rounded-lg"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <footer className="w-full py-5 border-t border-t-zinc-100">
        <Link
          href="https://github.com/AndresdoSantos"
          target="_blank"
          className="flex items-center text-sm font-normal gap-x-2 text-zinc-700"
        >
          <GithubLogo />
          Follow me on Github
        </Link>
      </footer>
    </div>
  )
}
