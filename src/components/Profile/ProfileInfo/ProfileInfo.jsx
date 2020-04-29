import React from 'react';
import s from './ProfileInfo.module.css';

function ProfileInfo() {
    return (
        <div>
            <div>
                <img className={s.wallpic} src="https://www.itl.cat/pngfile/big/5-55779_green-nature-dual-monitor-desktop-desktop-images-wallpaper.jpg" alt="" />
            </div>
            <div className={s.description}>
                avatar + info
            </div>
        </div>
    )
}

export default ProfileInfo;