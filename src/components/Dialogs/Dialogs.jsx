import React from 'react';
import s from './Dialogs.module.css';

function Dialogs() {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <div className={`${s.dialog} ${s.active}`}>
                    Andrew
                </div>
                <div className={s.dialog}>
                    Anatoly
                </div>
                <div className={s.dialog}>
                    Ivan
                </div>
                <div className={s.dialog}>
                    Marina
                </div>
                <div className={s.dialog}>
                    Pavel
                </div>
                <div className={s.dialog}>
                    Lena
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