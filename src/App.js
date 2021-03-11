import React from "react";
import {Redirect, Route} from 'react-router-dom';
import './App.css';
import Header from "./components/Header/Header";
import Profile from "./components/Profile/Profile";
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";

let App = () => {
	return (
		<div className="app-wrapper">
			<Header/>
			<NavbarContainer />
			<div className='app-wrapper-content'>
				{/*<Redirect exact from='/' to='/profile'/>*/}
				<Route path='/profile' component={Profile}/>
				<Route path='/dialogs' component={DialogsContainer}/>
				<Route path='/news' component={News}/>
				<Route path='/music' component={Music}/>
				<Route path='/users' render={ () => <UsersContainer/> } />
				<Route path='/settings' component={Settings}/>
			</div>
			<Footer/>
		</div>
	);
}

export default App;
