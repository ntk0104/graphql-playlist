/* eslint-disable react/prop-types */
import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { checkToken } from 'utils/cookies';

import FullScreenLayout from 'layouts/FullScreen';

const AuthRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkToken() === null ? (
        <FullScreenLayout>
          <Component {...props} />
        </FullScreenLayout>
      ) : (<Redirect
        to={{
          pathname: '/users',
          state: { from: props.location },
        }}
      />)
    }
  />
);

export default AuthRoute;
