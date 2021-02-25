import React from 'react';
import pict from "./pict.png";
import s from './ProfileInfo.module.css'
import ava from ".././tux.png";

const ProfileInfo = () => {
	document.title = 'Samurai - Профиль';
	return(

		<div>
			<div className={s.profile__pict}>
				<img src={pict} alt='pict'/>
			</div>
			<div className={s.title}>
				<div className={s.title__ava}>
					<img src={ava} alt='ava' title='ava'/>
				</div>
				<div className={s.title__desc}>
					<h1>Anton E.</h1>
					<h3>Date birth: 11 july</h3>
					<h3>City: Petropavlovsk</h3>
					<h3>Education: NKGU'04</h3>
					<h3>WebSite: localhost :-)</h3>
				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;