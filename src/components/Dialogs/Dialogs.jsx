import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function Dialog(props) {


    let path = `/Dialogs/${props.id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active} className={s.link}>{props.name}</NavLink>
        </div>
    )
}

function Message(props) {
    return (
        <div className={s.message}>
            <p>{props.msg}</p>
        </div>
    );
}

function Dialogs() {
    let dialogData = [
        { name: "Andrew", id: "1" },
        { name: "Anatoly", id: "2" },
        { name: "Ivan", id: "3" },
    ]

    let messagesData = [
        { id: 1, message: "Hello" },
        { id: 1, message: "How are you?" },
        { id: 1, message: "Let's meet at the bar?" },
    ]

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name={dialogData[0].name} id={dialogData[0].id} />
                <Dialog name={dialogData[1].name} id={dialogData[1].id} />
                <Dialog name={dialogData[2].name} id={dialogData[2].id} />
                <Dialog name="Marina" id="4" />
                <Dialog name="Pavel" id="5" />
                <Dialog name="Lena" id="6" />
            </div>
            <div className={s.messages}>
                <Message msg={messagesData[0].message} />
                <Message msg={messagesData[1].message} />
                <Message msg={messagesData[2].message} />
                <Message msg="Tomorrow at 8 pm" />
            </div>
        </div>
    );
}

export default Dialogs;