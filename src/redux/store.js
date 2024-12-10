import { configureStore } from '@reduxjs/toolkit';
import postReducer from './posts/slice';
import groupReducer from './groups/slice';
import usersReducer from './users/slice';
import mainReducer from './users/slice';
import lessonsReducer from './lessons/slice';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    groups: groupReducer,
    users: usersReducer,
    main: mainReducer,
    lessons: lessonsReducer,
  },
});
