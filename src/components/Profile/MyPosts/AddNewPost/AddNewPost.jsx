import React from 'react';
import s from "./AddNewPost.module.css";
import {addPostActionCreator, changePostTextActionCreator} from "../../../../redux/state";

const AddNewPost = (props) => {
	let newPostText = props.newPostText;
	let statusBtnPost = props.statusBtnPost;
	let addNewPost = () => {
		props.dispatch(addPostActionCreator());
	};

	let onPostChange = (e) => {
		let newText = e.target.value;
		props.dispatch(changePostTextActionCreator(newText));
	}

	return (
		<div className={s.inputMessage}>
			<textarea onChange={onPostChange} placeholder='Введите сообщение...'
					  rows='1' value={newPostText}/>
			<button onClick={addNewPost} disabled={statusBtnPost}>&#8629;</button>
		</div>
	)
}

export default AddNewPost;