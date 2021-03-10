import React from 'react';
import s from './Users.module.css'

const Users = (props) => {
	document.title = 'Samurai - Найти пользователя';

	let usersList = props.usersPage.users.map(u => (
		<div key={u.id} className={s.user}>
			<div>
				<h2>{u.fullName}</h2>
				<h3>{u.status}</h3>
			</div>
			<div className={s.location}>{u.location.country}, <br/>{u.location.city}</div>
			<div onClick={() => {
				props.toggleFollow(u.id)
			}} className={`${s.btnfollow} ${(u.followed) ? s.unfollow : s.follow}`}>
				{(u.followed) ? 'Unfollow' : 'Follow'}
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