import { combineReducers } from '@reduxjs/toolkit';
import appReducer, { sliceKey as appKey } from 'features/App/slice';

export function createReducer(asyncReducers) {
  return combineReducers({
    [appKey]: appReducer,
    ...asyncReducers,
  });
}
