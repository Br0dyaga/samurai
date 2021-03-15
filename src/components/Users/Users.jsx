import React from 'react';
import s from "./Users.module.css";
import avatar from "../../assets/image/noavatar.jpg";

const Users = (props) => {
	document.title = 'Samurai - Найти пользователя';

	let currentPage = props.currentPage;
	let pageSize = props.pageSize;
	let totalUsersCount = props.totalUsersCount;
	let pageCount = Math.ceil(totalUsersCount / pageSize);

	let pages = [];
	let startID, endID;

	(currentPage < 6) ? startID = 1 : startID = currentPage - 5;
	(currentPage > pageCount - 5) ? endID = pageCount : endID = currentPage + 5;

	(startID > 1) && pages.push({name: '<..', count: startID - 1});
	for (let i = startID; i <= endID; i++) {
		pages.push({name: i, count: i});
	}
	(endID < pageCount) && pages.push({name: '..>', count: endID + 1});

	let pagesList = pages.map(p =>
		<span key={p.count} className={(p.count === currentPage) ? s.selectedPage : null}
			  onClick={() => (props.onPageChange(p.count))}>{p.name}</span>
	);

	let usersList = props.users.map(u => (
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
		<div className={(props.isFetching) ? s.disabled : null}>
			<h1>Users:</h1>
			<div className={s.pagination}>
				{pagesList}
			</div>
			{usersList}
		</div>
	);
}

export default Users;