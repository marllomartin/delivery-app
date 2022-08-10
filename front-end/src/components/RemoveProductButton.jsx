import React from 'react';
import PropTypes from 'prop-types';

function RemoveProductButton({ id }) {
  return (
    <button
      type="button"
      data-testid={ `customer_products__button-card-rm-item-${id}` }
    >
      RMV
    </button>
  );
}

RemoveProductButton.propTypes = {
  id: PropTypes.number,
};

RemoveProductButton.defaultProps = {
  id: 999,
};

export default RemoveProductButton;
