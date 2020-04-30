import React from 'react';
import s from './Message.module.css';


function Message(props) {
    return (
        <div className={s.message}>
            <p>{props.msg}</p>
        </div>
    );
}

export default Message;