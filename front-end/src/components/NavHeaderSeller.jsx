import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavHeader() {
  const history = useNavigate();
  const [userData] = useState(JSON.parse(localStorage.getItem('user')));

  // useEffect(() => {
  //   if (userData.token === undefined || userData.token === null) {
  //     localStorage.removeItem('user');
  //     history('/login');
  //   }
  // }, [history, userData.token]);

  function exitApp() {
    localStorage.removeItem('user');
    history('/login');
  }

  return (
    <header>
      <nav>
        <a
          data-testid="customer_products__element-navbar-link-orders"
          href="/seller/orders/"
        >
          MEUS PEDIDOS
        </a>
        <a
          data-testid="customer_products__element-navbar-user-full-name"
          href="perfil"
        >
          { userData.name }
        </a>
        <button
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
