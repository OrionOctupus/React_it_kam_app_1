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
                <Post message="Hello, My Friend!" like="3" />
                <Post message="It's first post" like="2" />
                <Post message="It's a good weather today" like="5" />
                <Post message="Good luck!" like="13" />
            </div>
        </div>
    )
}

export default MyPosts;
