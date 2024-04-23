import { configureStore } from '@reduxjs/toolkit';
import { postReducer } from './postReducer';
import { dictionaryListReducer } from './Dictionary/reducer';

export const store = configureStore({
  reducer: {
    posts: postReducer,
    dictionaryListState: dictionaryListReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

// ======================
// import { configureStore } from '@reduxjs/toolkit';
// import axios from 'axios';

// const initialState = {
//   posts: [],
//   loading: false,
//   error: null,
// };

// const reducer = (state = initialState, action: any) => {
//   switch (action.type) {
//     case 'FETCH_POSTS_REQUEST':
//       return {
//         ...state,
//         loading: true,
//         error: null,
//       };
//     case 'FETCH_POSTS_SUCCESS':
//       return {
//         ...state,
//         loading: false,
//         posts: action.payload,
//       };
//     case 'FETCH_POSTS_FAILURE':
//       return {
//         ...state,
//         loading: false,
//         error: action.error,
//       };
//     default:
//       return state;
//   }
// };

// export const fetchPosts: any = () => async (dispatch: any) => {
//   dispatch({ type: 'FETCH_POSTS_REQUEST' });
//   try {
//     const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
//     dispatch({ type: 'FETCH_POSTS_SUCCESS', payload: response.data });
//   } catch (error: any) {
//     dispatch({ type: 'FETCH_POSTS_FAILURE', error: error.toString() });
//   }
// };

// export const store = configureStore({ reducer });
