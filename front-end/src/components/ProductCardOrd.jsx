import PropTypes from 'prop-types';
import React from 'react';

function ProductCardOrd({ data }) {
  const { id, name, price, salesProduct } = data;
  const itemTot = (price * salesProduct.quantity).toFixed(2);

  return (
    <div className="cartCard">
      <p
        data-testid={ `customer_checkout__element-order-table-item-number-${id}` }
      >
        {id}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-name-${id}` }>
        {name}
      </p>
      <p data-testid={ `customer_checkout__element-order-table-quantity-${id}` }>
        {salesProduct.quantity}
      </p>
      <div>
        <span>R$ </span>
        <span data-testid={ `customer_checkout__element-order-table-unit-price-${id}` }>
          {price.replace(/\./, ',')}
        </span>
      </div>
      <div>
        <span>R$ </span>
        <span data-testid={ `customer_checkout__element-order-table-sub-total-${id}` }>
          {itemTot.replace(/\./, ',')}
        </span>
      </div>
    </div>
  );
}

ProductCardOrd.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    salesProduct: PropTypes.shape({
      quantity: PropTypes.number,
    }),
  }),
};

ProductCardOrd.defaultProps = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    salesProduct: PropTypes.shape({
      quantity: PropTypes.number,
    }),
  }),
};

export default ProductCardOrd;
