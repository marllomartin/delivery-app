import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavHeader from '../components/NavHeader';

function Order() {
  const { id } = useParams();
  const [sale, setSale] = useState([]);
  console.log('🚀 ~ file: Order.jsx ~ line 8 ~ Order ~ sale', sale);

  const loadSale = async () => fetch(`http://localhost:3001/orders/${id}`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((res) => {
      setSale(res);
    });

  useEffect(() => {
    loadSale();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NavHeader />
      <p data-testid="customer_order_details__element-order-details-label-order-id">
        {sale.id}
      </p>

      <p data-testid="customer_order_details__element-order-details-label-seller-name">
        {sale.sellerId}
      </p>

      <p data-testid="customer_order_details__element-order-details-label-order-date">
        {sale.saleDate}
      </p>

      <p
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        {sale.status}
      </p>

      <p data-testid="customer_order_details__element-order-total-price">
        {sale.totalPrice}
      </p>

      <button
        type="button"
        data-testid="customer_order_details__button-delivery-check"
      >
        a
      </button>
    </div>
  );
}

export default Order;
