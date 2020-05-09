import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';


function Dialogs(props) {

    let newMessageItem = React.createRef();
    let onSendMessageClick = () => { alert(newMessageItem.current.value) };

    let dialog = props.state.dialogsPage.dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id} />;
    })

    let message = props.state.dialogsPage.messagesData.map(m => {
        if (m.id = 1) {
            return <Message msg={m.message} />;
        } else {
            return <Message msg={m.message} />;
        }
    });

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
                <textarea placeholder='Enter your messega' ref={newMessageItem}></textarea>
                <button onClick={onSendMessageClick}>Send messages</button>
            </div>
        </div>
    );
}

export default Dialogs;