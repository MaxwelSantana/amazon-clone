import React from 'react';
import './Checkout.css';
import Subtotal from './Subtotal';
import CheckoutProduct from './CheckoutProduct';
import { useStateValue } from './StateProvider';
import { Flipper, Flipped } from 'react-flip-toolkit';

function Checkout() {
    const [{ basket, user }] = useStateValue();

    console.log('Checkout Render');

    return (
        <div className="checkout">
            <div className="checkout__left">
                <img
                    src="https://images-na.ssl-images-amazon.com/images/G/02/UK_CCMP/TM/OCC_Amazon1._CB423492668_.jpg"
                    alt="Adsense banner"
                    className="checkout__ad"
                />

                <div>
                    <h3>Hello, {user?.email}</h3>
                    <h2 className="checkout__title">Your shopping Basket</h2>
                    <Flipper flipKey={basket.length}>
                        <Flipped flipId="list">
                            <div>
                                {basket.map((item, i) => (
                                    <Flipped key={item.id + i} flipId={item.id}>
                                        <CheckoutProduct
                                            id={item.id}
                                            title={item.title}
                                            price={item.price}
                                            image={item.image}
                                            rating={item.rating}
                                        />
                                    </Flipped>
                                ))}
                            </div>
                        </Flipped>
                    </Flipper>
                </div>
            </div>
            <div className="checkout__right">
                <Subtotal />
            </div>
        </div>
    );
}

export default Checkout;
