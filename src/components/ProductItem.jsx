import React, {useContext} from 'react';

import '../styles/global.css';
import '../styles/ProductItem.css';

import trash from '../assets/icon-delete.svg';

import AppContext from '../context/AppContext';

const ProductItem = ({props}) =>{
    const {removeFromCart} = useContext(AppContext);
    return(
        <div className="item">
            <img src={props.images[0].img} alt="" className="item-image"/>
            <div className="item-data">
                <h1>{props.name}</h1>
                <p>{props.price} x {props.amount} <span>{props.price * props.amount}</span></p>
            </div>
            <img src={trash} alt="trash" className="trash" onClick={()=>(removeFromCart(props))}/>
        </div>
    );
}

export default ProductItem;