import { gql } from '@apollo/client'

export const GET_POSTS_QUERY = gql`
  query GetPostsQuery {
    posts {
      title
      slug
      description
      imageUrl

      createdAt
    }
  }
`

export type Post = {
  title: string
  slug: string
  description: string
  imageUrl: string
  createdAt: string
}

export type Posts = {
  posts: Post[]
}
