import React from 'react';
import { useCart } from 'react-use-cart';
import CartCard from '../components/CartCard';
import NavHeader from '../components/NavHeader';

function Checkout() {
  const { items } = useCart();

  return (
    <div>
      <NavHeader />
      {items.map((prod) => (
        <CartCard key={ `prodCart${prod.id}` } data={ prod } />
      ))}
    </div>
  );
}

export default Checkout;
