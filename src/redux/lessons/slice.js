import { createSlice } from '@reduxjs/toolkit';
const initialState = {};

export const sliceLessons = createSlice({
  name: 'Lessons',
  initialState,
  reducers: {
    reducer1(state, { payload: userData }) {},
    reducer2(state, { payload: userData }) {},
    reducer3(state, { payload: userData }) {},
  },
});

export const { reducer1, reducer2, reducer3 } = sliceLessons.actions;
export default sliceLessons.reducer;
