import React from 'react';
import { useCart } from 'react-use-cart';

function Cart() {
  const { cartTotal, isEmpty } = useCart();

  const formatInt = (num) => {
    num = parseFloat(num);
    return num.toLocaleString('de-DE', { minimumFractionDigits: 2 });
  };

  return (
    <div>
      <p
        data-testid="customer_products__checkout-bottom-value"
      >
        { formatInt(cartTotal) }
      </p>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        href="/customer/checkout"
        disabled={ isEmpty }
      >
        Cart
      </button>
    </div>
  );
}

export default Cart;
