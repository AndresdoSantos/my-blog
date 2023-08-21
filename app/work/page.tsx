import Image from 'next/image'

import { client } from '@/apollo-client'

import { Header } from '@/components/header'

import { GET_WORKS_QUERY, Works } from '@/gql/queries/get-works-query'

async function getWorks() {
  const { data } = await client.query<Works>({
    query: GET_WORKS_QUERY,
  })

  return {
    data,
  }
}

export default async function Work() {
  const { data } = await getWorks()

  return (
    <>
      <Header />

      <div className="py-40 flex flex-col space-y-20">
        {data.works.map((work) => (
          <div key={work.id} className="flex flex-col space-y-10">
            <Image
              className="border-2 border-zinc-900 dark:border-white mx-auto"
              src={work.images[0].url}
              width={80}
              height={80}
              alt=""
            />

            <header className="flex flex-col items-center">
              <h1 className="text-3xl font-bold leading-[50px]">
                {work.title}
              </h1>

              <span className="text-sm text-center text-zinc-700 dark:text-white">
                {work.description}
              </span>
            </header>

            <section className="flex items-center justify-center space-x-2.5">
              <span className="flex items-center justify-center h-8 px-4 rounded-full bg-green-300/20 text-xs font-bold text-green-700 uppercase">
                {work.statuses}
              </span>

              <span className="flex items-center justify-center h-8 px-4 rounded-full bg-cyan-300/20 text-xs font-bold text-cyan-700 uppercase">
                {work.duration}
              </span>

              <a href={work.githubUrl}>
                <span className="flex items-center justify-center h-8 px-4 rounded-full border border-zinc-800 text-[11px] font-semibold text-zinc-800 uppercase">
                  {work.githubUrl}
                </span>
              </a>
            </section>

            <ol className="flex flex-wrap gap-2">
              {work.images.map(
                (image, idx) =>
                  idx > 0 && (
                    <Image
                      key={image.id}
                      className="border-2 border-zinc-900 dark:border-white overflow-hidden transition-all duration-500 hover:scale-105"
                      src={image.url}
                      alt=""
                      width={image.width / 4}
                      height={image.height / 4}
                    />
                  ),
              )}
            </ol>
          </div>
        ))}
      </div>
    </>
  )
}
