import React, { useContext } from 'react';
import { Plus, Trash } from 'lucide-react';
import CartContext from '../context/cartContext';
import NavBar from './NavBar';
import styles from '../styles/Button.module.css';

export default function Cart() {
  const { cartItems, addToCart, removeAllFromCart } = useContext(CartContext);

  const cartSummary = cartItems.map((item) => (
    <div key={item.id} className="cart-item">
      {item.title}: {item.numberInCart}
      <button
        type="button"
        className={styles.btn}
        onClick={() => addToCart(item.id)}
      >
        <Plus icon="lucide:edit" />
      </button>
      <button
        type="button"
        className={styles.btn}
        onClick={() => removeAllFromCart(item.id)}
      >
        <Trash icon="lucide:edit" />
      </button>
    </div>
  ));

  function getTotalPrice() {
    return cartItems
      .map((item) => item.price)
      .reduce((acc, cur) => acc + cur, 0)
      .toFixed(2);
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
