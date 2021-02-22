import React from 'react';
import s from "./AddNewPost.module.css";

const AddNewPost = (props) => {
	let textMessage = React.createRef();
	let addMessage = () => {
		let newText = textMessage.current.value
		if (!(newText=='')){
			props.addPost(newText);
			textMessage.current.value = '';
		}else{
			alert('Введите сообщение')
		}
	};

	return(
		<div className={s.inputMessage}>
			<textarea ref={textMessage} placeholder='Введите сообщение...' rows='1'/>
			<button onClick={addMessage}>&#8629;</button>
		</div>
	)
}

export default AddNewPost;