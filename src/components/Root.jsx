import React, { useContext, useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import ProductContext from '../context/productContext';

function Root() {
  const { products, setProducts } = useContext(ProductContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchShopItems = async () => {
      try {
        const response = await fetch('https://fakestoreapi.com/products');
        if (!response.ok) {
          throw new Error('Unable to fetch shop items from Fake Store API');
        }
        const fetchedShopItems = await response.json();
        // const fetchedShopItems = APImock;
        setProducts(fetchedShopItems);
        setError(null); // Prevent error state persisting
      } catch (err) {
        setError(err.message);
        setProducts(null);
      } finally {
        setLoading(false);
      }
    };
    fetchShopItems();
  }, []);

  if (error) return <>There was an error: {error}</>;
  if (loading) return <>Loading...</>;

  return <Outlet context={[products]} />;
}

export default Root;
