const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
	users: [
		{id: 1, followed: true, fullName: 'SName1 N.', status: 'some status text...', location: {city: 'City', country: 'Country'}},
		{id: 2, followed: true, fullName: 'SName2 N.', status: 'some status text...', location: {city: 'City', country: 'Country'}},
		{id: 3, followed: false, fullName: 'SName3 N.', status: 'some status text...', location: {city: 'City', country: 'Country'}},
		{id: 4, followed: false, fullName: 'SName4 N.', status: 'some status text...', location: {city: 'City', country: 'Country'}},
		{id: 5, followed: false, fullName: 'SName5 N.', status: 'some status text...', location: {city: 'City', country: 'Country'}},
		{id: 6, followed: true, fullName: 'SName6 N.', status: 'some status text...', location: {city: 'City', country: 'Country'}},
		{id: 7, followed: false, fullName: 'SName7 N.', status: 'some status text...', location: {city: 'City', country: 'Country'}},
		{id: 8, followed: true, fullName: 'SName8 N.', status: 'some status text...', location: {city: 'City', country: 'Country'}},
	]
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_USERS:
			return {
				...state,
				users: [ ...state.users, ...action.users]
			};
		case TOGGLE_FOLLOW:
			debugger
			return {
				...state,
				users: state.users.map( u => {
					if (u.id === action.userID){
						return {...u, followed: !u.followed}
					}
					return u;
				})
			}
		default: return state;
	}
}

export const setUsersAC = (users) => ({type: SET_USERS, users});
export const toggleFollowAC = (userID) => ({type: TOGGLE_FOLLOW, userID});

export default usersReducer;