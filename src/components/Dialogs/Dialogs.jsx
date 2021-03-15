import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from './DialgogItem/DialogItem';
import Message from "./Message/Message";
import AddNewMessage from "./AddNewMessage/AddNewMessage";

const Dialogs = (props) => {
	document.title = 'Samurai - Сообщения';

	let dialogsElement = props.dialogsPage.dialogs.map(d => <DialogItem key={d.id} name={d.name} id={d.id}/>);
	let messagesElement = props.dialogsPage.messages.map(m => <Message key={m.id} message={m.message} type={m.type}/>);

	return (
		<div className={s.content}>
			<div className={s.dialogs}>
				{dialogsElement}
			</div>
			<div className={s.messages}>
				{messagesElement}
				<AddNewMessage newText={props.dialogsPage.newMessageText}
							   statusBtnMessage={props.dialogsPage.disableBntMessage}
							   setNewMessage={props.setNewMessage} setNewMessageText={props.setNewMessageText}
				/>
			</div>
		</div>
	)
};

export default Dialogs;