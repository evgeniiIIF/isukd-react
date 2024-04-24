import { createBrowserRouter, redirect } from 'react-router-dom';
import { DictionaryList } from './modules/DictionaryList/DictionaryList';
import { DictionaryItemPage } from './pages/DictionaryItemPage/DictionaryItemPage';

export const router = createBrowserRouter([
  {
    path: '/',
    loader: () => redirect('/dictionaries'),
  },
  {
    path: '/dictionaries',
    element: <DictionaryList />,
  },
  {
    path: '/dictionaries/:dictionaryId',
    element: <DictionaryItemPage />,
  },

  {
    path: '*',
    element: <h1>404 NOTHING</h1>,
  },
]);
