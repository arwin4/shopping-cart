import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import Error from './components/Error';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
    },
  ]);
  return <RouterProvider router={router} />;
}
