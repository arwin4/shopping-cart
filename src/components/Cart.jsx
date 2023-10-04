import { useContext } from 'react';
import PropTypes from 'prop-types';
import ShopContext from '../shopContext';

export default function Cart() {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);
  return 'Nothing yet';
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

Cart.propTypes = {
  cartItems: productsPropType.isRequired,
  setItemsInCart: PropTypes.func.isRequired,
};
