import React from 'react';
import { useCart } from 'react-use-cart';
import PropTypes from 'prop-types';

function AddProductButton({ data, sendQtFunc }) {
  const { addItem, getItem } = useCart();
  const { id } = data;
  const qt = getItem(id);
  console.log('🚀 ~ file: AddProductButton.jsx ~ line 9 ~ AddProductButton ~ qt', qt);

  function addProd(prod) {
    addItem(prod);
    if (qt.quantity !== undefined) {
      sendQtFunc(qt.quantity);
    }
    sendQtFunc(0);
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
};

AddProductButton.defaultProps = {
  data: PropTypes.shape({
    name: 'a',
    id: 999,
    price: 'b',
    urlImage: 'c',
  }),
};

export default AddProductButton;
