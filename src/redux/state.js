const ADD_POST = 'ADD-POST';
const ADD_MSG = 'ADD-MSG';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const CHANGE_MSG_TEXT = 'CHANGE-MSG-TEXT';


let store = {
	_state: {
		profilePage: {
			posts: [
				{id: 1, message: 'First message', like: 10, dislike: 15},
				{id: 2, message: 'Second message', like: 1, dislike: 1},
				{id: 3, message: 'Third message', like: 32, dislike: 333},
				{id: 4, message: 'Other message', like: 101, dislike: 2},
				{id: 5, message: 'Some once message', like: 1110, dislike: 0},
				{id: 6, message: 'ooooops)', like: 0, dislike: 123}
			],
			newPostText: '',
			disableBntPost: true,
		},
		dialogsPage: {
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
		}
	},
	_callSubscriber() {
		alert('no subscribers (observers)');
	},

	getState() {
		return this._state
	},
	subscribe(observer) {
		this._callSubscriber = observer;
	},

	dispatch(action) {
		switch (action.type) {
			case ADD_POST:
				this._setStateAddPost();
				break;
			case CHANGE_POST_TEXT:
				this._setPostText(action.newText);
				break;
			case ADD_MSG:
				this._setStateAddMessage();
				break;
			case CHANGE_MSG_TEXT:
				this._setMessageText(action.newText);
				break;
			default:
				break;
		}
	},
	_setStateAddPost() {
		let new_id = this._state.profilePage.posts.length + 1;
		this._state.profilePage.posts.push({
			id: new_id,
			message: this._state.profilePage.newPostText,
			like: 0,
			dislike: 0
		});
		this._state.profilePage.newPostText = '';
		this._state.profilePage.disableBntPost = (this._state.profilePage.newPostText === '');
		this._callSubscriber(this._state);
	},
	_setPostText(newPostText) {
		this._state.profilePage.newPostText = newPostText;
		this._state.profilePage.disableBntPost = (this._state.profilePage.newPostText === '');
		this._callSubscriber(this._state);
	},
	_setStateAddMessage() {
		let new_id = this._state.dialogsPage.messages.length + 1;
		this._state.dialogsPage.messages.push({
			id: new_id,
			message: this._state.dialogsPage.newMessageText,
			type: 'To'
		});
		this._state.dialogsPage.newMessageText = '';
		this._state.dialogsPage.disableBntMessage = (this._state.dialogsPage.newMessageText === '');
		this._callSubscriber(this._state);
	},
	_setMessageText(newMessageText) {
		this._state.dialogsPage.newMessageText = newMessageText;
		this._state.dialogsPage.disableBntMessage = (this._state.dialogsPage.newMessageText === '');
		this._callSubscriber(this._state);
	},
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const addMessageActionCreator = () => ({type: ADD_MSG});
export const changePostTextActionCreator = (newText) => ({type: CHANGE_POST_TEXT, newText: newText});
export const changeMessageTextActionCreator = (newText) => ({type: CHANGE_MSG_TEXT, newText: newText});

window.store = store;

export default store;