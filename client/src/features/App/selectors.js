import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = state => state.app || initialState;

export const selectLoading = createSelector(
  [selectDomain],
  state => state.loading,
);
