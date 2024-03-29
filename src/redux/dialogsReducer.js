const ADD_MSG = 'ADD-MSG';
const CHANGE_MSG_TEXT = 'CHANGE-MSG-TEXT';

let initialState = {
	dialogs: [
		{id: 1, name: 'Name 1'},
		{id: 2, name: 'Name 2'},
		{id: 3, name: 'Name 3'},
		{id: 4, name: 'Name 4'},
		{id: 5, name: 'Name 5'},
		{id: 6, name: 'Name 6'}
	],
	messages: [
		{id: 1, message: 'Message. Some text.... More text', type: 'From'},
		{id: 2, message: 'Message. Some text.... More text', type: 'From'},
		{id: 3, message: 'Message. Some text.... More text', type: 'From'},
		{id: 4, message: 'Message. Some text.... More text', type: 'To'},
		{id: 5, message: 'Message. Some text.... More text', type: 'From'},
		{id: 6, message: 'Message. Some text.... More text', type: 'To'},
		{id: 7, message: 'Message. Some text.... More text', type: 'To'}
	],
	newMessageText: '',
	disableBntMessage: true,
};

const dialogsReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MSG:
			let new_id = state.messages.length + 1;
			let new_text = state.newMessageText;
			return {
				...state,
				newMessageText: '',
				disableBntMessage: true,
				messages: [...state.messages, {id: new_id, message: new_text, type: 'To'}],
			};
		case CHANGE_MSG_TEXT:
			return {
				...state,
				newMessageText: action.newText,
				disableBntMessage: (action.newText === '')
			};
		default: return state;
	}
}

export const setNewMessage = () => ({type: ADD_MSG});
export const setNewMessageText = (newText) => ({type: CHANGE_MSG_TEXT, newText: newText});

export default dialogsReducer;