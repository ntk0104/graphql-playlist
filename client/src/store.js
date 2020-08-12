import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import logger from 'redux-logger';
import { createReducer } from './reducers';

const middleware =
  process.env.NODE_ENV === 'development'
    ? [...getDefaultMiddleware(), logger]
    : [...getDefaultMiddleware()];
const store = configureStore({
  reducer: createReducer(),
  middleware,
});

export function configureAppStore() {
  store.asyncReducers = {};
  store.injectReducer = (key, asyncReducer) => {
    store.asyncReducers[key] = asyncReducer;
    store.replaceReducer(createReducer(store.asyncReducers));
  };

  // Make reducers hot reloadable
  if (process.env.NODE_ENV === 'development' && module.hot) {
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createReducer(store.asyncReducers));
    });
  }
  return store;
}

export function getStore() {
  return store;
}
