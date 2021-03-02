import React from "react";
import {Redirect, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";

let App = (props) => {
	return (
		<div className="app-wrapper">
			<Header/>
			<Navbar users={props.store.getState().dialogsPage.dialogs}/>
			<div className='app-wrapper-content'>
				<Redirect exact from='/' to='/profile'/>
				<Route path='/profile' render={() => <Profile store={props.store} />}/>
				<Route path='/dialogs' render={() => <DialogsContainer
					state={props.state.dialogsPage}
					dispatch={props.dispatch}
					store={props.store}
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
