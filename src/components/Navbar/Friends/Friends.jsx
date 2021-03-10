import React from 'react';
import s from './Friends.module.css';
import {NavLink} from "react-router-dom";

const Friends = (props) => {

	let imgpath = window.location.origin + '/images/';

	let friendsElements = props.users.map(u => {
		return (
			<NavLink key={u.id} to={`/dialogs/${u.id}`} className={s.user}>
				<img className={s.ava} src={imgpath + u.id + '.jpg'} alt={u.name} title={u.name}/>
				<div className={s.name}>{u.name}</div>
			</NavLink>
		)
	});

	return (
		<div className={s.wrapper}>
			<h2 className={s.title}>Friends:</h2>
			<div className={s.usersWrapper}>
				{friendsElements}
			</div>
		</div>
	)
};

export default Friends;