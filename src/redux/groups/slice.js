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
    updateGroup(state, { payload: { _id, data } }) {
      const groupIndex = state.items.findIndex(el => el._id === _id);
      if (groupIndex >= 0) {
        state.items[groupIndex] = { ...data };
      }
    },
  },
});

export const { setGroups, addGroup, updateGroup } = sliceGroups.actions;
export default sliceGroups.reducer;
