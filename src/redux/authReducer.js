const SET_DATA_USER = 'SET-DATA-USER';
const SET_FETCHING = 'SET-FETCHING';

let initialState = {
	id: null,
	email: null,
	login: null,
	isAuth: false,
	isFetching: false
}

const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_DATA_USER:
			return {
				...state,
				...action.data,
				isAuth: true
			};
		case SET_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			};
		default:
			return state;
	}

}

export const setAuthUserData = (id, email, login) => ({type:SET_DATA_USER, data:{id, email, login}});
export const setFetching = (isFetching)=> ({type:SET_FETCHING, isFetching});

export default authReducer;