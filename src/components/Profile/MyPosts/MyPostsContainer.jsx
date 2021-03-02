import React from 'react';
import MyPosts from "./MyPosts";
import {addPostActionCreator, changePostTextActionCreator} from "../../../redux/profileReducer";

const MyPostsContainer = (props) => {
	let state = props.store.getState();
	let posts = state.profilePage.posts;
	let newText = state.profilePage.newPostText;
	let statusBtnPost = state.profilePage.disableBntPost;

	let addNewPost = () => {
		props.store.dispatch(addPostActionCreator());
	};

	let onPostChange = (newText) => {
		props.store.dispatch(changePostTextActionCreator(newText));
	}

	return <MyPosts posts={posts} newText={newText} statusBtnPost={statusBtnPost} addNewPost={addNewPost} onPostChange={onPostChange}/>;
};

export default MyPostsContainer;