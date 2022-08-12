import React from 'react';
import { useCart } from 'react-use-cart';
import PropTypes from 'prop-types';

function RemoveProductButton({ data, sendQtFunc }) {
  const { updateItemQuantity, getItem } = useCart();
  const { id } = data;
  const qt = getItem(id);

  function rmProd(prodId) {
    if (qt !== undefined) {
      updateItemQuantity(prodId, qt.quantity - 1);
      sendQtFunc(() => qt.quantity - 1);
    } else {
      sendQtFunc(0);
    }
  }

  return (
    <button
      type="button"
      data-testid={ `customer_products__button-card-rm-item-${id}` }
      onClick={ () => rmProd(id) }
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
  sendQtFunc: PropTypes.func,
};

RemoveProductButton.defaultProps = {
  data: PropTypes.shape({
    name: 'a',
    id: 999,
    price: 'b',
    urlImage: 'c',
  }),
  sendQtFunc: PropTypes.func,
};

export default RemoveProductButton;
