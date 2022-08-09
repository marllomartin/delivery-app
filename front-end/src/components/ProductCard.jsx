import React from 'react';

function ProductCard() {
  const dataTestIds = [
    'customer_products__element-card-price-1',
    'customer_products__element-card-price-2',
    'customer_products__element-card-price-3',
    'customer_products__element-card-price-4',
    'customer_products__element-card-price-5',
    'customer_products__element-card-price-6',
    'customer_products__element-card-price-7',
    'customer_products__element-card-price-8',
    'customer_products__element-card-price-9',
    'customer_products__element-card-price-10',
    'customer_products__element-card-price-11',

  ];
  return (
    <div>
      {
        dataTestIds.map((testId) => (
          <div key={ testId } data-testid={ testId }>
            <p>iae</p>
          </div>
        ))
      }
    </div>
  );
}

export default ProductCard;
