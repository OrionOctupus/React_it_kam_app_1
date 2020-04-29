import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {

    let messagesData = [
        { id: 1, message: "Hello, My Friend!", like: 3 },
        { id: 2, message: "It's first post", like: 4 },
        { id: 3, message: "It's a good weather today", like: 7 },
        { id: 4, message: "Good luck!", like: 10 },
    ]

    let message = messagesData
        .map(m => <Post message={m.message} like={m.like} />)

    return (
        <div>
            <div className={s.postsBlock}>
                <h4>My post</h4>
                <div>
                    <button>New Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {message}
            </div>
        </div>
    )
}

export default MyPosts;
