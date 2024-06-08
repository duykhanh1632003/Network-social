import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  list: [],
  status: 'idle',
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    fetchPostsStart(state) {
      state.status = 'loading';
    },
    fetchPostsSuccess(state, action) {
      state.status = 'succeeded';
      state.list = action.payload;
    },
    fetchPostsFailure(state, action) {
      state.status = 'failed';
      state.error = action.payload;
    },
    addPost(state, action) {
      state.list.push(action.payload);
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  addPost,
} = postsSlice.actions;

export default postsSlice.reducer;
