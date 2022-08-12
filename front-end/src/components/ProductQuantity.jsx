import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from 'react-use-cart';

function ProductQuantity({ data, quant, sendQtFunc }) {
  const { updateItemQuantity, getItem, addItem } = useCart();
  const { id } = data;
  const qt = getItem(id);

  const handleChange = ({ target: { value } }) => {
    if (value >= 0) {
      sendQtFunc(+value);
      if (qt !== undefined) {
        updateItemQuantity(id, parseInt(value, 10));
      } else {
        addItem(data, parseInt(value, 10));
      }
    }
  };

  return (
    <input
      type="number"
      data-testid={ `customer_products__input-card-quantity-${id}` }
      onChange={ handleChange }
      value={ quant }
    />
  );
}

ProductQuantity.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }),
  quant: PropTypes.number,
  sendQtFunc: PropTypes.func,
};

ProductQuantity.defaultProps = {
  data: PropTypes.shape({
    name: 'a',
    id: 999,
    price: 'b',
    urlImage: 'c',
  }),
  quant: 0,
  sendQtFunc: PropTypes.func,
};

export default ProductQuantity;
