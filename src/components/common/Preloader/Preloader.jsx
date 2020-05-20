import React from 'react';
import s from './Preloader.module.css';

function Preloader(props) {
    return (
        <div>
            <div className={s.ldsRoller}><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div>
        </div>
    )
}

export default Preloader;

