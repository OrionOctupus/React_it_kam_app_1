import React from 'react';
import s from './Nav.module.css';
import { NavLink } from 'react-router-dom';
import Friend from './Friends/Friends';

function Nav(props) {
    // let friends = props.store.getState().navPage.friendsData.map(f => <Friend name={f.name} imgSrc={f.imgSrc} />);

    return (
        <nav className={s.nav}>
            <ul>
                <li><NavLink to="/Profile" activeClassName={s.active} className={s.link}>Profile</NavLink></li>
                <li><NavLink to="/Dialogs" activeClassName={s.active} className={s.link}>Messages</NavLink></li>
                <li><NavLink to="/News" activeClassName={s.active} className={s.link}>News</NavLink></li>
                <li><NavLink to="/Music" activeClassName={s.active} className={s.link}>Music</NavLink></li>
                <li><NavLink to="/Settings" activeClassName={s.active} className={s.link}>Settings</NavLink></li>
            </ul>
            {/* <div className={s.friends}>
                <h2>Friends</h2>
                <div className={s.friendsBlock}>
                    {friends}
                </div>
            </div> */}
        </nav>
    );
}

export default Nav;