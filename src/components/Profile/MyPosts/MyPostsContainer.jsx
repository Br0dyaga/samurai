import MyPosts from "./MyPosts";
import {setNewPost, setNewPostText} from "../../../redux/profileReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
	return {
		profilePage: state.profilePage
	}
}

export default connect(mapStateToProps, {setNewPost, setNewPostText})(MyPosts);