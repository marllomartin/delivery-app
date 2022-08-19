import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ProductCardOrd from '../components/ProductCardOrd';
import NavHeader from '../components/NavHeader';

function Order() {
  const { id } = useParams();
  const [sale, setSale] = useState([]);
  const [sellerName, setSellerName] = useState('');
  const [sellDate, setSellDate] = useState('');
  const [totalPrice, setTotalPrice] = useState('');
  const [products, setProducts] = useState([]);
  const [delivButton, setDelivButton] = useState(true);
  const dataTest = 'customer_order_details__element-order-details-label-delivery-status';
  const appJson = 'application/json';

  const loadSale = async () => {
    const result = fetch(`http://localhost:3001/orders/${id}`, {
      method: 'GET',
      headers: {
        'Content-Type': appJson,
      },
    })
      .then((response) => response.json())
      .then((res) => {
        if (res.status === 'Em Trânsito') {
          setDelivButton(false);
        } else {
          setDelivButton(true);
        }
        return res;
      });
    return result;
  };

  const responseOrders = async () => {
    const data = await loadSale();
    setSale(data);
    setSellerName(data.seller);
    const d = new Date(data.saleDate);
    setSellDate(d.toLocaleDateString('en-GB'));
    setTotalPrice(data.totalPrice.replace(/\./, ','));
    setProducts(data.products);
  };

  useEffect(() => {
    responseOrders();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function deliveredCheck() {
    fetch(`http://localhost:3001/orders/${id}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': appJson,
      },
      body: JSON.stringify({ status: 'Entregue' }),
    });
    responseOrders();
  }

  return (
    <div>
      <NavHeader />
      <article className="order">
        <header className="orderDetail">
          <p data-testid="customer_order_details__element-order-details-label-order-id">
            {sale.id}
          </p>

          <p
            data-testid="customer_order_details__element-order-details-label-seller-name"
          >
            {sellerName.name}
          </p>

          <p data-testid="customer_order_details__element-order-details-label-order-date">
            {sellDate}
          </p>

          <p data-testid={ dataTest }>{sale.status}</p>
        </header>

        {products.map((prod, index) => (
          <ProductCardOrd key={ `prodCartOrd${prod.id}` } data={ prod } i={ index } />
        ))}
        <div>
          <br />
          <span>TOTAL: </span>
          <span>R$ </span>
          <span data-testid="customer_order_details__element-order-total-price">
            {totalPrice}
          </span>
        </div>
        <br />
        <button
          type="button"
          data-testid="customer_order_details__button-delivery-check"
          onClick={ () => deliveredCheck() }
          disabled={ delivButton }
        >
          PEDIDO RECEBIDO
        </button>
      </article>
    </div>
  );
}

export default Order;
