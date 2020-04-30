import React from 'react';
import s from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';


function DialogItem(props) {


    let path = `/Dialogs/${props.id}`;
    return (
        <div className={s.dialog}>
            <NavLink to={path} activeClassName={s.active} className={s.link}>{props.name}</NavLink>
        </div>
    )
}

export default DialogItem;