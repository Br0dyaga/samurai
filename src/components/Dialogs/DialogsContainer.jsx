import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, changeMessageTextActionCreator} from "../../redux/dialogsReducer";

const DialogsContainer = (props) => {
	let state = props.store.getState().dialogsPage;
	let dialogs = state.dialogs;
	let messages = state.messages;
	let newText = state.newMessageText;
	let statusBtnMessage = state.disableBntMessage;

	let addNewMessage = () => {
		props.dispatch(addMessageActionCreator());
	}
	let onMessageChange = (newText) => {
		props.dispatch(changeMessageTextActionCreator(newText));
	}

	return (
		<Dialogs dialogs={dialogs} messages={messages} newText={newText} statusBtnMessage={statusBtnMessage}
				 addNewMessage={addNewMessage} onMessageChange={onMessageChange}/>
	)
};

export default DialogsContainer;