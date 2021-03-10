import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";
import Friends from "./Friends/Friends";

const Navbar = (props) => {
	return (
		<nav className={s.nav}>
			<ul>
				<li>
					<NavLink to="/profile" className={s.item} activeClassName={s.active}>Profile</NavLink>
				</li>
				<li>
					<NavLink to="/dialogs" className={s.item} activeClassName={s.active}>Messages</NavLink>
				</li>
				<li>
					<NavLink to="/news" className={s.item} activeClassName={s.active}>News</NavLink>
				</li>
				<li>
					<NavLink to="/music" className={s.item} activeClassName={s.active}>Music</NavLink>
				</li>
				<li>
					<NavLink to="/users" className={s.item} activeClassName={s.active}>Find Users</NavLink>
				</li>
				<li>
					<NavLink to="/settings" className={s.item} activeClassName={s.active}>Settings</NavLink>
				</li>
			</ul>
			<Friends users={props.users}/>
		</nav>
	);
}

export default Navbar;