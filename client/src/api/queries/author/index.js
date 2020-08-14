import { gql } from '@apollo/client';


const AuthorQueries = {
  listAuthorName: gql`
    query GetBooks {
      authors {
        name
        id
      }
    }
  `
}

export default AuthorQueries

