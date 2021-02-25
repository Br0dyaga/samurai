import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";
import AddNewPost from "./AddNewPost/AddNewPost";

const MyPosts = (props) => {

	let postsElement = props.posts.map((p, i) =>
		<Post key={`post${i}`} message={p.message} like={p.like} dislike={p.dislike}/>
	);

	return (
		<div>
			<h2>My posts</h2>
			<div>
				<AddNewPost
					newPostText={props.newPostText}
					statusBtnPost={props.statusBtnPost}
					dispatch={props.dispatch}
				/>
			</div>
			<div className={s.listPosts}>
				{postsElement}
			</div>
		</div>
	);
};

export default MyPosts;