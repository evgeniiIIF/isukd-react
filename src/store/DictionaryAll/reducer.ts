import { createSlice } from '@reduxjs/toolkit';
import { DictionaryAllItem } from '../../api/http/DictionaryAllHttp';
import { RootState } from '..';

export interface Meta {
  hasNextPage: boolean;
  hasPreviousPage: boolean;
  pageIndex: number;
  pageSize: number;
  totalCount: number;
  totalPages: number;
}

export interface DictionaryAllState {
  meta: Meta;
  dictionaryListItems: DictionaryAllItem[];
  isLoading: boolean;
  error: string | null;
}

const initialState: DictionaryAllState = {
  meta: {} as Meta,
  dictionaryListItems: [],
  isLoading: false,
  error: null,
};

const dictionaryAllSlice = createSlice({
  name: 'dictionaryAllState',
  initialState,
  reducers: {
    setMeta(state, action) {
      state.meta = action.payload;
    },
    setDictionaryAllItems(state, action) {
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

export const selectDictionaryAll = (state: RootState) => state.dictionaryAllState;
export const { setMeta, setDictionaryAllItems, setIsLoading, setError } = dictionaryAllSlice.actions;
export const dictionaryListReducer = dictionaryAllSlice.reducer;
