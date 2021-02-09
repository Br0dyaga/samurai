import React from 'react';
import ava from "./../../tux.png";
import s from './Post.module.css';
import like from "./like.png";
import dislike from "./dislike.png";

const Post = (props) => {
    return (
        <div className={s.post}>
            <img className={s.ava} src={ava} alt='ava' title='ava'/>
            <p> {props.message} </p>
            <div className={s.like}>
                <span className={s.count}>{props.like}</span> <img src={like} alt='LIKE' title="LIKE"/>
                <span className={s.count}>{props.dislike}</span> <img src={dislike} alt='disLIKE' title="disLIKE"/>
            </div>
        </div>
    );
}

export default Post;