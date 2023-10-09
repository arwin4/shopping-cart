import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ProductContext from './productContext';

function ProductProvider({ children }) {
  const [products, setProducts] = useState(null);

  return (
    <ProductContext.Provider
      // Surpressed because memos are discussed later in the course
      // eslint-disable-next-line react/jsx-no-constructed-context-values
      value={{ products, setProducts }}
    >
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;

ProductProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
