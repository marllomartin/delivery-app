import React, { useState, useEffect } from 'react';

function ProductCard() {
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
    <div>
      {productsList.map((prod) => (
        <div key={ prod.id }>
          <img
            src={ prod.urlImage }
            alt={ prod.name }
            data-testid={ `customer_products__img-card-bg-image-${prod.id}` }
          />
          <p data-testid={ `customer_products__element-card-title-${prod.id}` }>
            {prod.name}
          </p>
          <p data-testid={ `customer_products__element-card-price-${prod.id}` }>
            {prod.price}
          </p>
          <button
            type="button"
            data-testid={ `customer_products__button-card-add-item-${prod.id}` }
          >
            ADD
          </button>
          <label htmlFor="quantity">
            Qt:
            <input
              type="number"
              data-testid={ `customer_products__input-card-quantity-${prod.id}` }
            />
          </label>
          <button
            type="button"
            data-testid={ `customer_products__button-card-rm-item-${prod.id}` }
          >
            RMV
          </button>
        </div>
      ))}
    </div>
  );
}

export default ProductCard;
