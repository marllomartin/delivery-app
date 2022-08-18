import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ProductsPage from './pages/Product';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
import Order from './pages/Order';
import Orders from './pages/Orders';
import OrderSeller from './pages/OrderSeller';
import OrdersSeller from './pages/OrdersSeller';
import UserManagement from './pages/UserManagement';
import Provider from './context/Provider';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Provider>
        <Routes>
          <Route path="/" element={ <Navigate replace to="/login" /> } />
          <Route path="/login" element={ <Login /> } />
          <Route path="/register" element={ <Register /> } />
          <Route path="/customer/products" element={ <ProductsPage /> } />
          <Route path="/customer/checkout" element={ <Checkout /> } />
          <Route path="/customer/orders/:id" element={ <Order /> } />
          <Route path="/customer/orders" element={ <Orders /> } />
          <Route path="/seller/orders/:id" element={ <OrderSeller /> } />
          <Route path="/seller/orders" element={ <OrdersSeller /> } />
          <Route path="/admin/manage" element={ <UserManagement /> } />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
