import * as axios from "axios";


const instance = axios.create({
    withCredentials: true,
    baseURL: `https://social-network.samuraijs.com/api/1.0/`,
    headers: {
        "API-KEY": "4c1cc910-7ff2-4bb8-81ba-00d224a8c9ae"
    }
})

export const usersAPI = {
getUsers (currentPage = 1, pageSize = 10) {
        return instance.get(`users?page=${currentPage}&count=${pageSize}`, {
        }).then(response => response.data);
    },

getProfile (userId) {
        return profileAPI.getProfile(userId);
    },

unfollow (userId) {
        return instance.delete(`follow/${userId}`).then(response => response.data);

    },

follow (userId) {
       return instance.post(`follow/${userId}`).then(response => response.data);

    },
}

export const profileAPI = {

    getProfile (userId) {
        return instance.get(`profile/` + userId);
    },

    getStatus(userId) {
        return instance.get(`profile/status/` + userId);
    },
    updateStatus(status) {
        return instance.put(`profile/status`, {status: status});
    }


}

export const authAPI = {
    me () {
        return instance.get(`auth/me`)
    },
}
