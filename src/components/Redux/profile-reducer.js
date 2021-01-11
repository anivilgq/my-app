import {profileAPI, usersAPI} from "../../api/api";

const ADD_POST = "ADD-POST";
const SET_USER_PROFILE = "SET_USER_PROFILE";
const SET_STATUS = "SET_STATUS";

let initialState = {
    postsData: [
        {id: 1, message:'Hi', like_counts: 11},
        {id: 2, message:'HRU?', like_counts: 5}
    ],
    profile: null,
    status: "df"
}

const profileReducer = (state = initialState, action) => {
    switch(action.type) {
        case ADD_POST: {
            let newPost = {
                id: 3,
                message: action.newPost,
                like_counts: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost],
            };
        }
        case SET_USER_PROFILE: {
            return {
                ...state,
                profile: action.profile
            };
        }
        case SET_STATUS: {
            return {
                ...state,
                status: action.status
            }
        }
        default:
            return state;
    }

}

export const addPostActionCreator = (newPost) => {
    return {
        type: ADD_POST, newPost

    }
}

export const setUserProfile = (profile) => ({type: SET_USER_PROFILE, profile})
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}

export const setStatus = (status) => ({type: SET_STATUS, status})
export const getStatus = (status) => (dispatch) => {
    profileAPI.getStatus(status).then(response => {
        dispatch(setStatus(response.data));
    })
}

export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
        .then(response => {
            if (response.data.resultCode === 0)
        dispatch(setStatus(status));
    })
}


export default profileReducer;