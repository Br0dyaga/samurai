import React from 'react';
import s from "./InputMessage.module.css";

const InputMessage = () => {

	let textMessage = React.createRef();
	let addMessage = () => {
		if (!(textMessage.current.value=='')){
			alert(textMessage.current.value)
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

export default InputMessage;