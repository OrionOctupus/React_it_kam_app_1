import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts() {

    let messagesData = [
        { id: 1, message: "Hello, My Friend!", like: 3 },
        { id: 1, message: "It's first post", like: 4 },
    ]

    return (
        <div>
            <div className={s.postsBlock}>
                <h4>My post</h4>
                <div>
                    <button>New Post</button>
                </div>
            </div>
            <div className={s.posts}>
                <Post message={messagesData[0].message} like={messagesData[0].like} />
                <Post message={messagesData[1].message} like={messagesData[1].like} />
                <Post message="It's a good weather today" like="5" />
                <Post message="Good luck!" like="13" />
            </div>
        </div>
    )
}

export default MyPosts;
