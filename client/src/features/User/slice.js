/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  startDate: null,
  endDate: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.startDate = action.payload.startDate;
      state.endDate = action.payload.endDate;
    },
  },
});

export const {
  actions: { setFilter },
  name: sliceKey,
} = userSlice;
export default userSlice.reducer;
