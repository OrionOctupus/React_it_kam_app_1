const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE';
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT';
const TOGGLE_IS_FETCHING = "TOGGLE_IS_FETCHING";
const TOGGLE_IS_FOLLOWING_PROGRESS = "TOGGLE_IS_FOLLOWING_PROGRESS";

let initialState = {
    users: [
        // { id: 1, followed: false, fullName: "Eugene", status: 'I am learn React&Redux', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://assets.vg247.com/current//2014/11/human_element_nov_14.jpg' },
        // { id: 2, followed: true, fullName: "Elena", status: 'I am learn React&Redux', location: { city: 'Kiev', country: 'Ukrane' }, photoUrl: 'https://assets.vg247.com/current//2014/11/human_element_nov_14.jpg' },
        // { id: 3, followed: false, fullName: "Pavel", status: 'I am learn React&Redux', location: { city: 'Minsk', country: 'Belarus' }, photoUrl: 'https://assets.vg247.com/current//2014/11/human_element_nov_14.jpg' },
        // { id: 4, followed: true, fullName: "Victor", status: 'I am learn React&Redux', location: { city: 'Omsk', country: 'Russia' }, photoUrl: 'https://assets.vg247.com/current//2014/11/human_element_nov_14.jpg' },
    ],
    pageSize: 15,
    totalUsersCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
};

const usersPageReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: true }
                    }
                    return u;
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return { ...u, followed: false }
                    }
                    return u;
                })
            }
        case SET_USERS: {
            return { ...state, users: action.users }
        }
        case SET_CURRENT_PAGE: {
            return { ...state, currentPage: action.currentPage }
        }
        case SET_TOTAL_USERS_COUNT: {
            return { ...state, totalUsersCount: action.totalCount }
        } case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.isFetching }
        }
        case TOGGLE_IS_FOLLOWING_PROGRESS: {
            return {
                ...state,
                followingInProgress: action.inProgress
                    ? [...state.followingInProgress, action.userId]
                    : state.followingInProgress.filter(id => id !== action.userId)
            }
        }
        default:
            return state;
    }
}

export const follow = (userId) => ({ type: FOLLOW, userId });
export const unfollow = (userId) => ({ type: UNFOLLOW, userId });
export const setUsers = (users) => ({ type: SET_USERS, users });
export const setCurrentPage = (currentPage) => ({ type: SET_CURRENT_PAGE, currentPage });
export const setTotalUsersCount = (totalUsersCount) => ({ type: SET_TOTAL_USERS_COUNT, totalCount: totalUsersCount });
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (inProgress, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, inProgress, userId });
export default usersPageReducer;