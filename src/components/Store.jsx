import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { ShoppingBasket } from 'lucide-react';
import CartContext from '../context/cartContext';

// CSS
import {
  store,
  productImage,
  productContainer,
} from '../styles/Store.module.css';
import { normal } from '../styles/Button.module.css';

export default function Store({ allProducts }) {
  const products = allProducts;
  const { addToCart } = useContext(CartContext);

  return (
    <div className={store}>
      {products.map((product) => (
        <div className={productContainer} key={product.id}>
          {product.title}
          <img
            className={productImage}
            src={product.image}
            alt={product.title}
          />
          €{product.price.toFixed(2)}
          <button
            className={normal}
            type="button"
            onClick={() => addToCart(product.id)}
          >
            <ShoppingBasket />
          </button>{' '}
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
