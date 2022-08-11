import React from 'react';
import { useCart } from 'react-use-cart';
import PropTypes from 'prop-types';

function AddProductButton({ data }) {
  const { addItem } = useCart();
  const { id } = data;

  return (
    <button
      type="button"
      data-testid={ `customer_products__button-card-add-item-${id}` }
      onClick={ () => addItem(data) }
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
