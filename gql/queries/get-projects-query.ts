import { gql } from '@apollo/client'

export const GET_PROJECTS_QUERY = gql`
  query GetProjectsQuery {
    projects {
      id
      createdAt
      title
      slug
      logo {
        id
        url
        height
        width
      }
    }
  }
`

export type Project = {
  title: string
  slug: string
  createdAt: string
  id: string
  logo: {
    id: string
    url: string
    height: number
    width: number
  }
}

export type Projects = {
  projects: Project[]
}
