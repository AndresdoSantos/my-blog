import { gql } from '@apollo/client'

export const GET_WORKS_QUERY = gql`
  query GetWorksQuery {
    works {
      id
      description
      title
      statuses
      duration
      githubUrl

      images {
        id
        url
        height
        width
      }
    }
  }
`

export type Work = {
  description: string
  id: string
  statuses: string
  title: string
  duration: string
  githubUrl: string

  images: {
    id: string
    url: string
    height: number
    width: number
  }[]
}

export type Works = {
  works: Work[]
}
