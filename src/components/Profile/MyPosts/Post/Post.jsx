import React from 'react';
import s from './Post.module.css';

function Post() {
    return (
        <div className={s.post}>
            <img className={s.avatar} src="https://images.unsplash.com/photo-1503023345310-bd7c1de61c7d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&w=1000&q=80" />
            <p>Text post 1</p>
        </div>
    )
}

export default Post;