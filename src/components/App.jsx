import React from 'react';

import { useOutletContext } from 'react-router-dom';
// eslint-disable-next-line no-unused-vars
import styles from '../styles/App.module.css';
import Store from './Store';
import NavBar from './NavBar';

function App() {
  const [products] = useOutletContext();

  return (
    <>
      <NavBar />
      <Store allProducts={products} />
    </>
  );
}

export default App;
