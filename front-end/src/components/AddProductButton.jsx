import React from 'react';
import { useCart } from 'react-use-cart';
import PropTypes from 'prop-types';

function AddProductButton({ data, sendQtFunc }) {
  const { addItem, getItem } = useCart();
  const { id } = data;
  const qt = getItem(id);

  function addProd(prod) {
    addItem(prod);
    if (qt !== undefined) {
      sendQtFunc(qt.quantity + 1);
    } else {
      sendQtFunc(1);
    }
  }

  return (
    <button
      type="button"
      data-testid={ `customer_products__button-card-add-item-${id}` }
      onClick={ () => addProd(data) }
    >
      ADD
    </button>
  );
}

AddProductButton.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }),
  sendQtFunc: PropTypes.func,
};

AddProductButton.defaultProps = {
  data: PropTypes.shape({
    name: 'a',
    id: 999,
    price: 'b',
    urlImage: 'c',
  }),
  sendQtFunc: PropTypes.func,
};

export default AddProductButton;
