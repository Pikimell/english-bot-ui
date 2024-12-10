import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  schedule: {},
};

export const sliceLessons = createSlice({
  name: 'Lessons',
  initialState,
  reducers: {
    setSchedule(state, { payload: userData }) {
      state.schedule = userData;
    },
  },
});

export const { setSchedule, reducer2, reducer3 } = sliceLessons.actions;
export default sliceLessons.reducer;
