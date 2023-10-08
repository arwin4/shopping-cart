import React from 'react';

import { useOutletContext } from 'react-router-dom';
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
