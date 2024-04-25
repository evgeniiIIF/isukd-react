import { createBrowserRouter, redirect } from 'react-router-dom';
import { DictionaryList } from './modules/DictionaryList/DictionaryList';
import { DictionaryItemPage } from './pages/DictionaryItemPage/DictionaryItemPage';
import { DefaultLayout } from './layouts/DefaultLayout';

export const router = createBrowserRouter([
  // {
  //   path: '/',
  //   loader: () => redirect('/dictionaries'),
  // },
  // {
  //   path: '/dictionaries',
  //   element: <DictionaryList />,
  // },
  // ++++++++++++++++++
  // {
  //   path: '/',
  //   element: <DictionaryList />,
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
        element: <DictionaryList />,
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
