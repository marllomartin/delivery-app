import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import ProductsPage from './pages/Product';
import Register from './pages/Register';
import Checkout from './pages/Checkout';
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
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
