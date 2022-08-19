import React, { useState } from 'react';
import { useCart } from 'react-use-cart';
import PropTypes from 'prop-types';
import AddProductButton from './AddProductButton';
import RemoveProductButton from './RemoveProductButton';
import ProductQuantity from './ProductQuantity';

function ProductCard({ data }) {
  const { getItem } = useCart();
  function getQt() {
    const { id } = data;

    const qt = getItem(id);
    if (qt === undefined) {
      return 0;
    }
    return qt.quantity;
  }

  const [prodQt, setProdQt] = useState(getQt());

  const sendQtFunc = (solventstate) => {
    setProdQt(solventstate);
  };

  const { urlImage, name, id, price } = data;
  return (
    <article className="productCard">
      <h5 data-testid={ `customer_products__element-card-title-${id}` }>{name}</h5>
      <img
        src={ urlImage }
        alt={ name }
        data-testid={ `customer_products__img-card-bg-image-${id}` }
      />
      <div>
        <span>R$: </span>
        <span data-testid={ `customer_products__element-card-price-${id}` }>
          {price.replace(/\./, ',')}
        </span>
      </div>
      <div className="addRmProd">
        <AddProductButton
          key={ `add${id}` }
          data={ data }
          quant={ prodQt }
          sendQtFunc={ sendQtFunc }
        />
        <ProductQuantity
          key={ `pq${id}` }
          data={ data }
          quant={ prodQt }
          sendQtFunc={ sendQtFunc }
        />
        <RemoveProductButton
          key={ `rm${id}` }
          data={ data }
          quant={ prodQt }
          sendQtFunc={ sendQtFunc }
        />
      </div>
    </article>
  );
}

ProductCard.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    price: PropTypes.string,
    urlImage: PropTypes.string,
  }),
};

ProductCard.defaultProps = {
  data: PropTypes.shape({
    name: 'a',
    id: 999,
    price: 'b',
    urlImage: 'c',
  }),
};

export default ProductCard;
