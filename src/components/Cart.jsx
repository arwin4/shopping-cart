import React, { useContext } from 'react';
import { Trash } from 'lucide-react';
import CartContext from '../context/cartContext';
import NavBar from './NavBar';
import styles from '../styles/Button.module.css';

export default function Cart() {
  const { cartItems, handleRemoveFromCart } = useContext(CartContext);

  // Get an array of items and the amount of each item, for example: [[{'Backpack', ...}, 3], ...]
  function getCountedCartItems() {
    // Source for duplicate counting:
    // https://bobbyhadz.com/blog/javascript-count-duplicates-in-array
    const uniqueItems = [...new Set(cartItems)];
    return uniqueItems.map((item) => [
      item,
      cartItems.filter((cartItem) => cartItem === item).length,
    ]);
  }
  const countedCartItems = getCountedCartItems();

  const cartSummary = countedCartItems.map((item) => {
    const itemData = item[0];
    const itemCount = item[1];
    return (
      <div key={itemData.id} className="cart-item">
        {itemData.title}: {itemCount}
        <button
          type="button"
          className={styles.btn}
          onClick={() => handleRemoveFromCart(itemData.id)}
        >
          <Trash icon="lucide:edit" />
        </button>
      </div>
    );
  });

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
      {countedCartItems.length === 0
        ? 'Your shopping cart is empty.'
        : cartSummary}
      {totalPrice}
    </>
  );
}
