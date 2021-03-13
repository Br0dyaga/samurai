import React from 'react';
import {connect} from "react-redux";
import {setPageAC, setTotalUsersAC, setUsersAC, toggleFollowAC} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";

class UsersContainer extends React.Component {
	componentDidMount() {
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users
			?count=${this.props.usersPage.pageSize}
			&page=${this.props.usersPage.currentPage}`
		)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsers(response.data.totalCount);
			});
	};

	onPageChange = (numberPage) => {
		this.props.setPage(numberPage);
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users
			?count=${this.props.usersPage.pageSize}&page=${numberPage}`
		)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsers(response.data.totalCount);
			});
	};

	render() {
		return <Users users={this.props.usersPage.users}
					  currentPage={this.props.usersPage.currentPage}
					  pageSize={this.props.usersPage.pageSize}
					  totalUsersCount={this.props.usersPage.totalUsersCount}
					  onPageChange={this.onPageChange}
					  toggleFollow={this.props.toggleFollow}/>
	};
}

let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage
	}
};

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
		toggleFollow: (userID) => {
			dispatch(toggleFollowAC(userID));
		}
	}
};

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
