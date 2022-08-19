import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';

function OrderCard({ data }) {
  const [sellDate, setSellDate] = useState('');

  useEffect(() => {
    const d = new Date(data.saleDate);
    setSellDate(d.toLocaleDateString('en-GB'));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <article className="ordersPage">
      <p data-testid={ `seller_orders__element-order-id-${data.id}` }>
        {data.id}
      </p>

      <p data-testid={ `seller_orders__element-order-date-${data.id}` }>
        {sellDate}
      </p>

      <p data-testid={ `seller_orders__element-delivery-status-${data.id}` }>
        {data.status}
      </p>

      <p data-testid={ `seller_orders__element-card-price-${data.id}` }>
        {`R$ ${data.totalPrice.replace(/\./, ',')}`}
      </p>

      <p data-testid={ `seller_orders__element-card-address-${data.id}` }>
        {`${data.deliveryAddress} ${data.deliveryNumber}`}
      </p>
    </article>
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
