import MyPosts from "./MyPosts";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}
let mapDispatchToProps = (dispatch) => {
	return {
		addNewPost: () => {
			dispatch(addPostActionCreator());
		},
		onPostChange: (newText) => {
			dispatch(changePostTextActionCreator(newText));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(MyPosts);