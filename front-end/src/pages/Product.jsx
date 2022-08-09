import React from 'react';
import NavHeader from '../components/NavHeader';
import ProductCard from '../components/ProductCard';

function ProductsPage() {
  return (
    <>
      <div>
        <NavHeader />
      </div>
      <main>
        <ProductCard />
      </main>
    </>
  );
}

export default ProductsPage;
