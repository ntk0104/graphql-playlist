/* eslint-disable no-param-reassign */
import { createSlice } from '@reduxjs/toolkit';

export const initialState = {
  blockIds: null,
};

const resourceSlice = createSlice({
  name: 'resources',
  initialState,
  reducers: {
    setFilter: (state, action) => {
      state.blockIds = action.payload.blockIds;
    },
  },
});

export const {
  actions: { setFilter },
  name: sliceKey,
} = resourceSlice;
export default resourceSlice.reducer;
