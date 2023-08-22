import Link from 'next/link'

import { client } from '@/apollo-client'
import {
  GET_POST_BY_SLUG_QUERY,
  PostBySlug,
} from '@/gql/queries/get-post-by-slug-query'

import { Github } from '@/components/icons/Github'

import { PostHeader } from '@/components/post-header'

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
    <div className="mx-auto max-w-4xl">
      <PostHeader createdAt={data.post.createdAt} title={data.post.title} />

      <h1 className="text-4xl font-bold text-zinc-700 -tracking-wider leading-10 mt-32 mb-10">
        {data.post.title}
      </h1>
      <span className="text-[15px] font-normal text-zinc-600  -tracking-tight block mb-10">
        {data.post.description}
      </span>

      <div
        dangerouslySetInnerHTML={{ __html: data.post.content.html }}
        className="post-content"
      />

      <div className="mb-5 mt-10 flex items-center">
        <span className="text-sm text-zinc-700  font-medium block mr-3.5">
          Tags
        </span>
        <ul className="flex flex-wrap gap-2">
          {data.post.tags.map((tag) => (
            <li
              key={tag}
              className="text-xs text-zinc-700  bg-zinc-100  font-medium py-2 px-3.5 rounded-lg"
            >
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <footer className="flex items-center justify-between w-full border-t border-t-zinc-100 ">
        <section className="flex items-center gap-x-5 py-5">
          <Link
            href="https://github.com/AndresdoSantos"
            target="_blank"
            className="flex items-center text-sm font-normal gap-x-2 text-zinc-700 "
          >
            <Github />
          </Link>
        </section>
      </footer>
    </div>
  )
}
