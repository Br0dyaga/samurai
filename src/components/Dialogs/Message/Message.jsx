import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
	let style = '';
	switch (props.type) {
		case 'From': style = s.message + ' ' + s.From; break;
		case 'To': style = s.message + ' ' + s.To; break;
		default: break;
	}
	return <div className={style}>{props.message}</div>
}

export default Message;