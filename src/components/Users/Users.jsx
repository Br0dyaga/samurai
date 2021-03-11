import React from 'react';
import s from './Users.module.css';
import avatar from '../../assets/image/noavatar.jpg';
import axios from "axios";

export default class Users extends React.Component {
	constructor(props) {
		super(props);
		axios.get('https://social-network.samuraijs.com/api/1.0/users')
			.then(response => {
				this.props.setUsers(response.data.items);
			});
	}

	render() {
		document.title = 'Samurai - Найти пользователя';

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
				{usersList}
			</div>
		)
	};
};