import React from 'react';
import s from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog}`}>
                    <NavLink to="/Dialogs/1" activeClassName={s.active} className={s.link}>Andrew</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/2" activeClassName={s.active} className={s.link}>Anatoly</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/3" activeClassName={s.active} className={s.link}>Ivan</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/4" activeClassName={s.active} className={s.link}>Marina</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/5" activeClassName={s.active} className={s.link}>Pavel</NavLink>
                </div>
                <div className={s.dialog}>
                    <NavLink to="/Dialogs/6" activeClassName={s.active} className={s.link}>Lena</NavLink>
                </div>
            </div>
            <div className={s.messages}>
                <div className={s.message}>
                    <p>Hello </p>
                </div>
                <div className={s.message}>
                    <p>How are you? </p>
                </div>
                <div className={s.message}>
                    <p>Let's meet at the bar?</p>
                </div>
                <div className={s.message}>
                    <p>Tomorrow at 8 pm </p>
                </div>
            </div>
        </div>
    );
}

export default Dialogs;