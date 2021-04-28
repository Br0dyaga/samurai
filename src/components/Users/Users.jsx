import React from 'react';
import s from "./Users.module.css";
import avatar from "../../assets/image/noavatar.jpg";
import {NavLink} from "react-router-dom";
import {followAPI} from "../../api/api";

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
				<NavLink to={`/profile/${u.id}`}>
					<img src={(u.photos.small != null) ? u.photos.small : avatar} alt={u.name} title={u.name}/>
				</NavLink>
			</div>
			<div className={s.user}>
				<div>
					<NavLink to={`/profile/${u.id}`}><h2>{u.name}</h2></NavLink>
					<h3>{u.status}</h3>
				</div>
				<div className={s.location}>{'u.location.country'}, <br/>{'u.location.city'}</div>

				{u.followed
					? <div onClick={() => {
						props.setFetching(true);
						followAPI.setUnfollow(u.id)
							.then(response => {
									if ((response.status === 200) && (response.data.resultCode === 0)) {
										props.setFetching(false);
										props.setUnFollow(u.id);
									} else {
										alert(`Что-то не так ${response.data.messages}`);
										props.setFetching(false);
									}
								}
							)
							.catch((error) => {
								alert(error);
								props.setFetching(false);
							});

						//
						// axios.delete(
						// 	`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
						// 		withCredentials: true,
						// 		headers: {
						// 			'API-KEY' : '88ff1343-e274-43f3-b7de-1fee880b0a62'
						// 		}
						// 	}
						// )
						// 	.then(response => {
						// 			if ((response.status===200) && (response.data.resultCode === 0)) {
						// 				props.setFetching(false);
						// 				props.setUnFollow(u.id);
						// 			} else {
						// 				alert(`Что-то не так ${response.data.messages}`);
						// 				props.setFetching(false);
						// 			}
						// 		}
						// 	)
						// 	.catch((error) => {
						// 		alert(error);
						// 		props.setFetching(false);
						// 	});

					}} className={`${s.unfollow} ${s.btnfollow}`}>Unfollow</div>
					: <div onClick={() => {
						props.setFetching(true);
						followAPI.setFollow(u.id)
							.then(response => {
								if ((response.status === 200) && (response.data.resultCode === 0)) {
									props.setFetching(false);
									props.setFollow(u.id);
								} else {
									alert(`Что-то не так ${response.data.messages}`);
									props.setFetching(false);
								}
							})
							.catch((error) => {
								alert(error);
								props.setFetching(false);
							});

						// axios.post(
						// 	`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
						// 		withCredentials: true,
						// 		headers: {
						// 			'API-KEY' : '88ff1343-e274-43f3-b7de-1fee880b0a62'
						// 		}
						// 	}
						// )
						// 	.then(response => {
						// 		if ((response.status===200) && (response.data.resultCode === 0)) {
						// 			props.setFetching(false);
						// 			props.setFollow(u.id);
						// 		} else {
						// 			alert(`Что-то не так ${response.data.messages}`);
						// 			props.setFetching(false);
						// 		}
						// 	})
						// 	.catch((error) => {
						// 		alert(error);
						// 		props.setFetching(false);
						// 	});

					}} className={`${s.follow} ${s.btnfollow}`}>Follow</div>}
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