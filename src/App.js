import React from "react";
import {Route} from 'react-router-dom';
import './App.css';
import News from './components/News/News';
import Music from './components/Music/Music';
import Settings from './components/Settings/Settings';
import Footer from "./components/Footer/Footer";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import HeaderContainer from "./components/Header/HeaderContainer";

let App = () => {
	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<NavbarContainer />
			<div className='app-wrapper-content'>
				<Route path='/profile/:userID?' render={()=> <ProfileContainer />}/>
				<Route path='/dialogs' render={()=> <DialogsContainer />} />
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
