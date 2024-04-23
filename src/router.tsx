import { Outlet, createBrowserRouter } from 'react-router-dom';
import App from './App';
import { DictionaryList } from './modules/DictionaryList/DictionaryList';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DictionaryList />,
  },
  {
    path: 'about',
    element: (
      <h1>
        About par <Outlet />
      </h1>
    ),
    children: [
      {
        path: 'child',
        element: <h3>About Child </h3>,
      },
      // {
      //   path: ':projectId/:taskId', // Определите параметры в пути
      //   element: <AboutPage />,
      //   loader: async ({ params }) => {
      //     const { projectId, taskId } = params;
      //     return fetch(`/api/posts/${projectId}/${taskId}`);
      //   },
      // },
    ],
  },

  {
    path: '*',
    element: <h1>404 NOTHING</h1>,
  },
]);
