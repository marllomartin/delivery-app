import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/login" element={ <Login /> } />
        <Route path="/" element={ <Navigate replace to="/login" /> } />
      </Routes>
    </div>
  );
}

export default App;
