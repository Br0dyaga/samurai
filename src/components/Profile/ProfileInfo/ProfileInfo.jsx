import React from 'react';
import pict from "./pict.png";
import s from './ProfileInfo.module.css'
import FB from '../../../assets/image/facebook.svg';
import VK from '../../../assets/image/vk.svg';
import Instagram from '../../../assets/image/instagram.svg';
import Twitter from '../../../assets/image/twitter.svg';
import Youtube from '../../../assets/image/youtube.svg';
import github from '../../../assets/image/github.svg';
import www from '../../../assets/image/www.svg';
import email from '../../../assets/image/email.svg';
import yes from '../../../assets/image/yes.svg';
import no from '../../../assets/image/no.svg';
import avatar from "../../../assets/image/noavatar.jpg";
import Preloader from "../../common/Preloader/Preloader";

const ProfileInfo = (props) => {
	if (!props.profile) {
		return <Preloader/>
	}
	if (props.isFetching) {
		return <Preloader/>
	}

	document.title = 'Samurai - Профиль';
	if (props.profile === 'BAD REQUEST') {
		return (
			<h2>Невозможно загрузить пользователя</h2>
		)
	} else {
		return (
			<div>
				<div className={s.profile__pict}>
					<img src={pict} alt='pict'/>
				</div>
				<div className={s.title}>
					<div className={s.title__ava}>
						{(props.profile.photos.large)
							? <img src={props.profile.photos.large} alt={props.profile.fullName}
								   title={props.profile.fullName}/>
							: <img src={avatar} alt={props.profile.fullName} title={props.profile.fullName}/>}
					</div>
					<div className={s.title__desc}>
						<h1>{props.profile.fullName}</h1>
						<h3>{(props.profile.aboutMe) ? props.profile.aboutMe : null}</h3>
						<div className={s.contacts}>
							<a className={`${s.linkContact} ${(!(props.profile.contacts.facebook)) ? s.disabledLinkContact : null}`}
							   href={`http://${props.profile.contacts.facebook}`}><img src={FB} alt=''/></a>
							<a className={`${s.linkContact} ${(!(props.profile.contacts.vk)) ? s.disabledLinkContact : null}`}
							   href={`http://${props.profile.contacts.vk}`}><img src={VK} alt=''/></a>
							<a className={`${s.linkContact} ${(!(props.profile.contacts.instagram)) ? s.disabledLinkContact : null}`}
							   href={`http://${props.profile.contacts.instagram}`}><img src={Instagram} alt=''/></a>
							<a className={`${s.linkContact} ${(!(props.profile.contacts.twitter)) ? s.disabledLinkContact : null}`}
							   href={`http://${props.profile.contacts.twitter}`}><img src={Twitter} alt=''/></a>
							<a className={`${s.linkContact} ${(!(props.profile.contacts.youtube)) ? s.disabledLinkContact : null}`}
							   href={`http://${props.profile.contacts.youtube}`}><img src={Youtube} alt=''/></a>
							<a className={`${s.linkContact} ${(!(props.profile.contacts.website)) ? s.disabledLinkContact : null}`}
							   href={`http://${props.profile.contacts.website}`}><img src={www} alt=''/></a>
							<a className={`${s.linkContact} ${(!(props.profile.contacts.github)) ? s.disabledLinkContact : null}`}
							   href={`http://${props.profile.contacts.github}`}><img src={github} alt=''/></a>
							<a className={`${s.linkContact} ${(!(props.profile.contacts.mainLink)) ? s.disabledLinkContact : null}`}
							   href={`http://${props.profile.contacts.mainLink}`}><img src={email} alt=''/></a>
						</div>
						<div className={s.job}>
							Need work:
							{(!(props.profile.lookingForAJob)) ? <img src={no} alt=''/> : <img src={yes} alt=''/>}
							{(props.profile.lookingForAJobDescription) ? props.profile.lookingForAJobDescription : null}
						</div>

					</div>
				</div>
			</div>
		)
	}
}

export default ProfileInfo;