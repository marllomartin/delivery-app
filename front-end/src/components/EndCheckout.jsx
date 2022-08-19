import PropTypes from 'prop-types';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from 'react-use-cart';
import { useForm } from 'react-hook-form';

function EndCheckout({ data, total }) {
  const { emptyCart } = useCart();
  const [sellers, setSellers] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' });

  const history = useNavigate();
  const created = 201;

  const checkout = async (addressData) => {
    const user = JSON.parse(localStorage.getItem('user'));

    const checkoutData = {
      sellerId: addressData.seller,
      totalPrice: total,
      deliveryAddress: addressData.deliveryAddress,
      deliveryNumber: addressData.deliveryNumber,
      products: data,
    };

    fetch('http://localhost:3001/orders', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        authorization: user.token,
      },
      body: JSON.stringify(checkoutData),
    }).then(async (response) => {
      if (response.status === created) {
        return response.json();
      }
    }).then((res) => {
      emptyCart();
      history(`/customer/orders/${res.id}`);
    });
  };

  const getSellers = async () => fetch('http://localhost:3001/sellers', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
    },
  }).then((response) => response.json())
    .then((res) => {
      setSellers(res);
    });

  useEffect(() => {
    getSellers();
  }, []);

  return (
    <article>
      <form onSubmit={ handleSubmit(checkout) }>
        <label htmlFor="seller">
          Vendedor:
          <select
            data-testid="customer_checkout__select-seller"
            id="seller"
            { ...register('seller') }
          >
            {sellers.map((seller) => (
              <option key={ seller.name } value={ seller.id }>{ seller.name }</option>
            ))}
          </select>
        </label>
        <br />
        <div>
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
        </div>
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
    </article>
  );
}

EndCheckout.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }),
  total: PropTypes.number,
};

EndCheckout.defaultProps = {
  data: PropTypes.shape({
    name: 'a',
    id: 999,
    price: 'b',
    urlImage: 'c',
  }),
  total: 0,
};

export default EndCheckout;
