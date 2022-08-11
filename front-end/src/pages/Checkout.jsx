import React from 'react';
import { useCart } from 'react-use-cart';
import CartCard from '../components/CartCard';
import NavHeader from '../components/NavHeader';
import EndCheckout from '../components/EndCheckout';

function Checkout() {
  const { items, cartTotal } = useCart();

  return (
    <div>
      <NavHeader />
      {items.map((prod) => (
        <CartCard key={ `prodCart${prod.id}` } data={ prod } />
      ))}
      <p data-testid="customer_checkout__element-order-total-price">
        {cartTotal}
      </p>
      <EndCheckout data={ items } />
    </div>
  );
}

export default Checkout;
