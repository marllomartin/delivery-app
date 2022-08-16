import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import NavHeaderSeller from '../components/NavHeaderSeller';

function OrderSeller() {
  const { id } = useParams();
  const [sale, setSale] = useState([]);
  const [prepButton, setPrepButton] = useState(true);
  const [dispButton, setDispButton] = useState(true);

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
        if (res.status === 'Pendente') {
          setPrepButton(false);
          setDispButton(true);
        }

        if (res.status === 'Preparando') {
          setDispButton(false);
          setPrepButton(true);
        }

        if (res.status === 'Em Trânsito') {
          setDispButton(true);
          setPrepButton(true);
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
    responseOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [sale]);

  function preparingCheck() {
    fetch(`http://localhost:3001/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': appJson,
      },
      body: JSON.stringify({ status: 'Preparando' }),
    });
    responseOrders();
  }

  function dispatchCheck() {
    fetch(`http://localhost:3001/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': appJson,
      },
      body: JSON.stringify({ status: 'Em Trânsito' }),
    });
    responseOrders();
  }

  return (
    <div>
      <NavHeaderSeller />
      <p data-testid="seller_order_details__element-order-details-label-order-id">
        {sale.id}
      </p>

      <p data-testid="seller_order_details__element-order-details-label-order-date">
        {sale.saleDate}
      </p>

      <p
        data-testid=" seller_order_details__element-order-details-label-delivery-status"
      >
        {sale.status}
      </p>

      <p data-testid="seller_order_details__element-order-total-price">
        {sale.totalPrice}
      </p>

      <button
        type="button"
        data-testid="seller_order_details__button-preparing-check"
        onClick={ () => preparingCheck() }
        disabled={ prepButton }
      >
        Preparo
      </button>

      <button
        type="button"
        data-testid="seller_order_details__button-dispatch-check"
        onClick={ () => dispatchCheck() }
        disabled={ dispButton }
      >
        Entrega
      </button>
    </div>
  );
}

export default OrderSeller;
