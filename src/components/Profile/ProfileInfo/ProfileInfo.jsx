import React from 'react';
import s from './ProfileInfo.module.css';
import Preloader from '../../common/Preloader/Preloader';

function ProfileInfo(props) {
    // если нет никакого профиля показывается прелоадер
    if (!props.profile) {
        return <Preloader />
    }
    return (
        <div>
            <div>
                <img className={s.wallpic} src="https://www.itl.cat/pngfile/big/5-55779_green-nature-dual-monitor-desktop-desktop-images-wallpaper.jpg" alt="" />
            </div>
            <div className={s.description}>
                <h4>{props.profile.fullName}</h4>
                <img src={props.profile.photos.large} alt="" />
                <p><i>{props.profile.aboutMe}</i></p>
                <p>Работа: {props.profile.lookingForAJobDescription}</p>

                <a target='_blank' href={props.profile.contacts.facebook}> Facebook </a>
                <a target='_blank' href={props.profile.contacts.vk}> VK </a>
                <a target='_blank' href={props.profile.contacts.twitter}> Twitter </a>
            </div>
        </div>
    )
}

export default ProfileInfo;