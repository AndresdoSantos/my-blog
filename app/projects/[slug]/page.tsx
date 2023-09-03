import { client } from '@/apollo-client'

// import { Header } from '@/components/header'

import {
  GET_PROJECT_BY_SLUG_QUERY,
  Project,
} from '@/gql/queries/get-project-by-slug-query'

import { PostHeader } from '@/components/post-header'
import Image from 'next/image'

async function getWorkBySlug(slug: string) {
  const { data } = await client.query<Project>({
    query: GET_PROJECT_BY_SLUG_QUERY,
    variables: {
      slug,
    },
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

type Props = {
  params: { slug: string }
}

export default async function ProjectPage({ params }: Props) {
  const { data } = await getWorkBySlug(params.slug)

  return (
    <div className="min-h-screen h-full w-full sm:max-w-[calc(100%_-_40rem)] sm:ml-auto bg-[#050505]">
      <PostHeader title={data.project.title} />

      <div className="py-20 px-5 sm:px-20 w-full">
        <article
          dangerouslySetInnerHTML={{ __html: data.project.description.html }}
          className="w-full prose prose-invert prose-h1:text-[1.25rem] prose-h3:text-[1rem] prose-p:text-white prose-p:text-sm prose-li:text-sm prose-pre:bg-zinc-800/50 prose-pre:p-6"
        />

        <div className="flex items-center justify-between w-full">
          <div className="bg-zinc-800/50 h-[1px] w-full"></div>
          <span className="text-xs text-zinc-400 w-36 truncate text-end">
            App screenshots
          </span>
        </div>

        <ol className="flex flex-col sm:flex-row items-center mt-5 space-y-2.5 sm:space-y-0 space-x-0 sm:space-x-2.5">
          {data.project.images.map((image) => (
            <li
              key={image.id}
              className="cursor-pointer transition-all duration-300 hover:scale-105"
            >
              <Image
                alt=""
                src={image.url}
                width={image.width}
                height={image.height}
              />
            </li>
          ))}
        </ol>

        {/** <section className="flex space-x-10 bg-zinc-900/50 py-2.5 px-5 rounded-full">
          <span className="flex items-center justify-center h-8 text-[11px] font-medium text-white uppercase">
            <HiStatusOnline size={20} className="text-white mr-2.5" />
            {data.project.statuses}
          </span>

          <span className="flex items-center justify-center h-8 text-[11px] font-medium text-white uppercase">
            <TbClockHour4 size={20} className="text-white mr-2.5" />
            {data.project.duration}
          </span>

          <a href={data.project.githubUrl}>
            <span className="flex items-center justify-center h-8 rounded-full bg-white text-[11px] font-semibold text-zinc-800 uppercase">
              {data.project.githubUrl}
            </span>
          </a> 
        </section> */}
      </div>
    </div>
  )
}
