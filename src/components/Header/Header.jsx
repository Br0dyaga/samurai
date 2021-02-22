import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";

const Header = () => {

    let logoPath = window.location.origin + '/logo512.png';

    return (
        <header className={s.header}>
            <NavLink to="/profile">
                <img src={logoPath} alt='logo'/>
            </NavLink>
            Samurai 1.0
        </header>
    );
}

export default Header;