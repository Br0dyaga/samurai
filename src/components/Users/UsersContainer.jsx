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
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {userAPI} from "../../api/api";

class UsersContainer extends React.Component {
	componentDidMount() {
		this.props.setFetching(true);
		userAPI.getUsers(this.props.usersPage.currentPage, this.props.usersPage.pageSize).then(data => {
			this.props.setUsers(data.items);
			this.props.setTotalUsers(data.totalCount);
			this.props.setFetching(false);
		});
	};

	onPageChange = (numberPage) => {
		this.props.setPage(numberPage);
		this.props.setFetching(true);

		userAPI.getUsers(numberPage, this.props.usersPage.pageSize).then(data => {
			this.props.setUsers(data.items);
			this.props.setTotalUsers(data.totalCount);
			this.props.setFetching(false);
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
