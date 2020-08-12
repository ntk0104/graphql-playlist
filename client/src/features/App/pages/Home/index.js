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
    }
  }
`;


HomePage.propTypes = {};

function HomePage() {
  const dispatch = useDispatch()
  const { loading, error, data } = useQuery(BOOKS);
  console.log("HomePage -> data", data)
  if (loading){
    dispatch(toggleLoading(true))
  } else {
    dispatch(toggleLoading(false))
  }
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="container">
        <ul>
          { _.get(data, 'books', []).map(book => (
            <li>{book.name}</li>
          )) }
        </ul>
      </div>
    </>
  );
}

export default HomePage;
