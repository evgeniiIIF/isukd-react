import { createSlice } from '@reduxjs/toolkit';
import { DictionaryListItem } from '../../api/http/DictionaryListHttp';
import { RootState } from '..';

export interface Meta {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface DictionaryListState {
  meta: Meta;
  dictionaryListItems: DictionaryListItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DictionaryListState = {
  meta: {} as Meta,
  dictionaryListItems: [],
  isLoading: false,
  error: null,
};

const dictionaryListSlice = createSlice({
  name: 'dictionaryListState',
  initialState,
  reducers: {
    setMeta(state, action) {
      state.meta = action.payload;
    },
    setDictionaryListItems(state, action) {
      state.dictionaryListItems = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const selectDictionaryList = (state: RootState) => state.dictionaryListState;
export const { setMeta, setDictionaryListItems, setIsLoading, setError } = dictionaryListSlice.actions;
export const dictionaryListReducer = dictionaryListSlice.reducer;
