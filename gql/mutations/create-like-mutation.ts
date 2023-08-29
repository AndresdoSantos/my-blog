import { gql } from '@apollo/client'

export const CREATE_LIKE_MUTATION = gql`
  mutation CreateLikeMutation($name: String, $slug: String) {
    createLike(data: { name: $name, slug: $slug }) {
      name
    }
  }
`
