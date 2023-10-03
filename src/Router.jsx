import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
    },
  ]);
  return <RouterProvider router={router} />;
}
