import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';


function MyPostsContainer(props) {
    let state = props.store.getState();

    let addPostMessage = () => {
        props.store.dispatch(addPostActionCreator());
    }

    let onPostChange = (text) => {
        let action = updateNewPostTextActionCreator(text);
        props.store.dispatch(action);
    }

    return (
        <MyPosts
            updateNewPostText={onPostChange}
            addPostMessage={addPostMessage}
            messagesPost={state.profilePage.messagesPost}
            newPostText={state.profilePage.newPostText}
        />
    )
}

export default MyPostsContainer;
