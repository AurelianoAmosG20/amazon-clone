import React from 'react';
import Header from '../../Components/Header/Header';
import CarrouselHome from '../../Components/Carrousel';
import Product from '../../Components/Product';
import Footer from  '../../Components/Footer';
import './style.css';

export default function Home(){
    return(
        <div className="body">
            <Header/>
            <CarrouselHome />

            <div className="time-line-products">
                <Product 
                    id="123"
                    title="Notebook Samsung Book E20"
                    price={3000}
                    rating={5}
                    image="data:image/jpeg;base64,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"
                />
                 <Product 
                    id="234"
                    title="Black+Decker BDPH200B Pistola De Pintura ePulverização (HVLP)"
                    price={450}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71fgw6yTByL._AC_SY355_.jpg"
                />
                 <Product 
                    id="4324832"
                    title="Tenis Fila Masculino"
                    price={112}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81CfEutTxuL._AC_SX695_.jpg"
                />
                <Product 
                    id="302932"
                    title="Monitor Dell 27', P2719H, Preto"
                    price={1100}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71H%2B2pcsNPL._AC_SX679_.jpg"
                />
            </div>
            
            <div className="products">
                <Product 
                    id="21564802"
                    title="Servidor de Dados NAS Quad-Core Al-314 1 7GHz 1GB DDR3-4 Baias sem Disco, Qnap, TS-431P2-1G"
                    price={4312}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/71MSMjXSYWL._AC_SX679_.jpg"
                />
                <Product 
                    id="549612"
                    title="Cartão Memória MicroSd 16GB 80MB/s Netac"
                    price={25}
                    rating={3}
                    image="https://images-na.ssl-images-amazon.com/images/I/61b1Zv7UevL._AC_SX522_.jpg"
                />
            </div>
            <div className="products">
                <Product 
                    id="846130"
                    title="Bicicleta Caloi Vulcan Aro 29 com 21 Velocidades"
                    price={1350}
                    rating={5}
                    image="https://images-na.ssl-images-amazon.com/images/I/81Gf6f6pHdL._AC_SX679_.jpg"
                />
                <Product 
                    id="845120124"
                    title="Selim Ergonômico, Multilaser"
                    price={80}
                    rating={4}
                    image="https://images-na.ssl-images-amazon.com/images/I/91v6C7U3NKL._AC_SX679_.jpg"
                />
            </div>
            <button className="back-to-nav"><a href="#nav">Voltar ao início</a></button>
            <Footer />
        </div>
    );
}