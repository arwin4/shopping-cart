import React, { useContext } from 'react';
import CartContext from '../cartContext';
import NavBar from './NavBar';

export default function Cart() {
  const { cartItems } = useContext(CartContext);

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

  return (
    <>
      <NavBar />
      {countedCartItems.map((item) => {
        const itemData = item[0];
        const itemCount = item[1];
        return (
          <div key={itemData.id} className="cart-item">
            {itemData.title}: {itemCount}
          </div>
        );
      })}
    </>
  );
}
