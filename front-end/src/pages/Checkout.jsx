import React from 'react';
import { useCart } from 'react-use-cart';
import CartCard from '../components/CartCard';
import NavHeader from '../components/NavHeader';
import EndCheckout from '../components/EndCheckout';

function Checkout() {
  const { items, cartTotal } = useCart();
  const priteTotal = String(cartTotal.toFixed(2));

  return (
    <div>
      <NavHeader />
      {items.map((prod, index) => (
        <CartCard key={ `prodCart${prod.id}` } data={ prod } i={ index } />
      ))}
      <p data-testid="customer_checkout__element-order-total-price">
        {priteTotal.replace(/\./, ',')}
      </p>
      <EndCheckout data={ items } />
    </div>
  );
}

export default Checkout;
