import React from 'react';

import { Link, useOutletContext } from 'react-router-dom';
import styles from '../styles/App.module.css';
import Store from './Store';

function App() {
  const [products] = useOutletContext();

  return (
    <>
      <Store allProducts={products} />
      <Link to="/cart">Go to cart</Link>
    </>
  );
}

export default App;
