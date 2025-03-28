import { createSlice } from '@reduxjs/toolkit';
import { deleteLesson, fetchLessons } from './operation';
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

  items: [],
};

const handlePending = state => {
  state.isLoading = true;
  state.error = null;
};
const handleRejected = (state, { payload }) => {
  state.isLoading = false;
  state.error = payload;
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
      state.schedule[lesson.day] =
        state.schedule[lesson.day]?.filter(el => el !== lesson.time) || [];
    },
  },

  extraReducers: builder => {
    builder
      .addCase(fetchLessons.fulfilled, (state, { payload: userData }) => {
        state.isLoading = false;
        state.error = null;
        state.items = userData;
      })
      .addCase(deleteLesson.fulfilled, (state, { payload: id }) => {
        state.items = state.items.filter(el => el._id !== id);
      })
      .addCase(fetchLessons.pending, handlePending)
      .addCase(fetchLessons.rejected, handleRejected);
  },
});

export const { setSchedule, addSchedule, removeSchedule } =
  sliceLessons.actions;
export default sliceLessons.reducer;
