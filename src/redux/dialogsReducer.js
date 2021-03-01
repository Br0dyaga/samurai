const ADD_MSG = 'ADD-MSG';
const CHANGE_MSG_TEXT = 'CHANGE-MSG-TEXT';

const dialogsReducer = (state, action) => {

	switch (action.type) {
		case ADD_MSG:
			let new_id = state.messages.length + 1;
			state.messages.push({
				id: new_id,
				message: state.newMessageText,
				type: 'To'
			});
			state.newMessageText = '';
			state.disableBntMessage = (state.newMessageText === '');
			break;
		case CHANGE_MSG_TEXT:
			state.newMessageText = action.newText;
			state.disableBntMessage = (state.newMessageText === '');
			break;
		default: break;
	}

	return state;
}

export const addMessageActionCreator = () => ({type: ADD_MSG});
export const changeMessageTextActionCreator = (newText) => ({type: CHANGE_MSG_TEXT, newText: newText});

export default dialogsReducer;