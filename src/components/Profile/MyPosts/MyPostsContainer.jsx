import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';


function MyPostsContainer(props) {
    // let state = props.store.getState();

    // let addPostMessage = () => {
    //     props.store.dispatch(addPostActionCreator());
    // }

    // let onPostChange = (text) => {
    //     let action = updateNewPostTextActionCreator(text);
    //     props.store.dispatch(action);
    // }

    return (
        <StoreContext.Consumer>
            {
                (store) => {
                    let state = store.getState();

                    let addPostMessage = () => {
                        store.dispatch(addPostActionCreator());
                    }

                    let onPostChange = (text) => {
                        let action = updateNewPostTextActionCreator(text);
                        store.dispatch(action);
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
            }
        </StoreContext.Consumer>
    )
}

export default MyPostsContainer;
