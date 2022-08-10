import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Context from '../context/Context';

function RemoveProductButton({ data }) {
  const {
    prodCart,
    setProdCart,
  } = useContext(Context);

  let prod = prodCart;
  const { urlImage, name, id, price } = data;

  function rmProd() {
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
      data-testid={ `customer_products__button-card-rm-item-${id}` }
      onClick={ () => rmProd() }
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
};

RemoveProductButton.defaultProps = {
  data: PropTypes.shape({
    name: 'a',
    id: 999,
    price: 'b',
    urlImage: 'c',
  }),
};

export default RemoveProductButton;
