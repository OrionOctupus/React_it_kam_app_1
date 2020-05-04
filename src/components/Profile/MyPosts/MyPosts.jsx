import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let newPostElement = React.createRef();
    let newPostMessage = () => {
        debugger;
        props.addPost(newPostElement.current.value);
        newPostElement.current.value = "";
    }


    let message = props.state.profilePage.messagesPost
        .map(m => <Post message={m.message} like={m.like} />)

    return (
        <div>
            <div className={s.postsBlock}>
                <h4>My post</h4>
                <div>
                    <textarea ref={newPostElement} ></textarea>
                    <button onClick={newPostMessage}>New Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {message}
            </div>
        </div>
    )
}

export default MyPosts;
