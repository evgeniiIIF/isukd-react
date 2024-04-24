import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '..';
import { IDictionaryItemPageItem, IField } from '../../api/http/DictionaryItemPageHttp';

export interface IDictionaryItemPage {
  items: IDictionaryItemPageItem[];
  fields: IField[];
  isLoading: boolean;
  error: string | null;
}

const initialState: IDictionaryItemPage = {
  items: [],
  fields: [],
  isLoading: false,
  error: null,
};

const dictionaryItemPageSlice = createSlice({
  name: 'dictionaryItemPage',
  initialState,
  reducers: {
    setFields(state, action) {
      state.fields = action.payload;
    },
    setItems(state, action) {
      state.items = action.payload;
    },
    setIsLoading(state, action) {
      state.isLoading = action.payload;
    },
    setError(state, action) {
      state.error = action.payload;
    },
  },
});

export const selectDictionaryItemPage = (state: RootState) => state.dictionaryItemPageState;
export const { setItems, setFields, setIsLoading, setError } = dictionaryItemPageSlice.actions;
export const dictionaryItemPageReducer = dictionaryItemPageSlice.reducer;
