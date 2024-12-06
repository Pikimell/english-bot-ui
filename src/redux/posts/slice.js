import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  drafts: [],
  unsavedDraft: {},
};

export const slicePosts = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    updateUnsavedDraft(state, { payload: userData }) {
      state.unsavedDraft = userData;
    },
    reducer2(state, { payload: userData }) {},
    reducer3(state, { payload: userData }) {},
  },
});

export const { updateUnsavedDraft, reducer2, reducer3 } = slicePosts.actions;
export default slicePosts.reducer;
