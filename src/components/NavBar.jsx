import React, { useContext } from 'react';
import { ShoppingCart } from 'lucide-react';
import { Link } from 'react-router-dom';
import CartContext from '../context/cartContext';
import { nav, cart, title } from '../styles/NavBar.module.css';
import { normal } from '../styles/Button.module.css';

function NavBar() {
  const { cartItems } = useContext(CartContext);

  function getNumberOfItemsInCart() {
    return cartItems
      .map((item) => item.numberInCart)
      .reduce((acc, cur) => acc + cur, 0);
  }

  const itemAmount = getNumberOfItemsInCart();

  return (
    <div className={nav}>
      <Link to="/">
        <div className={title}>Buy My Stuff Store™</div>{' '}
      </Link>

      <Link className={`${cart} ${normal}`} to="/cart">
        <ShoppingCart />
        {itemAmount}
      </Link>
    </div>
  );
}

export default NavBar;
