import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';

function Nav() {
    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to="/Profile" activeClassName={s.active} className={s.link}>Profile</NavLink></li>
                <li><NavLink to="/Dialogs" activeClassName={s.active} className={s.link}>Messages</NavLink></li>
                <li><NavLink to="/News" activeClassName={s.active} className={s.link}>News</NavLink></li>
                <li><NavLink to="/Music" activeClassName={s.active} className={s.link}>Music</NavLink></li>
                <li><NavLink to="/Settings" activeClassName={s.active} className={s.link}>Settings</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;