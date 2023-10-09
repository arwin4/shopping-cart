import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import CartContext from '../context/cartContext';

export default function Store({ allProducts }) {
  const products = allProducts;
  const { handleAddToCart, handleRemoveFromCart } = useContext(CartContext);

  return (
    <div className="item-overview">
      {products.map((product) => (
        <div key={product.id}>
          {product.title}
          <button type="button" onClick={() => handleAddToCart(product.id)}>
            Add to cart
          </button>{' '}
          <button
            type="button"
            onClick={() => handleRemoveFromCart(product.id)}
          >
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
