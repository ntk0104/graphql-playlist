import React from 'react';
import { Helmet } from 'react-helmet-async';

import './index.scss';

HomePage.propTypes = {};

function HomePage() {
  return (
    <>
      <Helmet>
        <title>Home</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <div>
        <p>Home Page</p>
      </div>
    </>
  );
}

export default HomePage;
