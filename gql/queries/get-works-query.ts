import { gql } from '@apollo/client'

export const GET_WORKS_QUERY = gql`
  query GetWorksQuery {
    works {
      createdAt
      description
      id
      publishedAt
      statuses
      title
      updatedAt

      images {
        id
        url
      }
    }
  }
`

export type Work = {
  createdAt: string
  description: string
  id: string
  publishedAt: any
  statuses: string[]
  title: string
  updatedAt: string

  images: {
    id: string
    url: string
  }[]
}

export type Works = {
  works: Work[]
}
