import React from 'react';
import pict from "./pict.png";
import s from './ProfileInfo.module.css'
import ava from ".././tux.png";
import FB from '../../../assets/image/facebook.svg';
import VK from '../../../assets/image/vk.svg';
import Instagram from '../../../assets/image/instagram.svg';
import Twitter from '../../../assets/image/twitter.svg';
import Youtube from '../../../assets/image/youtube.svg';
import github from '../../../assets/image/github.svg';
import www from '../../../assets/image/www.svg';
import email from '../../../assets/image/email.svg';
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
	if (!props.profile){
		return <Preloader />
	}

	document.title = 'Samurai - Профиль';

	return(
		<div>
			<div className={s.profile__pict}>
				<img src={pict} alt='pict'/>
			</div>
			<div className={s.title}>
				<div className={s.title__ava}>
					<img src={props.profile.photos.large} alt='ava' title='ava'/>
				</div>
				<div className={s.title__desc}>
					<h1>{props.profile.fullName}</h1>
					<h3>{props.profile.aboutMe}</h3>
					<div className={s.contacts}>
						<a className={s.linkContact} href={`http://${props.profile.contacts.facebook}`}><img src={FB} alt='' /></a>
						<a className={s.linkContact} href={props.profile.contacts.vk}><img src={VK} alt=''/></a>
						<img src={Instagram} alt=''/>{props.profile.contacts.instagram}
						<img src={Twitter} alt=''/> {props.profile.contacts.twitter}
						<img src={Youtube} alt=''/> {props.profile.contacts.youtube}
						<img src={www} alt=''/> {props.profile.contacts.website}
						<img src={github} alt=''/> {props.profile.contacts.github}
						<img src={email} alt=''/> {props.profile.contacts.mainLink}
					</div>
					<div>
						{props.profile.lookingForAJob} - {props.profile.lookingForAJobDescription}
					</div>

				</div>
			</div>
		</div>
	)
}

export default ProfileInfo;