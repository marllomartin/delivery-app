import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Context from './Context';

function Provider({ children }) {
  const mainState = useState(JSON.parse(localStorage.getItem('cart')));

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
