import React from 'react';
import Profile from "./Profile";
import axios from "axios";
import {connect} from "react-redux";
import {setFetching, setUserProfile} from "../../redux/profileReducer";
import {withRouter} from "react-router-dom";

class ProfileContainer extends React.Component {

	componentDidMount() {
		this.props.setFetching(true);
		let userID = this.props.match.params.userID;
		(!userID) && (userID = 2);
		axios.get(`https://social-network.samuraijs.com/api/1.0/profile/${userID}`)
			.then(response => {
				this.props.setUserProfile(response.data);
				this.props.setFetching(false);
			})
			.catch(() => {
				this.props.setUserProfile('BAD REQUEST');
				this.props.setFetching(false);
			});
	};

	render() {
		return (
			<div>
				<Profile {...this.props} profile={this.props.profile}/>
			</div>
		);
	}
}

let mapStateToProps = (state) => {
	return {
		profile: state.profilePage.profile,
		isFetching: state.profilePage.isFetching
	}
};

export default connect(mapStateToProps, {setUserProfile, setFetching})(withRouter(ProfileContainer));