import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import OrderCard from '../components/OrderCard';

function OrdersSeller() {
  const [saleList, setSaleList] = useState([]);
  console.log('🚀 ~ file: OrdersSeller.jsx ~ line 6 ~ OrdersSeller ~ saleList', saleList);

  // const login = async () => {
  //   const user = JSON.parse(localStorage.getItem('user'));
  //   const id = fetch(`http://localhost:3001/sellersId/${user.email}`, {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((res) => res);
  //   return id;
  // };

  const responseOrders = async () => {
    // const data = await login();
    fetch('http://localhost:3001/orders', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((res) => {
        setSaleList(res);
      });
  };

  useEffect(() => {
    responseOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      {saleList.map((prod) => (
        <Link to={ `/seller/orders/${prod.id}` } key={ `saleCard${prod.id}` }>
          <OrderCard data={ prod } />
        </Link>
      ))}
    </div>
  );
}

export default OrdersSeller;
