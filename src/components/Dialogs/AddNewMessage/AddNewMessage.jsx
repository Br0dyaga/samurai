import React from 'react';
import s from "./AddNewMessage.module.css";

const AddNewMessage = (props) => {

	let textMessage = React.createRef();
	let addMessage = () => {
		if (!(textMessage.current.value=='')){
			// props.addPost(textMessage.current.value);
			alert(textMessage.current.value)
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

export default AddNewMessage;