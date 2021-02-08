import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div>
            <h2>My posts</h2>
            <div>
                <form className={s.newpost}>
                    <textarea placeholder='Print text here...' required/>
                    <button type='submit'>Public</button>
                </form>
            </div>
            <div>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        </div>
    );
}

export default MyPosts;