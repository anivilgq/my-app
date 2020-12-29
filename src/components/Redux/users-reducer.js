const FOLLOW = "FOLLOW";
const UNFOLLOW = "UNFOLLOW";
const SET_USERS = "SET_USERS";

let initialState = {
    users: [
        {id: 1, followed: false, fullName: 'Dmitry', status: 'Blabla', location: {city: 'SPB', country: 'Rus'}},
        {id: 2, followed: false, fullName: 'Alex', status: 'Low Battery', location: {city: 'Moscow', country: 'Rus'}},
        {id: 3, followed: true, fullName: 'Masha', status: 'Hop hey lalaley', location: {city: 'Ekb', country: 'Rus'}},
        {
            id: 4,
            followed: false,
            fullName: 'Petr',
            status: 'Avada kedavra',
            location: {city: 'Novosibirsk', country: 'Rus'}
        },
    ],
    newPostText: ''
}

const usersReducer = (state = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: true}
                    }
                    return u;
                })
            }


        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.userId) {
                        return {...u, followed: false}
                    }
                    return u;
                })
            }

        case SET_USERS: {
            return {...state, users: [...state.users, ...action.users]}
        }
        default:
            return state;


    }
}

export const followAC = (userId) => ({type: FOLLOW, userId})
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId})
export const setUserAC = (userId) => ({type: SET_USERS, users})


export default usersReducer;