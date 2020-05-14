const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

let initialState = {
    messagesPost: [
        { id: 1, message: "Hello, My Friend!", like: 3 },
        { id: 2, message: "It's first post", like: 4 },
        { id: 3, message: "It's a good weather today", like: 7 },
        { id: 4, message: "Good luck!", like: 10 },
    ],
    newPostText: '',
};

const profilePageReducer = (state = initialState, action) => {

    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 5,
                message: state.newPostText,
                like: 0
            };
            let stateCopy = { ...state };
            stateCopy.messagesPost = [...state.messagesPost];
            stateCopy.messagesPost.push(newPost);
            // state.messagesPost.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
            // state.newPostText = '';
            // return state;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = { ...state };

            stateCopy.newPostText = action.newText;
            return stateCopy;

            // state.newPostText = action.newText;
            // return state;

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

export default profilePageReducer;