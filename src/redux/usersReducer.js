const TOGGLE_FOLLOW = 'TOGGLE-FOLLOW';
const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_FETCHING = 'SET-FETCHING';

let initialState = {
	users: [
		// {id: 1, followed: true, fullName: 'SName1 N.', status: 'some status text...', location: {city: 'City', country: 'Country'}},
	],
	totalUsersCount: 0,
	pageSize: 5,
	currentPage: 1,
	isFetching: false,
};

const usersReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_FETCHING:
			return {
				...state,
				isFetching: action.isFetching
			};
		case SET_TOTAL_USERS:
			return {
				...state,
				totalUsersCount: action.totalUsers
			};
		case SET_PAGE:
			return {
				...state,
				currentPage: action.pageID
			};
		case SET_USERS:
			return {
				...state,
				users: action.users
			};
		case TOGGLE_FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userID) {
						return {...u, followed: !u.followed}
					}
					return u;
				})
			}
		default:
			return state;
	}
}

export const setUsersAC = (users) => ({type: SET_USERS, users});
export const toggleFollowAC = (userID) => ({type: TOGGLE_FOLLOW, userID});
export const setTotalUsersAC = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export const setPageAC = (pageID) => ({type: SET_PAGE, pageID});
export const setFetchingAC = (isFetching) => ({type: SET_FETCHING, isFetching});

export default usersReducer;