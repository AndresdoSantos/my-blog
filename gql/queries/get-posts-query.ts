import { gql } from '@apollo/client'

export const GET_POSTS_QUERY = gql`
  query GetPostsQuery {
    posts(orderBy: createdAt_DESC) {
      title
      slug
      createdAt
      id
    }
  }
`

export type Post = {
  title: string
  slug: string
  id: string
  createdAt: string
}

export type Posts = {
  posts: Post[]
}
