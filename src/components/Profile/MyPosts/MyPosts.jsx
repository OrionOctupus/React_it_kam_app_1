import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {
    return (
        <div>
            <h4>My post</h4>
            <div>
                <button>New Post</button>
            </div>
            <div className={s.posts}>
                <Post />
                <Post />
                <Post />
                <Post />
            </div>
        </div>
    )
}

export default MyPosts;
