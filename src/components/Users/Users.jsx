import React from 'react';
import s from './Users.module.css';
import * as axios from 'axios';
import userAvatarDefault from '../../../src/assets/images/userAvatarDefault.png';



class Users extends React.Component {
    constructor(props) {
        super(props);
        axios.get("https://social-network.samuraijs.com/api/1.0/users")
            .then(response => {
                this.props.setUsers(response.data.items);
            })
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get("https://social-network.samuraijs.com/api/1.0/users")
    //             .then(response => {
    //                 this.props.setUsers(response.data.items);
    //             })
    //     }
    // }

    render() {
        return (
            <div>
                <button onClick={this.getUsers}>Get Users</button>
                {
                    this.props.users.map(u => {
                        return (
                            <div key={u.id}>
                                <span>
                                    <div>
                                        <img className={s.usersPhoto} src={u.photos.small != null ? u.photos.small : userAvatarDefault} />
                                    </div>
                                    <div>
                                        {u.followed
                                            ? <button onClick={() => { this.props.unfollow(u.id) }}>unfollow</button>
                                            : <button onClick={() => { this.props.follow(u.id) }}>follow</button>}
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
}

// function Users(props) {
//     function getUsers() {
//         if (props.users.length === 0) {
//             axios.get("https://social-network.samuraijs.com/api/1.0/users")
//                 .then(response => {
//                     props.setUsers(response.data.items);
//                 })
//         }
//     }

//     return (
//         <div>
//             <button onClick={getUsers}>Get Users</button>
//             {
//                 props.users.map(u => {
//                     return (
//                         <div key={u.id}>
//                             <span>
//                                 <div>
//                                     <img className={s.usersPhoto} src={u.photos.small != null ? u.photos.small : userAvatarDefault} />
//                                 </div>
//                                 <div>
//                                     {u.followed
//                                         ? <button onClick={() => { props.unfollow(u.id) }}>unfollow</button>
//                                         : <button onClick={() => { props.follow(u.id) }}>follow</button>}
//                                 </div>
//                             </span>
//                             <span>
//                                 <span>
//                                     <div>{u.name}</div><div>{u.status}</div>
//                                 </span>
//                                 <span>
//                                     <div>{"u.location.country"}</div>
//                                     <div>{"u.location.city"}</div>
//                                 </span>
//                             </span>
//                         </div>
//                     )
//                 })
//             }
//         </div>
//     )
// };

export default Users;


// if (props.users.length === 0) {
    //     props.setUsers([
    //         { id: 1, followed: false, fullName: "Eugene", status: 'I am learn React&Redux', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://assets.vg247.com/current//2014/11/human_element_nov_14.jpg' },
    //         { id: 2, followed: true, fullName: "Elena", status: 'I am learn React&Redux', location: { city: 'Kiev', country: 'Ukrane' }, photoUrl: 'https://assets.vg247.com/current//2014/11/human_element_nov_14.jpg' },
    //         { id: 3, followed: false, fullName: "Pavel", status: 'I am learn React&Redux', location: { city: 'Minsk', country: 'Belarus' }, photoUrl: 'https://assets.vg247.com/current//2014/11/human_element_nov_14.jpg' },
    //         { id: 4, followed: true, fullName: "Victor", status: 'I am learn React&Redux', location: { city: 'Omsk', country: 'Russia' }, photoUrl: 'https://assets.vg247.com/current//2014/11/human_element_nov_14.jpg' },
    //     ]);
    // }