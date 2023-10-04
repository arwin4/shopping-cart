import React from 'react';
import PropTypes from 'prop-types';
import { produce } from 'immer';

export default function Store({ allProducts, itemsInCart, setItemsInCart }) {
  const products = allProducts;

  const handleAddToCart = (product) => {
    setItemsInCart(
      produce(itemsInCart, (draft) => {
        draft.push(product);
        console.log(itemsInCart);
      }),
    );
  };

  return (
    <div className="item-overview">
      {products.map((product) => (
        <div key={product.id}>
          {product.title}
          <button type="button" onClick={() => handleAddToCart(product)}>
            Add to cart
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
