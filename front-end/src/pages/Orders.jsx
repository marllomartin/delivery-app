import React, { useState, useEffect } from 'react';
import NavHeader from '../components/NavHeader';
const fatchOrder = async () => {
  const url = 'http://localhost:3001/orders';
  const response = await fetch(url);
  const data = await response.json();
  return data;
};
function Orders() {
  const [orders, setOrders] = useState([]);
  const responseOrders = async () => {
    const data = await fatchOrder();
    setOrders(data);
  };
  useEffect(() => {
    responseOrders();
  }, []);
  console.log(orders);
  return (
    <>
      <header>
        <NavHeader />
      </header>
      <ul>
        {orders.map(({ id, status, saleDate, price }) => (
          <div key={ id }>
            <p>pedido</p>
            <p data-testid={ `customer_orders__element-order-id-${id}` }>{id}</p>
            <p data-testid={ `customer_orders__element-delivery-status-${id}` }>
              {status}
            </p>
            <p data-testid={ `customer_orders__element-order-date-${id}` }>
              {saleDate}
            </p>
            <p data-testid={ `customer_orders__element-card-price-${id}` }>{price}</p>
          </div>
        ))}
      </ul>
    </>
  );
}
export default Orders;
