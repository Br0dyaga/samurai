const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';

const profileReducer = (state, action) => {
	debugger;
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