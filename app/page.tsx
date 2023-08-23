import Link from 'next/link'

import { client } from '@/apollo-client'

import { Header } from '@/components/header'

import { GET_POSTS_QUERY, Posts } from '@/gql/queries/get-posts-query'

async function getPosts() {
  const { data } = await client.query<Posts>({
    query: GET_POSTS_QUERY,
    context: {
      fetchOptions: {
        next: { revalidate: 10 }, // seconds
      },
    },
  })

  console.log(data)

  return {
    data,
  }
}

export default async function Home() {
  const { data } = await getPosts()

  return (
    <>
      <Header />

      <div className="flex flex-col items-start min-h-screen h-full space-y-10 w-full pt-36">
        {data.posts.map((item, index) => (
          <Link
            key={item.slug}
            href={`/post/${item.slug}`}
            className="flex items-center space-x-10 group"
          >
            <strong className="transition-all duration-300 text-zinc-200 text-xs font-bold group-hover:text-3xl">
              {index + 1 < 10 ? `0${index + 1}` : index + 1}
            </strong>

            <div className="flex flex-col">
              <span className="text-lg text-zinc-600 font-bold leading-10">
                {item.title}
              </span>
              <span className="text-[13px] text-zinc-700 min-w-[90%] w-full">
                {item.description}
              </span>
            </div>
          </Link>
        ))}
      </div>
    </>
  )
}
