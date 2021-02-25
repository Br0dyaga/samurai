import React from 'react';
import s from "./AddNewPost.module.css";

const AddNewPost = (props) => {
	let textMessage = React.createRef();

	let addNewPost = () => {
		props.dispatch({type: 'ADD-POST'});
	};

	let onPostChange = () => {
		let newText = textMessage.current.value;
		props.dispatch({type: 'CHANGE-POST-TEXT', newText: newText});
	}

	return (
		<div className={s.inputMessage}>
			<textarea onChange={onPostChange} ref={textMessage} placeholder='Введите сообщение...'
					  rows='1' value={props.newPostText}/>
				<button onClick={addNewPost} disabled={props.statusBtnPost}>&#8629;</button>
		</div>
	)
}

export default AddNewPost;