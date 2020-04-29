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
        { name: "Marina", id: "4" },
        { name: "Pavel", id: "5" },
        { name: "Lena", id: "6" },

    ]

    let messagesData = [
        { id: 1, message: "Hello" },
        { id: 2, message: "How are you?" },
        { id: 3, message: "Let's meet at the bar?" },
        { id: 4, message: "Tomorrow at 8 pm" },

    ]

    let dialog = dialogData.map((d) => {
        return <Dialog name={d.name} id={d.id} />;
    })

    let message = messagesData.map(m => <Message msg={m.message} />)

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