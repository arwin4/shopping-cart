import React, { useState } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import PropTypes from 'prop-types';
import App from './components/App';
import Error from './components/Error';
import Cart from './components/Cart';

import ShopContext from './shopContext';

function ShopProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  return (
    // Surpressed because memos are discussed later in the course
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ShopContext.Provider value={{ cartItems, setCartItems }}>
      {children}
    </ShopContext.Provider>
  );
}

export default function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <Error />,
    },
    {
      path: '/cart',
      element: <Cart />,
      errorElement: <Error />,
    },
  ]);
  return (
    <ShopProvider>
      <RouterProvider router={router} />
    </ShopProvider>
  );
}

ShopProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
