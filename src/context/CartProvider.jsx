import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import { produce } from 'immer';
import CartContext from './cartContext';
import ProductContext from './productContext';

function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);
  const { products } = useContext(ProductContext);

  const findItemInCartByID = (id) => cartItems.find((item) => item?.id === id);

  // Add 1 of this product to the shopping cart
  const addToCart = (id) => {
    const productToAdd = products.find((product) => product.id === id);
    const foundItem = findItemInCartByID(id);
    if (!foundItem) {
      const newItem = { ...productToAdd, numberInCart: 1 };
      setCartItems([...cartItems, newItem]);
    } else {
      setCartItems(
        produce(cartItems, (draft) => {
          const productToIncrease = draft.find((item) => item.id === id);
          productToIncrease.numberInCart += 1;
        }),
      );
    }
  };

  // Remove all products of this type from the shopping cart
  const removeAllFromCart = (id) => {
    setCartItems(
      produce(cartItems, (draft) =>
        draft.filter((productInCart) => productInCart.id !== id),
      ),
    );
  };

  const removeOneFromCart = (id) => {
    const foundItem = findItemInCartByID(id);
    if (foundItem.numberInCart === 1) {
      removeAllFromCart(id);
    } else {
      setCartItems(
        produce(cartItems, (draft) => {
          const itemToDecrease = draft.find((item) => item.id === id);
          itemToDecrease.numberInCart -= 1;
        }),
      );
    }
  };

  return (
    <CartContext.Provider
      // Surpressed because memos are discussed later in the course
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ cartItems, addToCart, removeAllFromCart, removeOneFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

CartProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
