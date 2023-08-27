import { gql } from '@apollo/client'

export const GET_PROJECT_BY_SLUG_QUERY = gql`
  query GetProjectBySlugQuery($slug: String!) {
    project(where: { slug: $slug }) {
      id
      description {
        html
      }
      statuses
      duration
      githubUrl
      title

      images {
        id
        url
        height
        width
      }
    }
  }
`

export type Project = {
  project: {
    description: any
    id: string
    title: string
    statuses: string
    duration: string
    githubUrl: string

    images: {
      id: string
      url: string
      height: number
      width: number
    }[]
  }
}
