import Navbar from "./Navbar";
import {connect} from "react-redux";

let mapStateToProps = (state) =>{
	return{
		users: state.dialogsPage.dialogs
	}
}

export default connect(mapStateToProps)(Navbar);