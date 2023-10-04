import React from 'react';
import PropTypes from 'prop-types';
import { produce } from 'immer';

export default function Store({ allProducts, itemsInCart, setItemsInCart }) {
  const products = allProducts;

  // Add 1 of this product to the shopping cart
  const handleAddToCart = (product) => {
    setItemsInCart(
      produce(itemsInCart, (draft) => {
        draft.push(product);
        console.log(itemsInCart);
      }),
    );
  };

  // Remove all products of this type from the shopping cart
  const handleRemoveFromCart = (product) => {
    setItemsInCart(
      produce(itemsInCart, (draft) =>
        draft.filter((productInCart) => productInCart.id !== product.id),
      ),
    );
    console.log(itemsInCart);
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
  itemsInCart: productsPropType.isRequired,
  allProducts: productsPropType.isRequired,
  setItemsInCart: PropTypes.func.isRequired,
};
