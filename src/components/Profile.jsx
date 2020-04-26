import React from 'react';
import s from './Profile.module.css';

function Profile() {
    return (
        <div className={s.content}>
            <div>
                <img src="https://www.itl.cat/pngfile/big/5-55779_green-nature-dual-monitor-desktop-desktop-images-wallpaper.jpg" />
            </div>
            <div>
                avatar + info
        </div>
            <div>
                My post
          <div>
                    New Post
          </div>
                <div>
                    Post 1
          </div>
                <div>
                    Post 2
          </div>
            </div>
        </div>
    );
}

export default Profile;