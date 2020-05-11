import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';
import { updateNewMessageBodyCreator, sendMessageCreator } from '../../redux/dialogsPageReducer';


function Dialogs(props) {
    // debugger;
    let state = props.store.getState().dialogsPage;

    let dialog = state.dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id} />;
    });

    let message = state.messagesData.map(m => {
        return <Message msg={m.message} />;
    });

    let newMessageBody = state.newMessageBody;


    let onSendMessageClick = () => {
        props.store.dispatch(sendMessageCreator());
    };

    let onNewMessageChange = (e) => {
        let body = e.target.value;
        props.store.dispatch(updateNewMessageBodyCreator(body));
    };

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
                <textarea
                    placeholder='Enter your messega'
                    value={newMessageBody}
                    onChange={onNewMessageChange}
                ></textarea>
                <button onClick={onSendMessageClick}>Send messages</button>
            </div>
        </div>
    );
}

export default Dialogs;