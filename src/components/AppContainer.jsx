import React from 'react';
import { Link } from 'react-router-dom';
import Store from './Store';

export default function AppContainer({ products }) {
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

  return (
    <>
      <Store allProducts={products} />
      <Link to="/cart">go to cart</Link>
    </>
  );
}
