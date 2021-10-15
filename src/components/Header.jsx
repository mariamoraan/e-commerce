import React, {useState, useContext} from 'react';

import menu from '../assets/icon-menu.svg'; 
import logo from '../assets/logo.svg';
import cart from '../assets/icon-cart.svg';
import avatar from '../assets/image-avatar.png';

import '../styles/global.css';
import '../styles/Header.css';

import MobileMenu from './MobileMenu';
import Cart from './Cart';
import AppContext from '../context/AppContext';

const Header = () => {
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleCart, setToggleCart] = useState(false);
    const {state} = useContext(AppContext);
    return(
        <nav>
            <img src={menu} alt="dropdown menu" className="menu" onClick={()=>setToggleMenu(!toggleMenu)}/>
            <div className="left-nav">
                <img src={logo} alt="sneakers logo"/>
                <ul className="nav-categories">
                    <li>
                        <a href="/">Collections</a>
                    </li>
                    <li>
                        <a href="/">Men</a>
                    </li>
                    <li>
                        <a href="/">Women</a>
                    </li>
                    <li>
                        <a href="/">About</a>
                    </li>
                    <li>
                        <a href="/">Contact</a>
                    </li>
                </ul>
            </div>
            <div className="right-nav">
                <div className="cart" onClick={()=>{setToggleCart(!toggleCart)}}>
                    <img src={cart} alt="cart" />
                    {state.cart.length > 0 ? <div>{state.cart.length}</div> : null}
                </div>
                <img src={avatar} alt="avatar" className="avatar"/>
            </div>
            {toggleMenu ? <MobileMenu onAction={()=>setToggleMenu(!toggleMenu)}/> : null }
            {toggleCart ? <Cart/> : null }
        </nav>
    );
}

export default Header;