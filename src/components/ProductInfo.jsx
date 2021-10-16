import React, {useState, useContext} from 'react';


import cart from '../assets/icon-cart.svg';
import minus from '../assets/icon-minus.svg';
import plus from '../assets/icon-plus.svg';
import previous from '../assets/icon-previous.svg';
import next from '../assets/icon-next.svg';

import '../styles/global.css';
import '../styles/ProductInfo.css';

import AppContext from '../context/AppContext';

const ProductInfo = ({props}) => {
    const [amount, setAmount] = useState(0);
    const [actualImage, setActualImage] = useState(props.images[0]);
    const {addToCart} = useContext(AppContext);
    return(
        <div className="product-info">
            <div className="product-info-images">
                <div className="product-info-images-main-group">
                    <img src={actualImage.img} alt="sneakers" className="product-info-images-main"/>
                    <div className="product-info-images-buttons">
                        <button
                        onClick={(i)=>{
                            let position = props.images.findIndex((e) => {return e.key === actualImage.key});
                            position === 0 ? setActualImage(props.images[props.images.length - 1]) : setActualImage(props.images[position - 1]);
                        }}>
                            <img src={previous} alt="previous" className="prev-button" />
                        </button>
                        <button
                        onClick={(i)=>{
                            let position = props.images.findIndex((e) => {return e.key === actualImage.key});
                            position === props.images.length -1 ? setActualImage(props.images[0]) : setActualImage(props.images[position + 1]);
                        }}>
                            <img src={next} alt="next" className="next-button" />
                        </button>
                    </div>
                </div>
                <div className="product-info-images-sub">
                    {props.images.map((i)=>(
                        <div className={actualImage.key === i.key ? 'active' : null}><img src={i.img} alt="sneakers"  key={i.key} onClick={()=>(setActualImage(i))}/></div>
                    ))}
                </div>
            </div>
            <div className="product-info-text">
                <h2 className="product-info-text-company">Sneaker Company</h2>
                <h1 className="product-info-text-title">{props.name}</h1>
                <p className="product-info-text-description">{props.description}</p>
                <h1 className="product-info-text-price">
                    ${props.price}
                    <span className="product-info-text-price-discount">{props.discount}</span> 
                    <span className="product-info-text-price-last-price">{props.last_price}</span>
                </h1>
                <div className="product-info-text-buttons">
                    <span className="add-to-cart-units">
                        <button onClick={()=>{amount>0 ? setAmount(amount - 1) : setAmount(0)}}>
                            <img src={minus} alt="minus" />
                        </button>
                        <p>{amount}</p>
                        <button onClick={()=>{setAmount(amount + 1)}}>
                            <img src={plus} alt="plus" />
                        </button>
                    </span>
                    <button  className="add-to-cart-button" onClick={()=>{
                            addToCart(props, amount);
                            setAmount(0);
                        }
                        
                        }>
                        <span>
                        <img src={cart} alt="cart" />
                        <p>Add to cart</p>
                        </span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default ProductInfo;