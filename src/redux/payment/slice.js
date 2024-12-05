import { createSlice } from '@reduxjs/toolkit';
const initialState = {};

export const slicePayment = createSlice({
  name: 'Payment',
  initialState,
  reducers: {
    reducer1(state, { payload: userData }) {},
    reducer2(state, { payload: userData }) {},
    reducer3(state, { payload: userData }) {},
  },
});

export const { reducer1, reducer2, reducer3 } = slicePayment.actions;
export default slicePayment.reducer;
