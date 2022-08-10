import React from 'react';
import PropTypes from 'prop-types';

function ProductQuantity({ data }) {
  const { urlImage, name, id, price } = data;
  return (
    <label htmlFor="quantity">
      Qt:
      <input
        value={ 0 }
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
      />
    </label>
  );
}

ProductQuantity.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }),
};

ProductQuantity.defaultProps = {
  data: PropTypes.shape({
    name: 'a',
    id: 999,
    price: 'b',
    urlImage: 'c',
  }),
};

export default ProductQuantity;
