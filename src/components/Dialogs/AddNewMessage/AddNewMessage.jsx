import React from 'react';
import s from "./AddNewMessage.module.css";
import {addMessageActionCreator, changeMessageTextActionCreator} from "../../../redux/state";

const AddNewMessage = (props) => {
	let newMessageText = props.newMessageText;
	let statusBtnMessage = props.statusBtnMessage;
	let addNewMessage = () => {
		props.dispatch(addMessageActionCreator());
	}
	let onMessageChange = (e) => {
		let newText = e.target.value;
		props.dispatch(changeMessageTextActionCreator(newText));
	}

	return (
		<div className={s.inputMessage}>
			<textarea onChange={onMessageChange} placeholder='Введите сообщение...' rows='1'
					  value={newMessageText}/>
			<button onClick={addNewMessage} disabled={statusBtnMessage}>&#8629;</button>
		</div>
	)
}

export default AddNewMessage;