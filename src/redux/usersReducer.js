const SET_USERS = 'SET-USERS';
const SET_TOTAL_USERS = 'SET-TOTAL-USERS';
const SET_PAGE = 'SET-PAGE';
const SET_FETCHING = 'SET-FETCHING';
const SET_FOLLOW = 'SET-FOLLOW';
const SET_UNFOLLOW = 'SET-UNFOLLOW';

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
		case SET_FOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userID) {
						return {...u, followed: true}
					}
					return u;
				})
			}
		case SET_UNFOLLOW:
			return {
				...state,
				users: state.users.map(u => {
					if (u.id === action.userID) {
						return {...u, followed: false}
					}
					return u;
				})
			}
		default:
			return state;
	}
}

export const setUsers = (users) => ({type: SET_USERS, users});
export const setTotalUsers = (totalUsers) => ({type: SET_TOTAL_USERS, totalUsers});
export const setPage = (pageID) => ({type: SET_PAGE, pageID});
export const setFetching = (isFetching) => ({type: SET_FETCHING, isFetching});
export const setFollow = (userID) => ({type: SET_FOLLOW, userID});
export const setUnFollow = (userID) => ({type: SET_UNFOLLOW, userID});

export default usersReducer;