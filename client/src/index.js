import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { HelmetProvider } from 'react-helmet-async';
import { Provider } from 'react-redux';
// import 'sanitize.css';
import 'antd/dist/antd.css';

import AppRoutes from './features/App/routes';
import * as serviceWorker from './serviceWorker';
import { configureAppStore } from './store';

const store = configureAppStore();
const MOUNT_NODE = document.getElementById('root');

const ConnectedApp = ({ Component }) => (
  <Provider store={store}>
    <HelmetProvider>
      {/* <React.StrictMode> */}
        <Component />
      {/* </React.StrictMode> */}
    </HelmetProvider>
  </Provider>
);

ConnectedApp.propTypes = {
  Component: PropTypes.func,
};

const render = Component => {
  ReactDOM.render(<ConnectedApp Component={Component} />, MOUNT_NODE);
};

if (process.env.NODE_ENV === 'development' && module.hot) {
  // Hot reloadable translation json files and app
  // modules.hot.accept does not accept dynamic dependencies,
  // have to be constants at compile-time
  module.hot.accept(['./features/App/routes'], () => {
    ReactDOM.unmountComponentAtNode(MOUNT_NODE);
    // eslint-disable-next-line global-require, no-shadow
    const AppRoutes = require('./features/App/routes').default;
    render(AppRoutes);
    const now = new Date();
    // eslint-disable-next-line no-console
    console.log(
      `%c🔥🔥🔥 Hot reloaded!!! ${now.toLocaleTimeString()}`,
      'color: black; background: orange; font-size: 16px; font-weight: bold; padding: 4px 16px ',
    );
  });
}

render(AppRoutes);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
