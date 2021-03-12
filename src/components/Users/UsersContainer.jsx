import {connect} from "react-redux";
import {clearUsersAC, setPageAC, setTotalUsersAC, setUsersAC, toggleFollowAC} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		setTotalUsers: (totalUsers) => {
			dispatch(setTotalUsersAC(totalUsers));
		},
		setPage: (pageID) => {
			dispatch(setPageAC(pageID));
		},
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		clearUsers: () => {
			dispatch(clearUsersAC());
		},
		toggleFollow: (userID) => {
			dispatch(toggleFollowAC(userID));
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;