import React from 'react';
import PropTypes from 'prop-types';

function ProductQuantity({ id }) {
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
  id: PropTypes.number,
};

ProductQuantity.defaultProps = {
  id: 999,
};

export default ProductQuantity;
