import React from 'react';
import s from './Message.module.css';

const Message = (props) => {
	// eslint-disable-next-line default-case
	switch (props.type) {
		case 'From':
			return (
				<div className={s.message + ' ' + s.From}>
					{props.message}
				</div>
			);
		case 'To':
			return (
				<div className={s.message + ' ' + s.To}>
					{props.message}
				</div>
			);
	}
}

export default Message;