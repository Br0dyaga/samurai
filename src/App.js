import React from "react";
import {Redirect, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from "./components/Footer/Footer";

let App = (props) => {
	debugger;
	return (
		<div className="app-wrapper">
			<Header/>
			<Navbar users={props.state.dialogsPage.dialogs}/>
			<div className='app-wrapper-content'>
				<Redirect exact from='/' to='/profile'/>
				<Route path='/profile' render={() => <Profile
					state={props.state.profilePage}
					dispatch={props.dispatch}
				/>}/>
				<Route path='/dialogs' render={() => <Dialogs
					state={props.state.dialogsPage}
					dispatch={props.dispatch}
				/>}/>
				<Route path='/news' component={News}/>
				<Route path='/music' component={Music}/>
				<Route path='/settings' component={Settings}/>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
