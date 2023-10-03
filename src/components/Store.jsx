import React from 'react';
import PropTypes from 'prop-types';

export default function Store({ allProducts }) {
  const products = allProducts;
  return (
    <div className="item-overview">
      {products.map((product) => (
        <div key={product.id}>{product.title}</div>
      ))}
    </div>
  );
}

Store.propTypes = {
  allProducts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      title: PropTypes.string,
      description: PropTypes.string,
      image: PropTypes.string,
      price: PropTypes.number,
    }),
  ).isRequired,
};
