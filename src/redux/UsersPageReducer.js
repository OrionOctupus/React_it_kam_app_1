const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';

let initialState = {
    users: [
        // { id: 1, followed: false, fullName: "Eugene", status: 'I am learn React&Redux', location: { city: 'Moscow', country: 'Russia' }, photoUrl: 'https://assets.vg247.com/current//2014/11/human_element_nov_14.jpg' },
        // { id: 2, followed: true, fullName: "Elena", status: 'I am learn React&Redux', location: { city: 'Kiev', country: 'Ukrane' }, photoUrl: 'https://assets.vg247.com/current//2014/11/human_element_nov_14.jpg' },
        // { id: 3, followed: false, fullName: "Pavel", status: 'I am learn React&Redux', location: { city: 'Minsk', country: 'Belarus' }, photoUrl: 'https://assets.vg247.com/current//2014/11/human_element_nov_14.jpg' },
        // { id: 4, followed: true, fullName: "Victor", status: 'I am learn React&Redux', location: { city: 'Omsk', country: 'Russia' }, photoUrl: 'https://assets.vg247.com/current//2014/11/human_element_nov_14.jpg' },
    ]
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
            return { ...state, users: [...state.users, ...action.users] }
        }

        default:
            return state;

    }
}

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({ type: UNFOLLOW, userId });
export const setUsersAC = (users) => ({ type: SET_USERS, users });

export default usersPageReducer;