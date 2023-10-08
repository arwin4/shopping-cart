import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { produce } from 'immer';
import CartContext from '../cartContext';

export default function Store({ allProducts }) {
  const products = allProducts;
  const { cartItems, setCartItems } = useContext(CartContext);

  // Add 1 of this product to the shopping cart
  // TODO: use useState instead of heavy-handed use-immer
  const handleAddToCart = (product) => {
    setCartItems(
      produce(cartItems, (draft) => {
        draft.push(product);
        console.log(cartItems);
      }),
    );
  };

  // Remove all products of this type from the shopping cart
  const handleRemoveFromCart = (product) => {
    setCartItems(
      produce(cartItems, (draft) =>
        draft.filter((productInCart) => productInCart.id !== product.id),
      ),
    );
    console.log(cartItems);
  };

  return (
    <div className="item-overview">
      {products.map((product) => (
        <div key={product.id}>
          {product.title}
          <button type="button" onClick={() => handleAddToCart(product)}>
            Add to cart
          </button>{' '}
          <button type="button" onClick={() => handleRemoveFromCart(product)}>
            Remove from cart
          </button>
        </div>
      ))}
    </div>
  );
}

// Prop Types
const productsPropType = PropTypes.arrayOf(
  PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    price: PropTypes.number,
  }),
);

Store.propTypes = {
  allProducts: productsPropType.isRequired,
};
