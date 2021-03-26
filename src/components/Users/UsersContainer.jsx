import React from 'react';
import {connect} from "react-redux";
import {
	setPage,
	setTotalUsers,
	setUsers,
	setFetching,
	setFollow,
	setUnFollow
} from "../../redux/usersReducer";
import axios from "axios";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.setFetching(true);
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users
			?count=${this.props.usersPage.pageSize}
			&page=${this.props.usersPage.currentPage}`, {
				withCredentials: true
			}
		)
			.then(response => {
				this.props.setFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsers(response.data.totalCount);
			});
	};

	onPageChange = (numberPage) => {
		this.props.setPage(numberPage);
		this.props.setFetching(true);
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users
			?count=${this.props.usersPage.pageSize}&page=${numberPage}`, {
				withCredentials: true
			}
		)
			.then(response => {
				this.props.setFetching(false);
				this.props.setUsers(response.data.items);
				this.props.setTotalUsers(response.data.totalCount);
			});
	};

	render() {
		return <>
			{this.props.usersPage.isFetching ? <Preloader/> : null}
			<Users users={this.props.usersPage.users}
				   currentPage={this.props.usersPage.currentPage}
				   pageSize={this.props.usersPage.pageSize}
				   totalUsersCount={this.props.usersPage.totalUsersCount}
				   isFetching={this.props.usersPage.isFetching}
				   onPageChange={this.onPageChange}
				   setFollow={this.props.setFollow}
				   setUnFollow={this.props.setUnFollow}
				   setFetching={this.props.setFetching}
			/>
		</>
	};
}

let mapStateToProps = (state) => {
	return {
		usersPage: state.usersPage
	}
};

export default connect(mapStateToProps,
	{setTotalUsers, setPage, setUsers, setFetching, setFollow, setUnFollow})(UsersContainer);
