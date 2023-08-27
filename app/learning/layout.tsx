import { ReactNode } from 'react'

// import { client } from '@/apollo-client'

// import { GET_POSTS_QUERY, Posts } from '@/gql/queries/get-posts-query'

// import { CommonListItem } from '@/components/common-list-item'

/* async function getPosts() {
  const { data } = await client.query<Posts>({
    query: GET_POSTS_QUERY,
    context: {
      fetchOptions: {
        next: { revalidate: 3600 * 8 }, // seconds - 8 hours
      },
    },
  })

  return {
    data,
  }
} */

export default async function Layout({ children }: { children: ReactNode }) {
  // const { data } = await getPosts()

  return (
    <main className={`flex justify-between min-h-screen w-full`}>
      <div className="fixed left-[15rem] flex flex-col gap-y-2 min-h-screen h-auto w-[25rem] max-w-[25rem] bg-[#171717] px-2.5 border-x border-x-zinc-700/50">
        <header className="h-12 px-2.5 py-5">
          <h2 className="text-sm font-bold line-clamp-1 text-white">
            Learning
          </h2>
        </header>

        {/** <ul className="mt-5">
          {data.posts.map((item) => (
            <CommonListItem
              key={item.slug}
              {...item}
              slug={`/writing/${item.slug}`}
            />
          ))}
        </ul> */}
      </div>

      {children}
    </main>
  )
}
