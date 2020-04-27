import React from 'react';
import s from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts';

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img className={s.wallpic} src="https://www.itl.cat/pngfile/big/5-55779_green-nature-dual-monitor-desktop-desktop-images-wallpaper.jpg" />
            </div>
            <div>
                avatar + info
            </div>
            <MyPosts />
        </div>
    );
}

export default Profile;