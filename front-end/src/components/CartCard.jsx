import PropTypes from 'prop-types';
import React from 'react';
import { useCart } from 'react-use-cart';

function CartCard({ data }) {
  const { getItem, removeItem } = useCart();
  const { id } = data;
  const prod = getItem(id);

  return (
    <div>
      <p
        data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
      >
        {prod.id}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-name-${id}` }>
        {prod.name}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-quantity-${id}` }>
        {prod.quantity}
      </p>
      <p
        data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }
      >
        {prod.price}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }>
        {prod.itemTotal}
      </p>
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ () => removeItem(id) }
      >
        RMV
      </button>
    </div>
  );
}

CartCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
  }),
};

CartCard.defaultProps = {
  data: PropTypes.shape({
    id: PropTypes.number,
  }),
};

export default CartCard;
