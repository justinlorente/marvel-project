import React from 'react';
import Logo from '../../images/marvel-logo.png';

const Header = () => (
    <header>
        <div className="Header">
            <img className="logo" alt="Marvel logo" src={Logo} />
        </div>
    </header>
);

export default Header;
