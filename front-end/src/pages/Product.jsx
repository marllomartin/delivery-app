import React, { useState, useEffect } from 'react';
import NavHeader from '../components/NavHeader';
import ProductCard from '../components/ProductCard';

function ProductsPage() {
  const [productsList, setProductsList] = useState([]);
  const login = async () => fetch('http://localhost:3001/products', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  })
    .then((response) => response.json())
    .then((res) => {
      setProductsList(res);
    });

  useEffect(() => {
    login();
  }, []);

  return (
    <>
      <div>
        <NavHeader />
      </div>
      <main>
        {productsList.map((prod) => (
          <ProductCard key={ `prodCard${prod.id}` } data={ prod } />
        ))}
      </main>
    </>
  );
}

export default ProductsPage;
