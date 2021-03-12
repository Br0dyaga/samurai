import React from 'react';
import s from './Users.module.css';
import avatar from '../../assets/image/noavatar.jpg';
import axios from "axios";

export default class Users extends React.Component {
	componentDidMount() {
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users
			?count=${this.props.usersPage.pageSize}
			&page=${this.props.usersPage.currentPage}`
		)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsers(response.data.totalCount);
			});
	};

	onPageChange = (numberPage) => {
		this.props.setPage(numberPage);
		axios.get(
			`https://social-network.samuraijs.com/api/1.0/users
			?count=${this.props.usersPage.pageSize}&page=${numberPage}`
		)
			.then(response => {
				this.props.setUsers(response.data.items);
				this.props.setTotalUsers(response.data.totalCount);
			});
	};

	render() {
		document.title = 'Samurai - Найти пользователя';

		let currentPage = this.props.usersPage.currentPage;
		let pageSize = this.props.usersPage.pageSize;
		let totalUsersCount = this.props.usersPage.totalUsersCount;
		let pageCount = Math.ceil(totalUsersCount / pageSize);

		let pages = [];
		let startID, endID;

		(currentPage < 6) ? startID = 1 : startID = currentPage - 5;
		(currentPage > pageCount - 5) ? endID = pageCount : endID = currentPage + 5;

		(startID > 1) && pages.push('...');
		for (let i = startID; i <= endID; i++) {
			pages.push(i);
		}
		(endID < pageCount) && pages.push('...');

		let pagesList = pages.map(p => (
			<span className={(p === currentPage) && s.selectedPage}
				  onClick={() => (this.onPageChange(p))}>{p}</span>
		));

		let usersList = this.props.usersPage.users.map(u => (
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
						this.props.toggleFollow(u.id)
					}} className={`${s.btnfollow} ${(u.followed) ? s.unfollow : s.follow}`}>
						{(u.followed) ? 'Unfollow' : 'Follow'}
					</div>
				</div>
			</div>
		));

		return (
			<div>
				<h1>Users:</h1>
				<div className={s.pagination}>
					{pagesList}
				</div>
				{usersList}
			</div>
		)
	};
};