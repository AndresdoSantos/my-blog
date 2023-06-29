import { gql } from '@apollo/client'

export const GET_POST_BY_SLUG_QUERY = gql`
  query GetPostsQuery($slug: String) {
    post(where: { slug: $slug }) {
      title
      slug
      description
      tags
      content {
        html
      }
      createdAt
    }
  }
`

export type PostBySlug = {
  post: {
    title: string
    slug: string
    description: string
    tags: string[]
    content: {
      html: string
    }
    createdAt: string
  }
}
