import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {

	let postsElement = props.posts.map((p, i) =>
		<Post key={`post${i}`} message={p.message} like={p.like} dislike={p.dislike}/>
	);

	return (
		<div>
			<h2>My posts</h2>
			<div>
				<form className={s.newpost}>
					<textarea placeholder='Print text here...' required/>
					<button type='submit'>Public</button>
				</form>
			</div>
			<div className={s.listPosts}>
				{postsElement}
			</div>
		</div>
	);
};

export default MyPosts;