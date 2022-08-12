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
