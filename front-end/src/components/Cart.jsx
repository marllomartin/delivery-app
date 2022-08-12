import React from 'react';
import { useCart } from 'react-use-cart';
import { useNavigate } from 'react-router-dom';

function Cart() {
  const { cartTotal, isEmpty } = useCart();
  const history = useNavigate();
  const formatInt = (num) => {
    num = parseFloat(num);
    return num.toLocaleString('de-DE', { minimumFractionDigits: 2 });
  };

  function checkout() {
    history('/customer/checkout');
  }

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
        onClick={ () => checkout() }
        disabled={ isEmpty }
      >
        Cart
      </button>
    </div>
  );
}

export default Cart;
