import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavHeader from '../components/NavHeader';

function Order() {
  const { id } = useParams();
  const [sale, setSale] = useState([]);
  const [delivButton, setDelivButton] = useState(true);

  const appJson = 'application/json';

  const loadSale = async () => {
    const result = fetch(`http://localhost:3001/orders/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': appJson,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status === 'Em Trânsito') {
          setDelivButton(false);
        } else {
          setDelivButton(true);
        }
        return res;
      });
    return result;
  };

  const responseOrders = async () => {
    const data = await loadSale();
    setSale(data);
  };

  useEffect(() => {
    loadSale();
  }, []);
  responseOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps

  function deliveredCheck() {
    fetch(`http://localhost:3001/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': appJson,
      },
      body: JSON.stringify({ status: 'Entregue' }),
    });
    responseOrders();
  }

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
        onClick={ () => deliveredCheck() }
        disabled={ delivButton }
      >
        a
      </button>
    </div>
  );
}

export default Order;
