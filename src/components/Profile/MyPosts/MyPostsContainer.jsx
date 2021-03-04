import MyPosts from "./MyPosts";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		posts: state.profilePage.posts,
		newText: state.profilePage.newPostText,
		statusBtnPost: state.profilePage.disableBntPost
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

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;