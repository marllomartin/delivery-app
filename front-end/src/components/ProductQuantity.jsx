import React from 'react';
import PropTypes from 'prop-types';
import { useCart } from 'react-use-cart';
import { useForm } from 'react-hook-form';

function ProductQuantity({ data, quant }) {
  const {
    register,
    handleSubmit,
    getValues,
  } = useForm({ mode: 'onChange' });

  const { updateItemQuantity, getItem, addItem } = useCart();
  const { id } = data;

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
          value: quant,
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
  quant: PropTypes.number,
};

ProductQuantity.defaultProps = {
  data: PropTypes.shape({
    name: 'a',
    id: 999,
    price: 'b',
    urlImage: 'c',
  }),
  quant: 0,
};

export default ProductQuantity;
