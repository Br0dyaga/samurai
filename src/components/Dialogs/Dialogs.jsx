import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialgogItem/DialogItem';
import Message from "./Message/Message";
import AddNewMessage from "./AddNewMessage/AddNewMessage";

const Dialogs = (props) => {
	document.title = 'Samurai - Сообщения';
	let dialogsElement = props.state.dialogs.map((d, i) =>
		<DialogItem key={`dialog${i}`} name={d.name} id={d.id}/>
	);

	let messagesElement = props.state.messages.map((m, i) =>
		<Message key={`message${i}`} message={m.message} type={m.type}/>
	);

	return (
		<div className={s.content}>
			<div className={s.dialogs}>
				{dialogsElement}
			</div>
			<div className={s.messages}>
				{messagesElement}
				<AddNewMessage/>
			</div>
		</div>
	)
};

export default Dialogs;