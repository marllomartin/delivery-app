import React from 'react';
import PropTypes from 'prop-types';

function AddProductButton({ id }) {
  return (
    <button
      type="button"
      data-testid={ `customer_products__button-card-add-item-${id}` }
    >
      ADD
    </button>
  );
}

AddProductButton.propTypes = {
  id: PropTypes.number,
};

AddProductButton.defaultProps = {
  id: 999,
};

export default AddProductButton;
