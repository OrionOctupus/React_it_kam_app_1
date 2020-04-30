import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import s from './Dialogs.module.css';


function Dialogs(props) {

    let dialog = props.dialogsData.map((d) => {
        return <DialogItem name={d.name} id={d.id} />;
    })

    let message = props.messagesPost.map(m => <Message msg={m.message} />)

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialog}
            </div>
            <div className={s.messages}>
                {message}
            </div>
        </div>
    );
}

export default Dialogs;