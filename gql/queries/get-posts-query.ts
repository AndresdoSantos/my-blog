import { gql } from '@apollo/client'

export const GET_POSTS_QUERY = gql`
  query GetPostsQuery {
    posts(orderBy: createdAt_DESC) {
      title
      slug
      description
      imageUrl
      tags

      createdAt
    }
  }
`

export type Post = {
  title: string
  slug: string
  description: string
  imageUrl: string
  tags: string[]
  createdAt: string
}

export type Posts = {
  posts: Post[]
}
