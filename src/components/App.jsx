import React, { useEffect, useState } from 'react';

import styles from '../styles/App.module.css';

function App() {
  const [shopItems, setShopItems] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(
    () =>
      async function fetchShopItems() {
        try {
          const response = await fetch('https://fakestoreapi.com/products');
          if (!response.ok) {
            throw new Error('Unable to fetch shop items from Fake Store API');
          }
          const fetchedShopItems = await response.json();
          setShopItems(fetchedShopItems);
          setError(null); // Prevent error state persisting
          console.log(fetchedShopItems);
        } catch (err) {
          setError(err.message);
          setShopItems(null);
          console.log(err);
        } finally {
          setLoading(false);
        }
      },
    [],
  );

  return (
    <div>
      <h1 className={styles.title}>Template</h1>
    </div>
  );
}

export default App;
