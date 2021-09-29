import './App.css';
import Header from './Header';
import Home from './Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Checkout from './Checkout';
import Login from './Login';
import { useEffect } from 'react';
import { auth, onAuthStateChanged } from './firebase';
import { useStateValue } from './StateProvider';
import Payment from './Payment';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import Orders from './Orders';

const promise = loadStripe(
    'pk_test_51Jf21dFTHpjxfhtfngEueTVetY8SybGk5sG5jVEcBOrhUouRk3vZppVpQhybKcHEfzrBE1NyezDm18XNazLomRjG001nNBiCNi',
);

function App() {
    const [, dispatch] = useStateValue();

    useEffect(() => {
        onAuthStateChanged(auth, (authUser) => {
            if (authUser) {
                dispatch({ type: 'SET_USER', user: authUser });
            } else {
                dispatch({ type: 'SET_USER', user: null });
            }
        });
    }, [dispatch]);

    return (
        <Router>
            <div className="App">
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                    <Route exact path="/">
                        <Header />
                        <Home />
                    </Route>
                    <Route path="/checkout">
                        <Header />
                        <Checkout />
                    </Route>
                    <Route path="/payment">
                        <Header />
                        <Elements stripe={promise}>
                            <Payment />
                        </Elements>
                    </Route>
                    <Route path="/orders">
                        <Header />
                        <Orders />
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
