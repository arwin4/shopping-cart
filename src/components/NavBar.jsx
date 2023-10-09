import React, { useContext } from 'react';
import { Home, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartContext from '../context/cartContext';

function NavBar() {
  const { cartItems } = useContext(CartContext);

  function getNumberOfItemsInCart() {
    return cartItems
      .map((item) => item.numberInCart)
      .reduce((acc, cur) => acc + cur, 0);
  }

  const itemAmount = getNumberOfItemsInCart();

  return (
    <>
      <Link to="/">
        <Home />
      </Link>
      {itemAmount}
      <Link to="/cart">
        <ShoppingCart />
      </Link>
    </>
  );
}

export default NavBar;
