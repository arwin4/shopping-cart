import React, { useState } from 'react';
import PropTypes from 'prop-types';
import CartContext from './cartContext';

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

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
