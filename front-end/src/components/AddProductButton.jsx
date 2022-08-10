import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function AddProductButton({ data }) {
  const {
    prodCart,
    setProdCart,
  } = useContext(Context);

  let prod = prodCart;
  const { urlImage, name, id, price } = data;

  function addProd() {
    if (prod !== undefined && prod !== null) {
      prod.push({ urlImage, name, id, price });
      localStorage.setItem('cart', JSON.stringify(prod));
      setProdCart(prod);
    } else {
      prod = [];
      prod.push({ urlImage, name, id, price });
      localStorage.setItem('cart', JSON.stringify(prod));
      setProdCart(prod);
    }
  }

  return (
    <button
      type="button"
      data-testid={ `customer_products__button-card-add-item-${id}` }
      onClick={ () => addProd() }
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
