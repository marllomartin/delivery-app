import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const [prodCart, setProdCart] = useState(JSON.parse(localStorage.getItem('cart')));

  const mainState = {
    prodCart,
    setProdCart,
  };

  return (
    <Context.Provider value={ mainState }>
      { children }
    </Context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
}.isRequired;

export default Provider;
