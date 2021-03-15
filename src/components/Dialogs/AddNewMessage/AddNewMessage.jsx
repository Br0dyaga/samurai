import React from 'react';
import s from "./AddNewMessage.module.css";

const AddNewMessage = (props) => {
	return (
		<div className={s.inputMessage}>
			<textarea onChange={(e) => props.setNewMessageText(e.target.value)} placeholder='Введите сообщение...'
					  value={props.newText}/>
			<button onClick={() => props.setNewMessage()} disabled={props.statusBtnMessage}>&#8629;</button>
		</div>
	)
}

export default AddNewMessage;