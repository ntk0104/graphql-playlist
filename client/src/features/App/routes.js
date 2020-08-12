import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import NotFound from 'components/NotFound';
import PrivateRoute from 'components/PrivateRoute';
import GlobalLoading from 'components/GlobalLoading';
import AuthRoute from 'components/AuthRoute';
import lazyInject from 'utils/lazyInject';
import loadable from 'utils/loadable';
import { checkToken } from 'utils/cookies';
import { history } from 'utils/history';
import * as routes from 'constants/routes';
import './index.scss';
import { loginSuccess } from 'features/App/slice';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql',
  cache: new InMemoryCache()
});


const LandingPage = loadable(() => import('features/App/pages/Home'));
const Login = loadable(() => import('features/App/pages/Login'));
const UserRoutes = lazyInject('User');
const ResourceRoutes = lazyInject('Resource');

const App = () => {
  const dispatch = useDispatch();
  const token = checkToken();
  if (token !== null) dispatch(loginSuccess({ token }));
  return (
    <ApolloProvider client={client}>
      <GlobalLoading />
      <Router history={history}>
        <Switch>
          <PrivateRoute exact path={routes.HOME} component={LandingPage} />
          <PrivateRoute path={routes.INVOICE_STATUS} component={UserRoutes} />
          <PrivateRoute path={routes.VENDOR_STATEMENT} component={ResourceRoutes} />
          <AuthRoute path={routes.LOGIN} component={Login} />
          <Route component={NotFound} />
        </Switch>
      </Router>
    </ApolloProvider>
  );
};

export default App;
