import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './postReducer';
import { dictionaryListReducer } from './DictionaryList/reducer';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    dictionaryListState: dictionaryListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
