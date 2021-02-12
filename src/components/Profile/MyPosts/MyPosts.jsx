import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {

    let postsData = [
        {id: 1, message: 'First message', like: 10, dislike: 15},
        {id: 2, message: 'Second message', like: 1, dislike: 1},
        {id: 3, message: 'Third message', like: 32, dislike: 333},
        {id: 4, message: 'Other message', like: 101, dislike: 2},
        {id: 5, message: 'Some once message', like: 1110, dislike: 0},
        {id: 6, message: 'ooooops)', like: 0, dislike: 123}
    ];

    let postList = postsData.map((post, index) =>
        <Post key={'post'+index} message={post.message} like={post.like} dislike={post.dislike} />
    );


    return (
        <div>
            <h2>My posts</h2>
            <div>
                <form className={s.newpost}>
                    <textarea placeholder='Print text here...' required/>
                    <button type='submit'>Public</button>
                </form>
            </div>
            <div className={s.listPosts}>
                { postList }
            </div>
        </div>
    );
}

export default MyPosts;