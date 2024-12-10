import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  isLoading: false,
};

export const sliceMain = createSlice({
  name: 'Main',
  initialState,
  reducers: {
    setLoading(state, { payload: value }) {
      state.isLoading = value;
    },
  },
});

export const { setLoading } = sliceMain.actions;
export default sliceMain.reducer;
