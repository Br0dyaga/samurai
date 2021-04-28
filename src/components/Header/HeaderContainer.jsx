import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setFetching, setAuthUserData} from "../../redux/authReducer";
import {authAPI} from "../../api/api";

class HeaderContainer extends React.Component {
	componentDidMount() {
		this.props.setFetching(true);
		authAPI.getAuth().then(data => {
			if (data.resultCode === 0) {
				let {id, email, login} = data.data;
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