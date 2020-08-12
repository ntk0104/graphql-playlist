import React, { Suspense } from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';

import './index.scss';

import NotFound from '../../components/NotFound';
import MainPage from './pages/Main';
import DetailPage from './pages/Detail';

User.propTypes = {};

function User() {
  const match = useRouteMatch();
  return (
    <Suspense fallback={<div>Loading ...</div>}>
      <Switch>
        <Route exact path={match.url} component={MainPage} />
        <Route exact path={`${match.url}/:userId`} component={DetailPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
}

export default User;
