import React, { useContext } from 'react';
import { Minus, Plus, Trash } from 'lucide-react';
import CartContext from '../context/cartContext';
import NavBar from './NavBar';
import styles from '../styles/Button.module.css';

export default function Cart() {
  const { cartItems, addToCart, removeAllFromCart, removeOneFromCart } =
    useContext(CartContext);

  const cartSummary = cartItems.map((item) => (
    <div key={item.id} className="cart-item">
      {item.title}: {item.numberInCart}
      <button
        type="button"
        className={styles.btn}
        onClick={() => removeOneFromCart(item.id)}
      >
        <Minus />
      </button>{' '}
      <button
        type="button"
        className={styles.btn}
        onClick={() => addToCart(item.id)}
      >
        <Plus />
      </button>
      <button
        type="button"
        className={styles.btn}
        onClick={() => removeAllFromCart(item.id)}
      >
        <Trash />
      </button>
    </div>
  ));

  function getTotalPrice() {
    return cartItems
      .map((item) => item.price * item.numberInCart) // price per product
      .reduce((acc, cur) => acc + cur, 0) // add up all prices
      .toFixed(2); // round to 2 decimals
  }

  const totalPrice = getTotalPrice();

  return (
    <>
      <NavBar />
      {cartItems.length === 0 ? 'Your shopping cart is empty.' : cartSummary}
      {totalPrice}
    </>
  );
}
