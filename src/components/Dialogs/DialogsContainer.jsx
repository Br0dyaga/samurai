import Dialogs from "./Dialogs";
import {setNewMessage, setNewMessageText} from "../../redux/dialogsReducer";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
	return{
		dialogsPage: state.dialogsPage
	}
}

export default connect(mapStateToProps, {setNewMessage,	setNewMessageText})(Dialogs);