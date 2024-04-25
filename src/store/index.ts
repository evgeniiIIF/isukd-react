import { configureStore } from '@reduxjs/toolkit';
import { dictionaryListReducer } from './DictionaryAll/reducer';
import { dictionaryItemPageReducer } from './DictionaryItemPage/reducer';

export const store = configureStore({
  reducer: {
    dictionaryAllState: dictionaryListReducer,
    dictionaryItemPageState: dictionaryItemPageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
