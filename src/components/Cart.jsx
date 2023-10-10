import React, { useContext } from 'react';
import { Minus, Plus, Trash } from 'lucide-react';
import CartContext from '../context/cartContext';
import NavBar from './NavBar';

// CSS
import { normal } from '../styles/Button.module.css';
import {
  summary,
  cartItem,
  thumb,
  title,
  buttonWrapper,
  plusMinus,
  remove,
  total,
} from '../styles/cartSummary.module.css';

export default function Cart() {
  const { cartItems, addToCart, removeAllFromCart, removeOneFromCart } =
    useContext(CartContext);

  const cartSummary = cartItems.map((item) => (
    <div key={item.id} className={cartItem}>
      <div className={title}>{item.title}</div>
      <img className={thumb} src={item.image} alt={item.title} />
      <div>{item.numberInCart}</div>
      <div>€{(item.numberInCart * item.price).toFixed(2)}</div>
      <div className={buttonWrapper}>
        <div className={plusMinus}>
          <button
            type="button"
            className={normal}
            onClick={() => addToCart(item.id)}
          >
            <Plus />
          </button>{' '}
          <button
            type="button"
            className={normal}
            onClick={() => removeOneFromCart(item.id)}
          >
            <Minus />
          </button>{' '}
        </div>
        <button
          type="button"
          className={`${normal} ${remove}`}
          onClick={() => removeAllFromCart(item.id)}
        >
          <Trash />
        </button>
      </div>
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
      <div className={summary}>
        {cartItems.length === 0 ? (
          <div style={{ textAlign: 'center' }}>
            Your shopping cart is empty.{' '}
          </div>
        ) : (
          cartSummary
        )}
        <div className={total}>
          <div>Total price</div>
          <div>€{totalPrice}</div>
        </div>
      </div>
    </>
  );
}
