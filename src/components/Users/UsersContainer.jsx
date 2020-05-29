import React from 'react';
import Users from './Users';
import { connect } from 'react-redux';
import { follow, unfollow, setUsers, setCurrentPage, setTotalUsersCount, toggleIsFetching, toggleFollowingProgress, getUsersThunkCreator } from '../../redux/usersPageReducer';
import Preloader from '../common/Preloader/Preloader';
import { userAPI } from '../../api/api';

class UsersContainer extends React.Component {
    // constructor(props) {
    //     super(props);
    // }

    componentDidMount() {

        // заместо кода ниже, мы вызываем эту функцию

        this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize);

        // этот блок кода переносим в userPageReduser в созданную thunk = getUsers()
        // this.props.toggleIsFetching(true);
        // userAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
        //     this.props.toggleIsFetching(false);
        //     this.props.setUsers(data.items);
        //     this.props.setTotalUsersCount(data.totalCount);
        // })
    }

    onPageChanged = (pageNumber) => {
        // заменяем все на thunk
        this.props.setCurrentPage(pageNumber);
        this.props.getUsersThunkCreator(pageNumber, this.props.pageSize);
    }

    // onPageChanged = (pageNumber) => {
    //     this.props.setCurrentPage(pageNumber);
    //     this.props.toggleIsFetching(true);
    //     userAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
    //         this.props.toggleIsFetching(false);
    //         this.props.setUsers(data.items);
    //     })
    // }

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                follow={this.props.follow}
                unfollow={this.props.unfollow}
                // не нужно т.к появились thunk
                // toggleFollowingProgress={this.props.toggleFollowingProgress}
                followingInProgress={this.props.followingInProgress}
            />
        </>
    }
}

function mapStateToProps(state) {
    return {
        users: state.usersPage.users,
        pageSize: state.usersPage.pageSize,
        totalUsersCount: state.usersPage.totalUsersCount,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        followingInProgress: state.usersPage.followingInProgress
    }
};

// СТАЛО после введения thunk 
export default connect(mapStateToProps,
    {
        follow, unfollow, setCurrentPage,
        toggleFollowingProgress,
        getUsersThunkCreator,
    }
)(UsersContainer);

// БЫЛО до введения thunk

// export default connect(mapStateToProps,
//     {
//         follow, unfollow, setUsers,
//         setCurrentPage, setTotalUsersCount, toggleIsFetching,
//         toggleFollowingProgress, getUsersThunkCreator,
//     }
// )(UsersContainer);

// сокращаем функцию  до короткой записи для передачи в connect()();
// function mapDispatchToProps(dispatch) {
//     return {
//         follow: (userId) => {
//             dispatch(followAC(userId));
//         },
//         unfollow: (userId) => {
//             dispatch(unfollowAC(userId));
//         },
//         setUsers: (users) => {
//             dispatch(setUsersAC(users));
//         },
//         setCurrentPage: (pageNumber) => {
//             dispatch(setCurrentPageAC(pageNumber));
//         },
//         setTotalUsersCount: (totalCount) => {
//             dispatch(setTotalUsersCountAC(totalCount));
//         },
//         toggleIsFetching: (isFetching) => {
//             dispatch(toggleIsFetchingAC(isFetching));
//         }

//     }
// }