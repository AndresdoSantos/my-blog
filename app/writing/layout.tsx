import { ReactNode } from 'react'

import { client } from '@/apollo-client'

import { GET_POSTS_QUERY, Posts } from '@/gql/queries/get-posts-query'

import { CommonListItem } from '@/components/common-list-item'
import { SideBar } from '@/components/side-bar'

async function getPosts() {
  const { data } = await client.query<Posts>({
    query: GET_POSTS_QUERY,
    context: {
      fetchOptions: {
        next: { revalidate: 3600 * 8 }, // seconds - 8 hours
      },
    },
  })

  return { data }
}

export default async function Layout({ children }: { children: ReactNode }) {
  const { data } = await getPosts()

  return (
    <main className="flex justify-between min-h-screen w-full">
      <SideBar>
        <ul className="mt-5">
          {data.posts.map((item) => (
            <CommonListItem
              key={item.slug}
              {...item}
              slug={`/writing/${item.slug}`}
            />
          ))}
        </ul>
      </SideBar>

      {children}
    </main>
  )
}
