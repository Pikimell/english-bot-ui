import { createSlice } from '@reduxjs/toolkit';
const initialState = {
  items: [],
  unsavedDraft: {},
};

export const slicePosts = createSlice({
  name: 'Posts',
  initialState,
  reducers: {
    updateUnsavedDraft(state, { payload: userData }) {
      state.unsavedDraft = userData;
    },
    setPosts(state, { payload: userData }) {
      state.items = userData;
    },
    removePost(state, { payload: postId }) {
      state.items = state.items.filter(el => el._id !== postId);
    },
    updatePost(state, { payload: [postId, data] }) {
      const itemIndex = state.items.findIndex(el => el._id === postId);
      if (itemIndex !== -1) {
        state.items[itemIndex] = { ...state.items[itemIndex], ...data };
      }
    },
  },
});

export const { updateUnsavedDraft, setPosts, removePost, updatePost } =
  slicePosts.actions;
export default slicePosts.reducer;
