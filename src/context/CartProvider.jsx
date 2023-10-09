import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { produce } from 'immer';
import CartContext from './cartContext';

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  // Add 1 of this product to the shopping cart
  const handleAddToCart = (product) => {
    setCartItems([...cartItems, product]);
    console.log(cartItems);
  };

  // Remove all products of this type from the shopping cart
  const handleRemoveFromCart = (id) => {
    setCartItems(
      produce(cartItems, (draft) =>
        draft.filter((productInCart) => productInCart.id !== id),
      ),
    );
    console.log(cartItems);
  };

  return (
    <CartContext.Provider
      // Surpressed because memos are discussed later in the course
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ cartItems, handleAddToCart, handleRemoveFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
