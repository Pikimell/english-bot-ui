import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
};

export const sliceUsers = createSlice({
  name: 'Users',
  initialState,
  reducers: {
    setUsers(state, { payload: users }) {
      state.items = users;
    },
    updateUserInfo(state, { payload: { userId, data } }) {
      const userIndex = state.items.findIndex(el => el.userId === userId);
      if (userIndex >= 0) {
        state.items[userIndex] = { ...data };
      }
    },
  },
});

export const { setUsers, updateUserInfo } = sliceUsers.actions;
export default sliceUsers.reducer;
