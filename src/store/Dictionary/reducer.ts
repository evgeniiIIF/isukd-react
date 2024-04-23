import { Dispatch, PayloadAction, createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { DictionaryListItem } from '../../api/http/DictionaryListHttp';
import { RootState } from '..';

export interface DictionaryListState {
  dictionaryListItems: DictionaryListItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DictionaryListState = {
  dictionaryListItems: [],
  isLoading: false,
  error: null,
};

const dictionaryListSlice = createSlice({
  name: 'dictionaryListState',
  initialState,
  reducers: {
    setDictionaryItems(state, action) {
      state.dictionaryListItems = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
  // extraReducers(builder) {
  //   builder
  //     .addCase(fetchPosts.pending, (state, action) => {
  //       state.status = 'loading';
  //     })
  //     .addCase(fetchPosts.fulfilled, (state, action) => {
  //       state.status = 'succeeded';
  //       console.log(state.status);

  //       // Add any fetched posts to the array
  //       state.postsItems = action.payload;
  //     })
  //     .addCase(fetchPosts.rejected, (state, action) => {
  //       state.status = 'failed';
  //       state.error = action.error.message;
  //     });
  // },
});

// export const fetchPosts = createAsyncThunk('posts/fetchPosts', async () => {
//   const posts = await PostsHttp.getAll();
//   return posts.data;
// });

export const selectDictionaryList = (state: RootState) => state.dictionaryListState;

export const { setDictionaryItems, setIsLoading, setError } = dictionaryListSlice.actions;
export const dictionaryListReducer = dictionaryListSlice.reducer;
