import profileReducer from "./profileReducer";
import dialogsReducer from "./dialogsReducer";

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
		this._state.profilePage = profileReducer(this._state.profilePage, action);
		this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
		this._callSubscriber(this._state);
	},
}

window.store = store;

export default store;