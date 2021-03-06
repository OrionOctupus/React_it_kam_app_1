import React from 'react';
import s from './Users.module.css';
import userAvatarDefault from '../../../src/assets/images/userAvatarDefault.png';
import { NavLink } from 'react-router-dom';
import { userAPI } from '../../api/api';



function Users(props) {
    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    };

    return (
        <div>
            <div className={s.pagination}>
                {pages.map(p => {
                    return (
                        <span
                            className={props.currentPage === p && s.selectedPage}
                            onClick={(e) => { props.onPageChanged(p) }}
                        >{p}</span>
                    )
                })}

            </div>
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <NavLink to={'/profile/' + u.id}>
                                        <img className={s.usersPhoto} src={u.photos.small != null ? u.photos.small : userAvatarDefault} alt="logo Default" />
                                    </NavLink>
                                </div>
                                <div>
                                    {u.followed
                                        ? <button
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => {

                                                // СТАЛО с thunk
                                                props.unfollow(u.id)

                                                // БЫЛО без thunk
                                                // props.toggleFollowingProgress(true, u.id);
                                                // console.log('REQUEST');
                                                // userAPI.setUnfolower(u.id)
                                                //     .then(response => {
                                                //         if (response.data.resultCode === 0) {
                                                //             props.unfollow(u.id);
                                                //         }
                                                //         console.log(response);
                                                //         props.toggleFollowingProgress(false, u.id);
                                                //     });
                                            }}>unfollow</button>

                                        : <button
                                            disabled={props.followingInProgress.some(id => id === u.id)}
                                            onClick={() => { props.follow(u.id) }}>
                                            follow
                                        </button>}
                                </div>
                            </span>
                            <span>
                                <span>
                                    <div>{u.name}</div><div>{u.status}</div>
                                </span>
                                <span>
                                    <div>{"u.location.country"}</div>
                                    <div>{"u.location.city"}</div>
                                </span>
                            </span>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default Users;