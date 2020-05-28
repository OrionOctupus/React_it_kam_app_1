import * as axios from "axios";

const instanse = axios.create({
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': 'KEY',
    }
});

export const userAPI = {
    getUsers(currentPage = 1, pageSize = 10) {
        return instanse.get(`users?page=${currentPage}&count=${pageSize}`)
            .then(response => response.data);
    },

    setUnfolower(id) {
        return instanse.delete(`follow/` + id);
    },

    setFolower(id) {
        return instanse.post(`follow/` + id);
    },
    getAuthMe() {
        return instanse.get('auth/me');
    }
}


// axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {
//             withCredentials: true
//         })

// ПРИМЕР страрого вида запроса на follow
// axios.post(`https://social-network.samuraijs.com/api/1.0/follow/` + u.id, {}, {
//     withCredentials: true,
//     headers: {
//         'API-KEY': '*enter key*',
//     }
// })