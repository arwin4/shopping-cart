import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PropTypes from 'prop-types';
import App from './components/App';
import Error from './components/Error';
import Cart from './components/Cart';

import CartContext from './cartContext';
import Root from './components/Root';

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    // Surpressed because memos are discussed later in the course
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <CartContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </CartContext.Provider>
  );
}

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

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
