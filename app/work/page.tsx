import dayjs from 'dayjs'
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

      <div className="pt-40 flex flex-col space-y-20">
        {data.works.map((work) => (
          <div className="flex items-center space-x-10" key={work.id}>
            <div className="h-72 w-96 rounded-lg relative">
              <Image
                src={work.images[0].url}
                alt=""
                width={384}
                height={288}
                className="border-2 border-zinc-900 dark:border-white"
              />
              <Image
                className="absolute -bottom-10 left-5 h-20 w-20 border-2 border-zinc-900 dark:border-white"
                src={work.images[1].url}
                alt=""
                width={80}
                height={80}
              />
            </div>

            <section className="flex flex-col w-[60%] space-y-5">
              <h1 className="text-[54px] font-bold leading-[50px]">
                {work.title}
              </h1>

              <span className="text-sm text-zinc-700 dark:text-white">
                {work.description}
              </span>

              <section className="flex items-center gap-x-10">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500">
                    STATUS
                  </span>
                  <span className="text-xs font-medium uppercase">
                    {work.statuses[0]}
                  </span>
                </div>

                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-zinc-500">
                    STARTED AT
                  </span>
                  <span className="text-xs font-medium uppercase">
                    {dayjs(work.createdAt).format('YYYY[, ]MMMM DD')}
                  </span>
                </div>
              </section>
            </section>
          </div>
        ))}
      </div>
    </>
  )
}
