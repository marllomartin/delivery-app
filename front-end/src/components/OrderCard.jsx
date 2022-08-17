import PropTypes from 'prop-types';
import React from 'react';

function OrderCard({ data }) {
  return (
    <div>
      <p data-testid={ `seller_orders__element-order-id-${data.id}` }>
        {data.id}
      </p>

      <p data-testid={ `seller_orders__element-order-date-${data.id}` }>
        {data.saleDate}
      </p>

      <p
        data-testid={ `seller_orders__element-delivery-status-${data.id}` }
      >
        {data.status}
      </p>

      <p data-testid={ `seller_orders__element-card-price-${data.id}` }>
        {data.totalPrice}
      </p>

      <p data-testid={ `seller_orders__element-card-address-${data.id}` }>
        {data.deliveryAddress}
        {data.deliveryNumber}
      </p>
    </div>
  );
}

OrderCard.propTypes = {
  data: PropTypes.shape({
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
  }),
};

OrderCard.defaultProps = {
  data: PropTypes.shape({
    deliveryAddress: PropTypes.string,
    deliveryNumber: PropTypes.string,
    id: PropTypes.number,
    saleDate: PropTypes.string,
    status: PropTypes.string,
    totalPrice: PropTypes.string,
  }),
};
export default OrderCard;
