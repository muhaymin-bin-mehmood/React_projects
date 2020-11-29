/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

var img = 'https://lamborghini-huracan.web.app/images/logo.png';

function Header(){
    return (
        <header>
            <div className="width">
                <div className="logo">
                    <img src={img} alt="logo img" />
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">About</a></li>
                        <li><a href="#">Gallary</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Header;