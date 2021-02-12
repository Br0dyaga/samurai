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

	let dialogsData = [
		{id: 1, name: 'Name 1'},
		{id: 2, name: 'Name 2'},
		{id: 3, name: 'Name 3'},
		{id: 4, name: 'Name 4'},
		{id: 5, name: 'Name 5'},
		{id: 6, name: 'Name 6'}
	];

	let dialogList = dialogsData.map((dialog,index) =>
		<DialogItem key={'dialog'+index} name={dialog.name} id={dialog.id}/>
	);

	let messagesData = [
		{id: 1, message: 'Message. Some text.... More text', type: 'From'},
		{id: 2, message: 'Message. Some text.... More text', type: 'From'},
		{id: 3, message: 'Message. Some text.... More text', type: 'From'},
		{id: 4, message: 'Message. Some text.... More text', type: 'To'},
		{id: 5, message: 'Message. Some text.... More text', type: 'From'},
		{id: 6, message: 'Message. Some text.... More text', type: 'To'},
		{id: 7, message: 'Message. Some text.... More text', type: 'To'}
	];

	let messageList = messagesData.map((message, index) =>
		<Message key={'message'+index} message={message.message} type={message.type}/>
	);

	return (
		<div className={s.content}>
			<div className={s.dialogs}>
				{ dialogList }
			</div>
			<div className={s.messages}>
				{ messageList }
			</div>
		</div>
	)
}

export default Dialogs;