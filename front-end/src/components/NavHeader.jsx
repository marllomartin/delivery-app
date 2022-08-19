import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function NavHeader() {
  const history = useNavigate();
  const [userData] = useState(JSON.parse(localStorage.getItem('user')));

  useEffect(() => {
    if (userData === undefined || userData === null) {
      localStorage.removeItem('user');
      history('/login');
    }
  }, [history, userData]);

  function exitApp() {
    localStorage.removeItem('user');
    history('/login');
  }

  return (
    <header>
      <nav className="navBar">
        <a
          role="button"
          data-testid="customer_products__element-navbar-link-products"
          href="/customer/products"
        >
          PRODUTOS
        </a>
        <a
          role="button"
          data-testid="customer_products__element-navbar-link-orders"
          href="/customer/orders"
        >
          MEUS PEDIDOS
        </a>
        <a
          role="button"
          data-testid="customer_products__element-navbar-user-full-name"
          href="perfil"
        >
          { userData.name }
        </a>
        <button
          className="outline"
          type="button"
          data-testid="customer_products__element-navbar-link-logout"
          onClick={ exitApp }
        >
          SAIR
        </button>
      </nav>
    </header>
  );
}

export default NavHeader;
