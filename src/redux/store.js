import { configureStore } from '@reduxjs/toolkit';
import postReducer from './posts/slice';
export const store = configureStore({
  reducer: {
    posts: postReducer,
  },
});
