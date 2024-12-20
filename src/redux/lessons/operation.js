import { createAsyncThunk } from '@reduxjs/toolkit';
import { deleteLessonById, getAllLessons } from '../../api/lessonService';

export const fetchLessons = createAsyncThunk(
  'lessons/fetchAllLessons',
  async (
    params = {
      perPage: 9999999999,
    },
    thunkAPI,
  ) => {
    try {
      const response = await getAllLessons(params);
      return response.data;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);

export const deleteLesson = createAsyncThunk(
  'lessons/deleteLessons',
  async (id, thunkAPI) => {
    try {
      deleteLessonById(id);
      return id;
    } catch (e) {
      return thunkAPI.rejectWithValue(e.message);
    }
  },
);
