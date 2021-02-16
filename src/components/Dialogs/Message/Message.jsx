import React from 'react';
import s from './Message.Module.css';

const Message = (props) => {
	switch (props.type) {
		case 'From':
			return (
				<div className={s.message + ' ' + s.From}>
					{props.message}
				</div>
			);
			break;
		case 'To':
			return (
				<div className={s.message + ' ' + s.To}>
					{props.message}
				</div>
			);
			break;
	}
}

export default Message;