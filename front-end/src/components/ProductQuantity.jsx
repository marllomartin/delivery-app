import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from 'react-use-cart';
import { useForm } from 'react-hook-form';

function ProductQuantity({ data }) {
  const {
    register,
    handleSubmit,
    getValues,
  } = useForm({ mode: 'onChange' });

  const { updateItemQuantity, getItem, addItem } = useCart();
  const { id } = data;

  function getQt() {
    const qt = getItem(id);
    if (qt === undefined) {
      return 0;
    }
    return qt.quantity;
  }

  function onChange() {
    const value = getValues('quantity');
    const item = getItem(id);
    if (item === undefined) {
      addItem(data, parseInt(value, 10));
    } else {
      updateItemQuantity(id, parseInt(value, 10));
    }
  }

  return (
    <form onSubmit={ handleSubmit() }>
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        { ...register('quantity', {
          min: 0,
          value: getQt(),
          onChange: () => onChange(),
        }) }
      />
    </form>
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
