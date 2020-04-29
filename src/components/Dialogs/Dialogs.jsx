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
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <Dialog name="Andrew" id="1" />
                <Dialog name="Anatoly" id="2" />
                <Dialog name="Ivan" id="3" />
                <Dialog name="Marina" id="4" />
                <Dialog name="Pavel" id="5" />
                <Dialog name="Lena" id="6" />
            </div>
            <div className={s.messages}>
                <Message msg="Hello" />
                <Message msg="How are you?" />
                <Message msg="Let's meet at the bar?" />
                <Message msg="Tomorrow at 8 pm" />
            </div>
        </div>
    );
}

export default Dialogs;