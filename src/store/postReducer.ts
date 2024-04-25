import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '.';
import { Post } from '../api/http/PostsHttp';

export interface PostsState {
  postsItems: Post[];
  isLoading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  postsItems: [{ userId: 2, id: 3, title: 'string', body: 'string' }],
  isLoading: false,
  error: null,
};

const postsSlice = createSlice({
  name: 'posts',
  initialState,
  reducers: {
    setPosts(state, action) {
      state.postsItems = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const selectPosts = (state: RootState) => state.posts;

export const { setPosts, setIsLoading, setError } = postsSlice.actions;
export const postReducer = postsSlice.reducer;
