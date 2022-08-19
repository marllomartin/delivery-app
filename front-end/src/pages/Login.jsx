import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import LoginCard from '../components/LoginCard';

function Login() {
  const history = useNavigate();
  const responseOrders = async () => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user !== null && user !== undefined) {
      if (user.role === 'customer') {
        history('/customer/products');
      } else if (user.role === 'seller') {
        history('/seller/orders');
      } else if (user.role === 'administrator') {
        history('/admin/manage');
      }
    }
  };

  useEffect(() => {
    responseOrders();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="LoginPage">
      <LoginCard />
    </div>
  );
}

export default Login;
