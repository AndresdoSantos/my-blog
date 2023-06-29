import { gql } from '@apollo/client'

export const UPDATE_LIKE_NUMBERS_MUTATION = gql`
  mutation UpdateLikeNumbersMutation($slug: String!, $likes: Int!) {
    updatePost(where: { slug: $slug }, data: { likes: $likes }) {
      id
    }
  }
`

export type UpdateLikeNumbers = {
  post: {
    id: number
  }
}
