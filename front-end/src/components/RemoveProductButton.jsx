import React from 'react';
import { useCart } from 'react-use-cart';
import PropTypes from 'prop-types';

function RemoveProductButton({ data }) {
  const { updateItemQuantity, getItem } = useCart();
  const { id } = data;
  const qt = getItem(id);

  return (
    <button
      type="button"
      data-testid={ `customer_products__button-card-rm-item-${id}` }
      onClick={ () => updateItemQuantity(id, qt.quantity - 1) }
    >
      RMV
    </button>
  );
}

RemoveProductButton.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }),
};

RemoveProductButton.defaultProps = {
  data: PropTypes.shape({
    name: 'a',
    id: 999,
    price: 'b',
    urlImage: 'c',
  }),
};

export default RemoveProductButton;
