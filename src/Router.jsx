import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './components/App';
import Error from './components/Error';
import Cart from './components/Cart';

import Root from './components/Root';
import CartProvider from './context/CartProvider';

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <Error />,
      children: [
        {
          index: true,
          element: <App />,
          errorElement: <Error />,
        },
        {
          path: '/cart',
          element: <Cart />,
          errorElement: <Error />,
        },
      ],
    },
  ]);
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  );
}
