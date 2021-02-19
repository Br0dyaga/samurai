import React from 'react';
import s from './Header.module.css';

const Header = () => {

    let logoPath = window.location.origin + '/logo512.png';

    return (
        <header className={s.header}>
            <img src={logoPath} alt='logo'/> Samurai 1.0
        </header>
    );
}

export default Header;