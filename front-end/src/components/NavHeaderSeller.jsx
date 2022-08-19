import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function NavHeaderSeller() {
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
      <nav className="navBarSeller">
        <a
          role="button"
          data-testid="customer_products__element-navbar-link-orders"
          href="/seller/orders"
        >
          MEUS PEDIDOS
        </a>
        <a
          role="button"
          data-testid="customer_products__element-navbar-user-full-name"
          href="perfil"
        >
          {userData.name}
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

export default NavHeaderSeller;
