import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
	let path = '/dialogs/' + props.id;
	return (
		<NavLink to={path} className={s.dialog} activeClassName={s.active}>{props.name}</NavLink>
	)
}

const Message = (props) => {
	switch (props.type) {
		case 'From':
			return (
				<div className={s.message + ' ' + s.From}>
					{props.message}
				</div>
			);
			break;
		case 'To':
			return (
				<div className={s.message + ' ' + s.To}>
					{props.message}
				</div>
			);
			break;
	}
}

const Dialogs = (props) => {
	return (
		<div className={s.content}>
			<div className={s.dialogs}>
				<DialogItem name='Name 1' id='1'/>
				<DialogItem name='Name 2' id='2'/>
				<DialogItem name='Name 3' id='3'/>
				<DialogItem name='Name 4' id='4'/>
				<DialogItem name='Name 5' id='5'/>
				<DialogItem name='Name 6' id='6'/>
			</div>
			<div className={s.messages}>
				<Message message='Message. Some text.... More text' type='From'/>
				<Message message='Message. Some text.... More text' type='From'/>
				<Message message='Message. Some text.... More text' type='To'/>
				<Message message='Message. Some text.... More text' type='From'/>
				<Message message='Message. Some text.... More text' type='To'/>
				<Message message='Message. Some text.... More text' type='To'/>
				<Message message='Message. Some text.... More text' type='From'/>
				<Message message='Message. Some text.... More text' type='From'/>
				<Message message='Message. Some text.... More text' type='To'/>
			</div>
		</div>
	)
}

export default Dialogs;