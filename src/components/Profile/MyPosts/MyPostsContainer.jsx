import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profilePageReducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

function mapStateToProps(state) {
    return {
        messagesPost: state.profilePage.messagesPost,
        newPostText: state.profilePage.newPostText
    }
}

function mapDispatchToProps(dispatch) {
    return {
        updateNewPostText: (text) => {
            let action = updateNewPostTextActionCreator(text);
            dispatch(action);
        },
        addPostMessage: () => {
            dispatch(addPostActionCreator());
        }
    }
}

export default MyPostsContainer;

// function MyPostsContainer(props) {
//     // let state = props.store.getState();

//     // let addPostMessage = () => {
//     //     props.store.dispatch(addPostActionCreator());
//     // }

//     // let onPostChange = (text) => {
//     //     let action = updateNewPostTextActionCreator(text);
//     //     props.store.dispatch(action);
//     // }

//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     let state = store.getState();

//                     let addPostMessage = () => {
//                         store.dispatch(addPostActionCreator());
//                     }

//                     let onPostChange = (text) => {
//                         let action = updateNewPostTextActionCreator(text);
//                         store.dispatch(action);
//                     }

//                     return (
//                         <MyPosts
//                             updateNewPostText={onPostChange}
//                             addPostMessage={addPostMessage}
//                             messagesPost={state.profilePage.messagesPost}
//                             newPostText={state.profilePage.newPostText}
//                         />
//                     )
//                 }
//             }
//         </StoreContext.Consumer>
//     )
// }