import React from 'react';
import s from './Users.module.css';
import avatar from '../../assets/image/noavatar.jpg';
import axios from "axios";

const Users = (props) => {
	document.title = 'Samurai - Найти пользователя';

	if (props.usersPage.users.length === 0) {
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				props.setUsers(response.data.items);
			});
	}

	let usersList = props.usersPage.users.map(u => (
		<div key={u.id} className={s.wrapperUser}>
			<div className={s.avatar}>
				<img src={(u.photos.small != null) ? u.photos.small : avatar} alt={u.name} title={u.name}/>
			</div>
			<div className={s.user}>
				<div>
					<h2>{u.name}</h2>
					<h3>{u.status}</h3>
				</div>
				<div className={s.location}>{'u.location.country'}, <br/>{'u.location.city'}</div>
				<div onClick={() => {
					props.toggleFollow(u.id)
				}} className={`${s.btnfollow} ${(u.followed) ? s.unfollow : s.follow}`}>
					{(u.followed) ? 'Unfollow' : 'Follow'}
				</div>
			</div>
		</div>
	));

	return (
		<div>
			<h1>Users:</h1>
			{usersList}
		</div>
	)
};

export default Users;