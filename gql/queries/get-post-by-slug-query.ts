import { gql } from '@apollo/client'

export const GET_POST_BY_SLUG_QUERY = gql`
  query GetPostBySlugQuery($slug: String!) {
    post(where: { slug: $slug }) {
      title
      slug
      description
      content {
        html
      }
      createdAt
    }
    likes(where: { slug: $slug }, stage: DRAFT) {
      name
    }
  }
`

export type PostBySlug = {
  post: {
    title: string
    slug: string
    description: string
    content: {
      html: any
    }
    createdAt: string
  }
  likes: {
    name: string
  }[]
}
