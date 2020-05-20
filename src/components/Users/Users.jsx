import React from 'react';
import s from './Users.module.css';
import userAvatarDefault from '../../../src/assets/images/userAvatarDefault.png';

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
            {/* <button onClick={this.getUsers}>Get Users</button> */}
            {
                props.users.map(u => {
                    return (
                        <div key={u.id}>
                            <span>
                                <div>
                                    <img className={s.usersPhoto} src={u.photos.small != null ? u.photos.small : userAvatarDefault} alt="logo Default" />
                                </div>
                                <div>
                                    {u.followed
                                        ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
                                        : <button onClick={() => { props.follow(u.id) }}>follow</button>}
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