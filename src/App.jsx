import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import Home from './ui/Home';

import AppLayout from './ui/AppLayout';

const router = createBrowserRouter([
  {
    element: <AppLayout />,

    children: [
      {
        path: '/',
        element: <Home />,
      },

    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
