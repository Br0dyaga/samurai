import React from 'react';
import MyPosts from "./MyPosts/MyPosts";
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo/>
			<MyPosts posts={props.profilePage.posts}
					 newPostText={props.profilePage.newPostText}
					 disableBntPost={props.profilePage.disableBntPost}
					 addPost={props.addPost}
					 changeNewPost={props.changeNewPost}
			/>
		</div>
	);
}

export default Profile;