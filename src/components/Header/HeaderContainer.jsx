import React from 'react';
import Header from "./Header";
import axios from "axios";
import {connect} from "react-redux";
import {setFetching, setAuthUserData} from "../../redux/authReducer";

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.setFetching(true);
		axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
			withCredentials: true
		})
			.then(response => {
				if (response.data.resultCode === 0) {
					let {id, email, login} = response.data.data;
					this.props.setAuthUserData(id, email, login);
				}
				this.props.setFetching(false);
			})
	}

	render() {
		return <Header {...this.props}/>;
	}
}

let mapStateToProps = (state) => ({
	isAuth: state.auth.isAuth,
	login: state.auth.login,
	id: state.auth.id
})

export default connect(mapStateToProps, {setAuthUserData, setFetching})(HeaderContainer);