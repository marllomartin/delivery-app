import PropTypes from 'prop-types';
import React from 'react';

function EndCheckout({ data }) {
  function checkout() {
    console.log(
      '🚀 ~ file: EndCheckout.jsx ~ line 4 ~ EndCheckout ~ data',
      data,
    );
  }

  return (
    <div>
      <button type="button" onClick={ () => checkout() }>
        Finish
      </button>
    </div>
  );
}

export default EndCheckout;
