import React, { useEffect, useState } from 'react';

import { Link } from 'react-router-dom';
import styles from '../styles/App.module.css';
import Store from './Store';

function App({ products, error, loading }) {
  if (error) return <>There was an error: {error}</>;
  if (loading) return <>Loading...</>;
  return (
    <>
      <Store allProducts={products} />
      <Link to="/cart">go to cart</Link>
    </>
  );
}

export default App;
