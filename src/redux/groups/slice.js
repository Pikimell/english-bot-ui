import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
};

export const sliceGroups = createSlice({
  name: 'Groups',
  initialState,
  reducers: {
    setGroups(state, { payload: groups }) {
      state.items = groups;
    },
    addGroup(state, { payload: group }) {
      state.items.push(group);
    },
  },
});

export const { setGroups, addGroup } = sliceGroups.actions;
export default sliceGroups.reducer;
