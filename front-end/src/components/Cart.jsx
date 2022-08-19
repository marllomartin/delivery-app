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
    <article className="cartButton">
      <div className="cartPrice">
        <span>R$: </span>
        <span
          data-testid="customer_products__checkout-bottom-value"
        >
          { formatInt(cartTotal) }
        </span>
      </div>
      <button
        type="button"
        data-testid="customer_products__button-cart"
        onClick={ () => checkout() }
        disabled={ isEmpty }
      >
        Cart
      </button>
    </article>
  );
}

export default Cart;
