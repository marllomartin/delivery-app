import PropTypes from 'prop-types';
import React from 'react';
import { useForm } from 'react-hook-form';

function EndCheckout({ data }) {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  function checkout() {
    console.log(
      '🚀 ~ file: EndCheckout.jsx ~ line 4 ~ EndCheckout ~ data',
      data,
    );
  }

  return (
    <div>
      <form onSubmit={ handleSubmit(checkout) }>
        <label htmlFor="seller">
          Vendedor:
          <select
            data-testid="customer_checkout__select-seller"
            id="seller"
            { ...register('category') }
          >
            <option value="">Select...</option>
            <option value="A">Category A</option>
            <option value="B">Category B</option>
          </select>
        </label>
        <br />
        <label htmlFor="endereco">
          Endereco:
          <input
            id="endereco"
            data-testid="customer_checkout__input-address"
            { ...register('deliveryAddress', {
              required: true,
            }) }
          />
        </label>
        <br />
        <label htmlFor="enderecoNum">
          Numero endereco:
          <input
            id="enderecoNum"
            type="number"
            data-testid="customer_checkout__input-addressNumber"
            { ...register('deliveryNumber', { required: true }) }
          />
        </label>
        {errors.exampleRequired && <span>This field is required</span>}
        <br />
        <button
          type="submit"
          data-testid="customer_checkout__button-submit-order"
          disabled={ !isDirty || !isValid }
        >
          Finish
        </button>
      </form>
    </div>
  );
}

EndCheckout.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }),
};

EndCheckout.defaultProps = {
  data: PropTypes.shape({
    name: 'a',
    id: 999,
    price: 'b',
    urlImage: 'c',
  }),
};

export default EndCheckout;
