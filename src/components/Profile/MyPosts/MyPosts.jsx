import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

function MyPosts(props) {
    let newPostElement = React.createRef();

    let addPostMessage = () => {
        props.addPost();
        // props.updateNewPostText('');
        // newPostElement.current.value = "";
    }

    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    }
    let message = props.state.profilePage.messagesPost
        .map(m => <Post message={m.message} like={m.like} />)

    return (
        <div>
            <div className={s.postsBlock}>
                <h4>My post</h4>
                <div>
                    <textarea ref={newPostElement} onChange={onPostChange} value={props.state.profilePage.newPostText} />
                    <button onClick={addPostMessage}>New Post</button>
                </div>
            </div>
            <div className={s.posts}>
                {message}
            </div>
        </div>
    )
}

export default MyPosts;
