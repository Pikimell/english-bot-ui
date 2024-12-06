import { configureStore } from '@reduxjs/toolkit';
import postReducer from './posts/slice';
import groupReducer from './groups/slice';
export const store = configureStore({
  reducer: {
    posts: postReducer,
    groups: groupReducer,
  },
});
