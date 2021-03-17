import React from 'react';
import s from './Header.module.css';
import {NavLink} from "react-router-dom";
import ava from '../../assets/image/noavatar.jpg';

const Header = (props) => {

    let logoPath = window.location.origin + '/logo512.png';

    return (
        <header className={s.header}>
            <NavLink className={s.logoLink} to="/profile">
                <img src={logoPath} alt='logo'/>
            </NavLink>
            Samurai 1.0
            <div className={s.loginBlock}>
                {(props.isAuth)?<NavLink to={`/profile/${props.id}`}>{props.login} <img src={ava} alt={props.login} title={props.login}/></NavLink>:<NavLink className={s.loginLink} to={'/login'}>LOGIN</NavLink>}
            </div>
        </header>
    );
}

export default Header;