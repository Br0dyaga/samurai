import React from 'react';
import Dialogs from "./Dialogs";
import {addMessageActionCreator, changeMessageTextActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
	return{
		dialogs: state.dialogsPage.dialogs,
		messages: state.dialogsPage.messages,
		newText: state.dialogsPage.newMessageText,
		statusBtnMessage: state.dialogsPage.disableBntMessage
	}
}
let mapDispatchToProps = (dispatch) =>{
	return{
		addNewMessage: () => {
			dispatch(addMessageActionCreator());
		},
		onMessageChange: (newText) => {
			dispatch(changeMessageTextActionCreator(newText));
		}
	}
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;