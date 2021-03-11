import {connect} from "react-redux";
import {setUsersAC, toggleFollowAC} from "../../redux/usersReducer";
import Users from "./Users";

let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		setUsers: (users) => {
			dispatch(setUsersAC(users));
		},
		toggleFollow: (userID) => {
			dispatch(toggleFollowAC(userID));
		}
	}
}

const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users);

export default UsersContainer;