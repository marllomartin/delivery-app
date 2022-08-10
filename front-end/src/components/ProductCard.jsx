import React from 'react';
import PropTypes from 'prop-types';
import AddProductButton from './AddProductButton';
import RemoveProductButton from './RemoveProductButton';
import ProductQuantity from './ProductQuantity';

function ProductCard({ data }) {
  const { urlImage, name, id, price } = data;
  return (
    <div>
      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <p data-testid={ `customer_products__element-card-title-${id}` }>
        {name}
      </p>
      <p data-testid={ `customer_products__element-card-price-${id}` }>
        {price.replace(/\./, ',')}
      </p>
      <AddProductButton key={ `add${id}` } data={ data } />
      <ProductQuantity key={ `pq${id}` } data={ data } />
      <RemoveProductButton key={ `rm${id}` } data={ data } />
    </div>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }),
};

ProductCard.defaultProps = {
  data: PropTypes.shape({
    name: 'a',
    id: 999,
    price: 'b',
    urlImage: 'c',
  }),
};

export default ProductCard;
