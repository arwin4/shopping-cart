import React, { useContext } from 'react';
import { Home, ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartContext from '../cartContext';

function NavBar() {
  const { cartItems } = useContext(CartContext);
  const itemAmount = cartItems.length;

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
