import React from 'react';
import s from './Friends.module.css';

function Friend(props) {
    return (
        <div className={s.friendsProf}>
            <img src={props.imgSrc} alt={props.name} />
            <p>{props.name}</p>
        </div>
    )
}

export default Friend;