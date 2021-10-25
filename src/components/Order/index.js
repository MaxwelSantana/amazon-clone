import React from 'react';
import './styles.css';
import moment from 'moment';
import NumberFormat from 'react-number-format';

import CheckoutProduct from '../CheckoutProduct';

function Order({ order }) {
  return (
    <div className="order">
      <h2>Order</h2>
      <p>{moment.unix(order.data.created).format('MMMM Do YYYY, h:mma')}</p>
      <p className="order__id">
        <small>{order.id}</small>
      </p>
      {order.data.basket?.map((item, index) => (
        <CheckoutProduct
          key={index}
          id={item.id}
          title={item.title}
          price={item.price}
          image={item.image}
          rating={item.rating}
          hideButton={true}
        />
      ))}
      <NumberFormat
        renderText={(value) => (
          <h3 className="order__total">Order Total: ({value})</h3>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={'text'}
        thousandSeparator={true}
        prefix={'$'}
      />
    </div>
  );
}

export default Order;
