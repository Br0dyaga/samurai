import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = (props) => {
	let postsElement = props.profilePage.posts.map(p => <Post key={p.id} message={p.message} like={p.like}
															  dislike={p.dislike}/>);

	return (
		<div>
			<h2>My posts</h2>
			<div>
				<div className={s.inputMessage}>
					<textarea onChange={(e) => props.setNewPostText(e.target.value)} placeholder='Введите сообщение...'
							  rows='1'
							  value={props.profilePage.newPostText}/>
					<button onClick={() => props.setNewPost()}
							disabled={props.profilePage.disableBntPost}>&#8629;</button>
				</div>
			</div>
			<div className={s.listPosts}>
				{postsElement}
			</div>
		</div>
	);
};

export default MyPosts;