import React from 'react';
import './Home.css';
import Product from './Product';

function Home() {
    return (
        <div className="home">
            <div className="home__container">
                <img
                    className="home__image"
                    src="https://m.media-amazon.com/images/I/71voAD69EVL._SX3000_.jpg"
                    alt="Amazon Banner"
                />

                <div className="home__row">
                    <Product
                        title="Os sofrimentos do jovem Werther - Edição Exclusiva Amazon eBook Kindle"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/41wVrGQDjtL._AC_SL260_.jpg"
                        rating={3}
                    />
                    <Product
                        title="Novo Kindle Paperwhite: agora com tela de 6,8” e temperatura de luz ajustável"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/61X0ISBpD-L._AC_SY200_.jpg"
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                        title="Quebra-cabeças Grow 1000 peças: Entardecer Europeu (exclusivo Amazon)"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/51QJnTjhBUS._AC_SY230_.jpg"
                        rating={3}
                    />
                    <Product
                        title="Revista Aventuras na História - Edição Especial"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/A1j-HjOJWoL._AC_SY200_.jpg"
                        rating={3}
                    />
                    <Product
                        title="The lean startup"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/716iAMmkTUL._AC_SY200_.jpg"
                        rating={3}
                    />
                </div>
                <div className="home__row">
                    <Product
                        title="The lean startup"
                        price={29.99}
                        image="https://m.media-amazon.com/images/I/41wTbMic2eL._AC_SY200_.jpg"
                        rating={3}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;
