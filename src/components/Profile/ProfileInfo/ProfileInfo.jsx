import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

function ProfileInfo(props) {
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={s.wallpic} src="https://www.itl.cat/pngfile/big/5-55779_green-nature-dual-monitor-desktop-desktop-images-wallpaper.jpg" alt="" />
            </div>
            <div className={s.description}>
                <img src={props.profile.photos.large} alt="" />
                avatar + info
            </div>
        </div>
    )
}

export default ProfileInfo;