import React from 'react';
import s from './DialogItem.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	let imgpath = window.location.origin + '/images/';
	return (
		<NavLink to={path} className={s.dialog} activeClassName={s.active}>
			<img className={s.ava} src={imgpath + props.id + '.jpg'} alt={props.name} title={props.name}/>{props.name}
		</NavLink>
	)
}

export default DialogItem;