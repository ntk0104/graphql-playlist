import { gql } from '@apollo/client';


const BookQueries = {
  listBookName: gql`
    query GetBooks {
      books {
        name
        id
      }
    }
  `,
  addBook: gql`
    mutation AddBook($name: String!, $genre: String!, $authorId: ID!) {
      addBook(name: $name, genre: $genre, authorId: $authorId){
        name
        id
      }
    }
  `
}

export default BookQueries

