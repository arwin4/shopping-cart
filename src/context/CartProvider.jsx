import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { produce } from 'immer';
import CartContext from './cartContext';
import ProductContext from './productContext';

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const { products } = useContext(ProductContext);

  // Add 1 of this product to the shopping cart
  const addToCart = (id) => {
    const productToAdd = products.find((product) => product.id === id);
    setCartItems([...cartItems, productToAdd]);
  };

  // Remove all products of this type from the shopping cart
  const removeAllFromCart = (id) => {
    setCartItems(
      produce(cartItems, (draft) =>
        draft.filter((productInCart) => productInCart.id !== id),
      ),
    );
  };

  return (
    <CartContext.Provider
      // Surpressed because memos are discussed later in the course
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ cartItems, addToCart, removeAllFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
