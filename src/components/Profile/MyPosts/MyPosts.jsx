import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import InputMessage from "../../InputMessage/InputMessage";

const MyPosts = (props) => {

	let postsElement = props.posts.map((p, i) =>
		<Post key={`post${i}`} message={p.message} like={p.like} dislike={p.dislike}/>
	);

	return (
		<div>
			<h2>My posts</h2>
			<div>
				<InputMessage />
				{/*<div className={s.newpost} id='addPost'>*/}
				{/*	<textarea ref={newPostTextElement} placeholder='Print text here...' required/>*/}

				{/*	<button onClick={addPost}>Public</button>*/}
				{/*</div>*/}
			</div>
			<div className={s.listPosts}>
				{postsElement}
			</div>
		</div>
	);
};

export default MyPosts;