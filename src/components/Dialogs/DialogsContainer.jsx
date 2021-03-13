import Dialogs from "./Dialogs";
import {addMessageActionCreator, changeMessageTextActionCreator} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
	return{
		dialogsPage: state.dialogsPage
	}
}

let mapDispatchToProps = (dispatch) =>{
	return{
		addNewMessage: () => {
			dispatch(addMessageActionCreator());
		},
		onMessageChange: (newText) => {
			dispatch(changeMessageTextActionCreator(newText));
		}
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Dialogs);