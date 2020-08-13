import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { useQuery, gql } from '@apollo/client';
import './index.scss';
import { useDispatch } from 'react-redux';
import { toggleLoading } from 'features/App/slice';
import _ from 'lodash'

const BOOKS = gql`
  query GetBooks {
    books {
      name
      id
    }
  }
`;


HomePage.propTypes = {};

function HomePage() {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(BOOKS);
  
  useEffect(() => {
    dispatch(toggleLoading(loading))
  }, [loading])
  
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="container">
        <ul>
          {_.get(data, 'books', []).map(book => (
            <li key={book.id}>{book.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default HomePage;
