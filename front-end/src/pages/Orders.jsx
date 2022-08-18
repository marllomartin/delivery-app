import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import NavHeader from '../components/NavHeader';
import OrderCardCust from '../components/OrderCardCust';

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
  return (
    <>
      <header>
        <NavHeader />
      </header>
      <ul>
        {orders.map((prod) => (
          <Link to={ `/customer/orders/${prod.id}` } key={ `saleCardCust${prod.id}` }>
            <OrderCardCust data={ prod } />
          </Link>
        ))}
      </ul>
    </>
  );
}
export default Orders;
