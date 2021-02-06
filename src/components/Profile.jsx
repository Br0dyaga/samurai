import React from 'react';
import pict from "./pict.png";
import ava from "./tux.png";

const Profile = () => {
    return(
        <div className="content">
            <div>
                <img src={pict} alt='pict'/>
            </div>
            <div className="profile-title">
                <div className="profile-title-ava">
                    <img src={ava} alt='ava' title='ava'/>
                </div>
                <div className="profile-title-desc">
                    <h1>Anton E.</h1>
                    <h3>Date birth: 11 july</h3>
                    <h3>City: Petropavlovsk</h3>
                    <h3>Education: NKGU'04</h3>
                    <h3>WebSite: localhost :-)</h3>
                </div>
            </div>
            <div>
                <h2>My posts</h2>
                <div>new post</div>
                <div>
                    <div>post2</div>
                    <div>post2</div>
                </div>
            </div>
        </div>
    );
}

export default Profile;