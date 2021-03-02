import React from 'react';
import s from "./AddNewMessage.module.css";

const AddNewMessage = (props) => {
	let addNewMessage = () => {
		props.addNewMessage();
	}
	let onMessageChange = (e) => {
		let newText = e.target.value;
		props.onMessageChange(newText);
	}

	return (
		<div className={s.inputMessage}>
			<textarea onChange={onMessageChange} placeholder='Введите сообщение...' rows='1'
					  value={props.newText}/>
			<button onClick={addNewMessage} disabled={props.statusBtnMessage}>&#8629;</button>
		</div>
	)
}

export default AddNewMessage;