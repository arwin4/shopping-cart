import React, { useEffect, useState } from 'react';

import { useImmer } from 'use-immer';

import styles from '../styles/App.module.css';
import Store from './Store';

function App() {
  const [products, setProducts] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [itemsInCart, setItemsInCart] = useImmer([]);

  useEffect(
    () =>
      async function fetchShopItems() {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Unable to fetch shop items from Fake Store API');
          }
          const fetchedShopItems = await response.json();
          setProducts(fetchedShopItems);
          setError(null); // Prevent error state persisting
          console.log(fetchedShopItems);
        } catch (err) {
          setError(err.message);
          setProducts(null);
          console.log(err);
        } finally {
          setLoading(false);
        }
      },
    [],
  );

  if (error) return <>There was an error: {error}</>;
  if (loading) return <>Loading...</>;
  return (
    <Store
      allProducts={products}
      itemsInCart={itemsInCart}
      setItemsInCart={setItemsInCart}
    />
  );
}

export default App;
