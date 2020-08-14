import _ from 'lodash'
import React, { useState, useEffect } from 'react';
import '../index.scss'
import { useQuery, useMutation } from '@apollo/client';
import { AuthorQueries, BookQueries } from 'api/queries';
import { useDispatch } from 'react-redux';
import { toggleLoading } from 'features/App/slice';

function AddBookForm(props) {
  const dispatch = useDispatch()
  const [name, setName] = useState('')
  const [genre, setGenre] = useState('')
  const [authorId, setAuthorID] = useState('')
  const { loading, error, data: authorsData } = useQuery(AuthorQueries.listAuthorName);
  console.log("AddBookForm -> loading", loading)
  const [addBook] = useMutation(BookQueries.addBook);

  useEffect(() => {
    dispatch(toggleLoading(loading))
  }, [loading])

  const handleSubmit = (e) => {
    e.preventDefault()
    addBook({
      variables: {
        name,
        genre,
        authorId: authorId
      },
      refetchQueries: [{ query: BookQueries.listBookName }]
    })
  }

  return (
    <>
      <h1>Add new book:</h1>
      <form className="addBookForm" onSubmit={handleSubmit}>
        <div className="field">
          <label>Book Name:</label>
          <input type="text" onChange={e => setName(e.target.value)} />
        </div>
        <div className="field">
          <label>Genre:</label>
          <input type="text" onChange={e => setGenre(e.target.value)} />
        </div>
        <div className="field">
          <label>Book Name:</label>
          <select onChange={e => setAuthorID(e.target.value)}>
            <option>Select author</option>
            {
              _.get(authorsData, 'authors', []).map(author => (
                <option key={author.id} value={author.id} >{author.name}</option>
              ))
            }
          </select>
        </div>
        <button>Add</button>
      </form>
    </>
  );
}

export default AddBookForm;