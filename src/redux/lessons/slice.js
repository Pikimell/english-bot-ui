import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  schedule: {
    Пн: [],
    Вт: [],
    Ср: [],
    Чт: [],
    Пт: [],
    Сб: [],
    Нд: [],
  },
};

export const sliceLessons = createSlice({
  name: 'Lessons',
  initialState,
  reducers: {
    setSchedule(state, { payload: userData }) {
      state.schedule = userData;
    },
    addSchedule(state, { payload: lesson }) {
      if (!state.schedule[lesson.day]) {
        state.schedule[lesson.day] = [];
      }
      state.schedule[lesson.day].push(lesson.time);
    },
    removeSchedule(state, { payload: lesson }) {
      state.schedule[lesson.day] = state.schedule[lesson.day].filter(
        el => el !== lesson.time,
      );
    },
  },
});

export const { setSchedule, addSchedule, removeSchedule } =
  sliceLessons.actions;
export default sliceLessons.reducer;
