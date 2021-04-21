import gql from 'graphql-tag'

export const CATEGORIES = gql`
  query {
    categorias {
      id
      nombre
    }
  }
`
