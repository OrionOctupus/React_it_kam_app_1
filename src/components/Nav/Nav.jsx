import React from 'react';
import s from './Nav.module.css';

function Nav() {
    return (
        <nav className={s.nav}>
            <ul>
                <li><a href="/Profile" className={s.link}>Profile</a></li>
                <li><a href="/Dialogs" className={s.link}>Messages</a></li>
                <li><a href="/News" className={s.link}>News</a></li>
                <li><a href="/Music" className={s.link}>Music</a></li>
                <li><a href="/Settings" className={s.link}>Settings</a></li>
            </ul>
        </nav>
    );
}

export default Nav;