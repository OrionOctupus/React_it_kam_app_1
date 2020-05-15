const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

let initialState = {
    messagesPost: [
        { id: 1, followed: false, fullName: "Eugene", status: 'I am learn React&Redux', location: { city: 'Moscow', country: 'Russia' } },
        { id: 2, followed: true, fullName: "Elena", status: 'I am learn React&Redux', location: { city: 'Kiev', country: 'Ukrane' } },
        { id: 3, followed: false, fullName: "Pavel", status: 'I am learn React&Redux', location: { city: 'Minsk', country: 'Belarus' } },
        { id: 4, followed: true, fullName: "Victor", status: 'I am learn React&Redux', location: { city: 'Omsk', country: 'Russia' } },
    ],
    newPostText: '',
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
        default:
            return state;

    }
}

export const followAC = () => ({ type: FOLLOW, userId });
export const unfollowAC = () => ({ type: UNFOLLOW, userId });

export default UsersPageReducer;