import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './pages/Login';
// import './App.css';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Navigate replace to="/login" /> } />
        <Route path="/login" element={ <Login /> } />
      </Routes>
    </div>
  );
}

export default App;
