import { useContext } from 'react';
import ShopContext from '../shopContext';

export default function Cart() {
  const { cartItems } = useContext(ShopContext);
  console.log(cartItems);
  return 'Nothing yet';
}
