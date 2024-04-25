import { createBrowserRouter, redirect } from 'react-router-dom';
import { DictionaryItemPage } from './pages/DictionaryItemPage/DictionaryItemPage';
import { DefaultLayout } from './layouts/DefaultLayout';
import { DictionaryAll } from './modules/DictionaryList/DictionaryList';

export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   loader: () => redirect('/dictionaries'),
  // },
  // {
  //   path: '/dictionaries',
  //   element: <DictionaryAll />,
  // },
  // ++++++++++++++++++
  // {
  //   path: '/',
  //   element: <DictionaryAll />,
  // },
  // {
  //   path: ':dictionaryId',
  //   element: <DictionaryItemPage />,
  // },
  // ++++++++++++++++++
  {
    path: '/',
    element: <DefaultLayout />,
    children: [
      {
        index: true,
        element: <DictionaryAll />,
      },
      {
        path: ':dictionaryId',
        element: <DictionaryItemPage />,
      },
    ],
  },

  {
    path: '*',
    element: <h1>404 NOTHING</h1>,
  },
]);
