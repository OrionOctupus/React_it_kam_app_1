import profilePageReducer from "./profilePageReducer";
import dialogsPageReducer from "./dialogsPageReducer";
import navPageReducer from "./navPageReducer";

let store = {
    _state: {
        dialogsPage: {
            dialogsData: [
                { name: "Andrew", id: "1" },
                { name: "Anatoly", id: "2" },
                { name: "Ivan", id: "3" },
                { name: "Marina", id: "4" },
                { name: "Pavel", id: "5" },
                { name: "Lena", id: "6" },
            ],

            messagesData: [
                { id: 2, message: "Hello" },
                { id: 2, message: "How are you?" },
                { id: 1, message: "i'm fine thanks" },
                { id: 2, message: "Let's meet at the bar?" },
                { id: 2, message: "Tomorrow at 8 pm" },
            ],
            newMessageBody: " ",

        },

        profilePage: {
            messagesPost: [
                { id: 1, message: "Hello, My Friend!", like: 3 },
                { id: 2, message: "It's first post", like: 4 },
                { id: 3, message: "It's a good weather today", like: 7 },
                { id: 4, message: "Good luck!", like: 10 },
            ],
            newPostText: '',
        },

        navPage: {
            friendsData: [
                { name: 'Marina', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRKgsWPnVm6fXTEB1DUw2BY7tBlQccuX4AKx55ej5xdyfIopbYh&usqp=CAU' },
                { name: 'Andrew', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT8TyhXI38Z3NZXMzBSt1cRmfr_iqVYntuH_27vsKnsA7SlNwUd&usqp=CAU' },
                { name: 'Pavel', imgSrc: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRhbz_eXUmG-Z0QBun3sYC4k7dj59lbZPrS4XhdLQTxWj4LAE6p&usqp=CAU' }
            ]
        }
    },
    _callSubscriber() {
        console.log('state update');
    },

    getState() {
        return this._state;
    },
    subscribe(observer) {
        this._callSubscriber = observer; // патерн наблюдатель
    },

    dispatch(action) {

        this._state.profilePage = profilePageReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsPageReducer(this._state.dialogsPage, action);
        this._state.navPage = navPageReducer(this._state.navPage, action);

        this._callSubscriber(this._state);
    }
}

export default store;
window.store = store;





// addPost() {
    //     let newPost = {
    //         id: 5,
    //         message: this._state.profilePage.newPostText,
    //         like: 0
    //     };
    //     this._state.profilePage.messagesPost.push(newPost);
    //     this._state.profilePage.newPostText = '';
    //     this._callSubscriber(this._state);
    // },

    // updateNewPostText(newText) {
    //     this._state.profilePage.newPostText = newText;
    //     this._callSubscriber(this._state);
    // },

    // -->  action{type:'text'} - объект с описанием действия;



    // улучшили читаемость кода в файле state.js, разделив логику if в dispatch на отдельные файлы reducer. Тем самым файл стал понятней, для поддежки.

    // dispatch(action) {
    //     if (action.type === ADD_POST) {
    //         let newPost = {
    //             id: 5,
    //             message: this._state.profilePage.newPostText,
    //             like: 0
    //         };
    //         this._state.profilePage.messagesPost.push(newPost);
    //         this._state.profilePage.newPostText = '';
    //         this._callSubscriber(this._state);
    //     } else if (action.type === UPDATE_NEW_POST_TEXT) {
    //         this._state.profilePage.newPostText = action.newText;
    //         this._callSubscriber(this._state);
    //     } else if (action.type === UPDATE_NEW_MESSAGE_BODY) {
    //         this._state.dialogsPage.newMessageBody = action.body;
    //         this._callSubscriber(this._state);
    //     } else if (action.type === SEND_MESSAGE) {
    //         let body = this._state.dialogsPage.newMessageBody;
    //         this._state.dialogsPage.newMessageBody = " ";
    //         this._state.dialogsPage.messagesData.push({ id: 6, message: body });
    //         this._callSubscriber(this._state);
    //     }
    // }