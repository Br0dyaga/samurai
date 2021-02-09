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
                <Post message='First message' like='10' dislike='15'/>
                <Post message='Second message' like='8' dislike='1'/>
                <Post message='Third message' like='99' dislike='32'/>
                <Post message='Other message' like='10000' dislike='1233'/>
                <Post message='Some once message' like='1' dislike='15'/>
            </div>
        </div>
    );
}

export default MyPosts;