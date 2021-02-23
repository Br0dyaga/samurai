import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from "react-router-dom";
import {addPost, changePostText} from "./redux/state";

export let rerenderEntiresTree = (state) => {
	ReactDOM.render(
		<React.StrictMode>
			<BrowserRouter>
				<App state={state} addPost={addPost} changeNewPost={changePostText}/>
			</BrowserRouter>
		</React.StrictMode>,
		document.getElementById('root')
	);
}
