const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

let initialState = {
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
};

const profileReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_POST:
			let new_id = state.posts.length + 1;
			state.posts.push({
				id: new_id,
				message: state.newPostText,
				like: 0,
				dislike: 0
			});
			state.newPostText = '';
			state.disableBntPost = (state.newPostText === '');
			break;
		case CHANGE_POST_TEXT:
			state.newPostText = action.newText;
			state.disableBntPost = (state.newPostText === '');
			break;
		default: break;
	}

	return state;
}

export const addPostActionCreator = () => ({type: ADD_POST});
export const changePostTextActionCreator = (newText) => ({type: CHANGE_POST_TEXT, newText: newText});

export default profileReducer;