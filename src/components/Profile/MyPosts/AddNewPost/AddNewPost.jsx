import React from 'react';
import s from "./AddNewPost.module.css";

const AddNewPost = (props) => {
	let textMessage = React.createRef();

	let addMessage = () => {
		props.addPost();
	};

	let onPostChange = () => {
		let newText = textMessage.current.value;
		props.changeNewPost(newText);
	}
	return (
		<div className={s.inputMessage}>
			<textarea onChange={onPostChange} ref={textMessage} placeholder='Введите сообщение...'
					  rows='1' value={props.newPostText}/>
			<button onClick={addMessage} disabled={props.disableBntPost}>&#8629;</button>
		</div>
	)
}

export default AddNewPost;