import clsx from 'clsx'
import dayjs from 'dayjs'
import Image from 'next/image'
import Link from 'next/link'

import { client } from '@/apollo-client'

import { GET_POSTS_QUERY, Posts } from '@/gql/queries/get-posts-query'

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

  return (
    <>
      <div className="flex items-center h-screen max-w-5xl mx-auto">
        <div className="h-full w-full pt-14 bg-white">
          <header className="pb-10 flex items-center justify-between max-w-[50rem]">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full flex items-center justify-center border border-zinc-900">
                <div className="p-[2px] bg-white rounded-full">
                  <Image
                    src="https://github.com/AndresdoSantos.png"
                    alt=""
                    width={36}
                    height={36}
                    className="rounded-full"
                  />
                </div>
              </div>

              <span className="text-sm text-zinc-700 ml-2.5">ANDRES</span>
            </div>

            <div className="h-4 w-[1px] bg-zinc-200 ml-10"></div>

            <div className="flex ml-10 gap-x-5 mr-auto">
              <Link href="/">
                <span className="text-[13px] text-zinc-700 font-medium">
                  BLOG
                </span>
              </Link>
            </div>

            {/** <label
              htmlFor=""
              className="flex items-center bg-zinc-100 rounded-full transition-all duration-300 w-44 focus-within:w-64 gap-x-3 h-10 px-2 border border-zinc-100 focus-within:border-zinc-300"
            >
              <Search />

              <input
                type="text"
                className="bg-inherit w-full h-full text-xs outline-none rounded-r-full"
                placeholder="What do you need?"
              />
            </label> */}
          </header>

          {data.posts.map((item, index) => (
            <Link
              key={item.slug}
              href={`/post/${item.slug}`}
              className={clsx('flex items-center justify-between mb-10', {
                // hidden: index === 0,
              })}
            >
              <div className="flex flex-col">
                <time className="text-xs text-zinc-400 mt-2.5">
                  {dayjs(item.createdAt).format('MMM DD')}
                </time>

                <span className="text-lg text-zinc-800 font-bold leading-10">
                  {item.title}
                </span>
                <span className="text-[13px] text-zinc-600 w-[500px]">
                  {item.description}
                </span>

                <ul className="flex flex-wrap mt-2.5 gap-x-2">
                  {item.tags.map((tag) => (
                    <li
                      key={tag}
                      className="text-xs text-zinc-700 bg-zinc-100 font-medium py-2 px-3.5 rounded-lg"
                    >
                      {tag}
                    </li>
                  ))}
                </ul>
              </div>
            </Link>
          ))}
        </div>

        <div className="flex flex-col gap-y-10 px-10 py-14 fixed left-[calc(100vw_-_24rem)] border-l h-full"></div>
      </div>
    </>
  )
}
