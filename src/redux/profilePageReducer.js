const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';

let initialState = {
    messagesPost: [
        { id: 1, message: "Hello, My Friend!", like: 3 },
        { id: 2, message: "It's first post", like: 4 },
        { id: 3, message: "It's a good weather today", like: 7 },
        { id: 4, message: "Good luck!", like: 10 },
    ],
    newPostText: '',
    profile: null,
};

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            return {
                ...state,
                messagesPost: [...state.messagesPost, newPost],
                newPostText: ''
            };
        }
        case UPDATE_NEW_POST_TEXT: {
            return {
                ...state,
                newPostText: action.newText,
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile,
            }
        }
        default:
            return state;
    };

    // if (action.type === ADD_POST) {
    //     let newPost = {
    //         id: 5,
    //         message: state.newPostText,
    //         like: 0
    //     };
    //     state.messagesPost.push(newPost);
    //     state.newPostText = '';

    // } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //     state.newPostText = action.newText;
    // }
}

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => {
    return {
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    }
};

export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export default profilePageReducer;