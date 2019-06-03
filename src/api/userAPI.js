import axios from 'axios';
import baseURL from '../db/database';
import accessToken from '../db/local-storage';

// const instance = axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL || `http://localhost:3000`,
//     headers: { Authorization: localStorage.getItem('token') }
// });

const userAPI = {
    register(user) {
        return axios.post(`${baseURL}/users/register`, user).then(res => res.data);
    },
    login(data) {
        return axios.post(`${baseURL}/users/login`, data).then(res => res.data);
    },
    check(token, shouldCheck) {
        if (shouldCheck) {
            return axios.get(`${baseURL}/users/`, { headers: { authorization: token } });
        } else {
            return new Promise(function (res, rej) { res(accessToken.authorization()) });
        }
    }
}

export default userAPI;