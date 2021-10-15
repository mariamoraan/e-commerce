import React from 'react'

import close from '../assets/icon-close.svg';

import '../styles/global.css';
import '../styles/MobileMenu.css';

const MobileMenu = ({ onAction }) => {
    return(
        <nav className="mobile-menu-nav">
            <img src={close} alt="close" onClick={onAction}/>
            <ul>
                <li><a href="/">Collections</a></li>
                <li><a href="/">Men</a></li>
                <li><a href="/">Women</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Contact</a></li>
            </ul>
        </nav>
    );
}

export default MobileMenu