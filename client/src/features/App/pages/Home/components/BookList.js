import React from 'react';
import _ from 'lodash'
import '../index.scss'
import { useQuery } from '@apollo/client';
import { BookQueries } from 'api/queries';

function BookList(props) {
  const { loading, error, data } = useQuery(BookQueries.listBookName);

  return (
    <div className="booklists">
      <h1>List Books:</h1>
      <ul>
        {_.get(data, 'books', []).map(book => (
          <li key={book.id}>{book.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default BookList;