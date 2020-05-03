import React from 'react';
import s from './Message.module.css';


function Message(props) {
    return (
        <div className={s.message}>
            <img src="https://www.snopes.com/tachyon/2014/10/GettyImages-938914628-e1563472902766.jpg?resize=865,452" alt="" srcset="" />
            <div className={s.textCloud}>
                <p>{props.msg}</p>

            </div>
        </div >
    );
}

export default Message;