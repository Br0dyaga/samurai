import React from 'react';
import pict from "./pict.png";
import ava from "./tux.png";
import s from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return (
        <div className={s.content}>
            <div>
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

            <MyPosts/>

        </div>
    );
}

export default Profile;