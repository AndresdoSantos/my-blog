import dayjs from 'dayjs'
import Link from 'next/link'

import { client } from '@/apollo-client'
import {
  GET_POST_BY_SLUG_QUERY,
  PostBySlug,
} from '@/gql/queries/get-post-by-slug-query'

import { ArrowLeft } from '@/components/ArrowLeft'
import { GithubLogo } from '@/components/GithubLogo'

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
    <>
      <Link
        href="/"
        className="flex items-center gap-x-2 text-[13px] text-zinc-700 dark:text-white invisible sm:visible fixed top-28 left-10"
      >
        <ArrowLeft />
        Voltar para os posts
      </Link>

      <Link
        href="/"
        className="flex sm:hidden items-center gap-x-2 text-[13px] text-zinc-700 dark:text-white mb-5"
      >
        <ArrowLeft />
        Voltar para os posts
      </Link>

      <span className="text-[13px] text-zinc-400 mb-5 sm:mb-10 block">
        Escrito por{' '}
        <span className="text-[13px] font-medium text-zinc-800 dark:text-white -tracking-wide">
          Andres
        </span>{' '}
        em{' '}
        <time className="text-[13px] font-medium text-zinc-800 dark:text-white -tracking-wide">
          {dayjs(data.post.createdAt).format('MMMM DD[, ]YYYY')}
        </time>
      </span>

      <h1 className="text-2xl font-bold text-zinc-700 dark:text-white -tracking-wider leading-10">
        {data.post.title}
      </h1>
      <span className="text-sm font-normal text-zinc-600 dark:text-white -tracking-tight">
        {data.post.description}
      </span>

      <div
        dangerouslySetInnerHTML={{ __html: data.post.content.html }}
        className="post-content"
      />

      <footer className="w-full py-5 border-t border-t-zinc-200 dark:border-t-zinc-800">
        <Link
          href="https://github.com/AndresdoSantos"
          target="_blank"
          className="flex items-center text-sm font-light gap-x-2 text-zinc-700 dark:text-white"
        >
          <GithubLogo />
          Follow me on Github
        </Link>
      </footer>
    </>
  )
}
