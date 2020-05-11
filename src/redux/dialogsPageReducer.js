const UPDATE_NEW_MESSAGE_BODY = 'UPDATE-NEW-MESSAGE-BODY';
const SEND_MESSAGE = 'SEND-MESSAGE';

let initialState = {
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
};

const dialogsPageReducer = (state = initialState, action) => {

    if (action.type === UPDATE_NEW_MESSAGE_BODY) {
        state.newMessageBody = action.body;
    } else if (action.type === SEND_MESSAGE) {
        let body = state.newMessageBody;
        state.newMessageBody = " ";
        state.messagesData.push({ id: 6, message: body });
    }

    return state;
}

export const sendMessageCreator = () => ({ type: SEND_MESSAGE });
export const updateNewMessageBodyCreator = (body) => {
    return {
        type: UPDATE_NEW_MESSAGE_BODY,
        body: body
    }
}

export default dialogsPageReducer;