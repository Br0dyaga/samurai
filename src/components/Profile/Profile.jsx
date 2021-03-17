import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";

const Profile = (props) => {
	return (
		<div>
			<ProfileInfo profile={props.profile} isFetching={props.isFetching}/>
			{((props.profile) && (props.profile.userId === 2)) ? <MyPostsContainer/> : null}
		</div>
	);
}

export default Profile;