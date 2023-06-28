import { client } from '@/apollo-client'
import dayjs from 'dayjs'
import Link from 'next/link'

import { GET_POSTS_QUERY, Posts } from '@/gql/queries/get-posts-query'
import clsx from 'clsx'

async function getPosts() {
  const { data } = await client.query<Posts>({
    query: GET_POSTS_QUERY,
  })

  return {
    data,
  }
}

export default async function Home() {
  const { data } = await getPosts()

  const FIRST_POST = data.posts[0]

  return (
    <>
      <section className="flex flex-col">
        <span className="text-2xl font-bold text-zinc-700 dark:text-white -tracking-wider leading-10">
          Blog
        </span>
        <span className="text-sm font-normal text-zinc-500 dark:text-zinc-400 -tracking-tight">
          Algumas coisas que eu estudo e acho interessante compartilhar.
        </span>

        <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800 my-5"></div>
      </section>

      <Link href={`/post/${FIRST_POST.slug}`} className="flex flex-col">
        <span className="text-2xl text-zinc-700 dark:text-white font-bold leading-10 mt-5">
          {FIRST_POST.title}
        </span>
        <span className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
          {FIRST_POST.description}
        </span>

        <time className="text-[13px] text-zinc-700 dark:text-white font-medium dark:font-normal -tracking-wide mt-2.5">
          {dayjs(FIRST_POST.createdAt).format('MMMM DD[, ] YYYY')}
        </time>
      </Link>

      <div className="h-[1px] w-full bg-zinc-200 dark:bg-zinc-800 my-5"></div>

      <div className="mt-5 pb-20">
        {data.posts.map((item, index) => (
          <Link
            key={item.slug}
            href={`/post/${item.slug}`}
            className={clsx('flex items-center', {
              hidden: index === 0,
            })}
          >
            <div className="flex flex-col">
              <span className="text-2xl text-zinc-700 dark:text-white font-bold leading-10">
                {item.title}
              </span>
              <span className="text-sm text-zinc-500 dark:text-zinc-400 font-normal">
                {item.description}
              </span>

              <time className="text-[13px] text-zinc-700 dark:text-white font-medium dark:font-normal -tracking-wide mt-2.5">
                {dayjs(item.createdAt).format('MMMM DD[, ] YYYY')}
              </time>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
