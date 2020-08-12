import { createSelector } from '@reduxjs/toolkit';
import { initialState } from './slice';

// First select the relevant part from the state
const selectDomain = state => state.user || initialState;

export const selectStartDate = createSelector(
  [selectDomain],
  userState => userState.startDate,
);
