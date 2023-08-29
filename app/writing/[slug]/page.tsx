import { client } from '@/apollo-client'

import { PostHeader } from '@/components/post-header'
import { Likes } from '@/components/likes'

import {
  GET_POST_BY_SLUG_QUERY,
  PostBySlug,
} from '@/gql/queries/get-post-by-slug-query'

async function getPostBySlug(slug: string) {
  const { data } = await client.query<PostBySlug>({
    query: GET_POST_BY_SLUG_QUERY,
    variables: {
      slug,
    },
    context: {
      fetchOptions: {
        next: { revalidate: 5 }, // seconds - 8 hours
      },
    },
  })

  return { data }
}

type Props = {
  params: {
    slug: string
  }
}

export default async function Post({ params }: Props) {
  const { data } = await getPostBySlug(params.slug)
  console.log('data.likes', data.likes)

  return (
    <div className="min-h-screen h-full w-full max-w-[calc(100%_-_40rem)] ml-auto bg-[#050505]">
      <PostHeader title={data.post.title}>
        <Likes likes={data.likes.length} />
      </PostHeader>

      <main className="px-20 w-full">
        <h1 className="text-xl font-bold text-white leading-[56px] pt-20">
          {data.post.title}
        </h1>

        <span className="text-white block">{data.post.description}</span>

        <div className="h-[1px] w-full my-5 bg-zinc-800/50" />

        <article
          dangerouslySetInnerHTML={{ __html: data.post.content.html }}
          className="pb-20 w-full prose prose-invert prose-h3:text-[17px] prose-p:text-white prose-pre:bg-zinc-800/50 prose-code:bg-[#161617] prose-code:p-1 prose-code:rounded prose-code:text-xs prose-pre:p-5 prose-code:font-bold prose-code:font-mono prose-pre:font-mono"
        />
      </main>
    </div>
  )
}
