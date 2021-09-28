import React from 'react';
import './Subtotal.css';
import NumberFormat from 'react-number-format';
import { useStateValue } from './StateProvider';

function Subtotal() {
    const [{ basket }] = useStateValue();

    const items = basket.length;
    const total = basket.reduce((acc, item) => item.price + acc, 0);
    console.log(basket);
    return (
        <div className="subtotal">
            <NumberFormat
                renderText={(value) => (
                    <>
                        <p>
                            Subtotal ({items} items): <strong>{total}</strong>
                        </p>
                        <small className="subtotal__gift">
                            <input type="checkbox" />
                            This order contains a gift
                        </small>
                    </>
                )}
                decimalScale={2}
                value={0}
                displayType={'text'}
                thousandSeparator={true}
                prefix={'$'}
            />
            <button>Proceed to Checkout</button>
        </div>
    );
}

export default Subtotal;
