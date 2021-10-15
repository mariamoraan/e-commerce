import React, {useContext} from 'react'

import '../styles/global.css';
import '../styles/Cart.css';

import ProductItem from './ProductItem';
import AppContext from '../context/AppContext';

const Cart = () => {
    const {state} = useContext(AppContext);
    const items = state.cart;
    return(
        <div className="cart-menu">
                <h1>Cart</h1>
                <div className="cart-items">
                    <ul className={items.length > 0 ? "cart-items-list" : "none"}>
                        {
                            items.map(p=>(
                                <ProductItem props={p} key="{p.key}-cart"/>
                            ))
                        }
                        <button className="checkout-cart-button">Checkout</button>
                    </ul>
                    <div className={items.length > 0 ? "none" : "empty-cart"}>
                        <p>Your cart is empty.</p>
                    </div>
                </div>
        </div>
    );
}

export default Cart;