import React from 'react';
import ava from "./../../tux.png";
import s from './Post.module.css';
import like from "./like.png";
import dislike from "./dislike.png";

const Post = () => {
    return (
        <div className={s.post}>
            <img className={s.ava} src={ava} alt='ava' title='ava'/>
            <p>post</p>
            <div className={s.like}>
                <img src={like} alt='LIKE' title="LIKE" />
                <img src={dislike} alt='disLIKE' title="disLIKE" />
            </div>
        </div>
    );
}

export default Post;