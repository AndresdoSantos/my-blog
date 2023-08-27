import { ReactNode } from 'react'

import { client } from '@/apollo-client'

import { GET_PROJECTS_QUERY, Projects } from '@/gql/queries/get-projects-query'

import { CommonListItem } from '@/components/common-list-item'
import Image from 'next/image'

async function getProjects() {
  const { data } = await client.query<Projects>({
    query: GET_PROJECTS_QUERY,
    context: {
      fetchOptions: {
        next: { revalidate: 3600 * 8 }, // seconds - 8 hours
      },
    },
  })

  return {
    data,
  }
}

export default async function Layout({ children }: { children: ReactNode }) {
  const { data } = await getProjects()

  return (
    <main className="flex justify-between min-h-screen w-full">
      <div className="fixed left-[15rem] flex flex-col gap-y-2 min-h-screen h-auto w-[25rem] max-w-[25rem] bg-[#171717] px-2.5 border-x border-x-zinc-700/50">
        <header className="h-12 px-2.5 py-5">
          <h2 className="text-sm font-bold line-clamp-1 text-white">
            Projects
          </h2>
        </header>

        <ul className="mt-5">
          {data.projects.map((item) => (
            <CommonListItem
              key={item.slug}
              {...item}
              slug={`/projects/${item.slug}`}
            >
              <button
                type="button"
                className="cursor-pointer transition-all duration-700 hover:scale-105"
              >
                <Image
                  alt=""
                  src={item.logo.url}
                  width={item.logo.width}
                  height={item.logo.height}
                />
              </button>
            </CommonListItem>
          ))}
        </ul>
      </div>

      {children}
    </main>
  )
}
