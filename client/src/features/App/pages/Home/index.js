import React from 'react';
import { Helmet } from 'react-helmet-async';
import './index.scss';
import _ from 'lodash'
import BookList from './components/BookList';
import AddBookForm from './components/AddBookForm';

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div className="container">
        <BookList />
        <AddBookForm />
      </div>
    </>
  );
}

export default HomePage;
