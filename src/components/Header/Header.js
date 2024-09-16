import React from 'react';
import './Header.css';
import logo from '../../assets/img/logo.png';
const Header = () => {
    return (
        <header>
            <div className="navbar">
                <ul>
                    <li>По домашнему</li>
                    <li><img src={logo} alt="" /></li>
                   
                </ul>
            </div>
        </header>
    );
};

export default Header;