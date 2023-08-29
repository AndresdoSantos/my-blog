'use client'

import { BsFillSuitHeartFill } from 'react-icons/bs'
import { useSession } from 'next-auth/react'
import { usePathname } from 'next/navigation'

import { client } from '@/apollo-client'
import { CREATE_LIKE_MUTATION } from '@/gql/mutations/create-like-mutation'

type Props = {
  likes: number
}

export function Likes({ likes }: Props) {
  const session = useSession()
  const pathname = usePathname()

  const createLike = async () => {
    await client.mutate({
      mutation: CREATE_LIKE_MUTATION,
      variables: {
        name: session.data?.user?.name,
        slug: pathname.split('/writing/')[1],
      },
    })
  }

  return (
    <button
      className="text-white flex items-center justify-center rounded-md h-7 px-2 bg-zinc-200/20 border border-zinc-700"
      onClick={createLike}
    >
      <BsFillSuitHeartFill size={12} />

      <p className="text-xs font-bold text-white ml-1.5">{likes}</p>
    </button>
  )
}
