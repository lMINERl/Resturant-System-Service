import axios from 'axios';
import baseURL from '../db/database';
// import accessToken from '../db/local-storage';

// const instance = axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL || `http://localhost:3000`,
//     headers: { Authorization: localStorage.getItem('token') }
// });

export const userAPI = {
    register(user) {
        return axios.post(`${baseURL}/users/register`, user).then(res => res.data);
    }
}
//let baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:5030";
export const apiLogin = request_data => {
    // return axios.post(`/api/auth`,request_data);
    return axios.post(`${baseURL}/users/authentication`, request_data);
}
export const apiSignUp = request_data=>{
    // return axios.post(`/api/register`,request_data);
    return axios.post(`${baseURL}/users/register`,request_data);
}
export const getProfile = () => {
    // return axios.get(`/api/me`);
    return axios.get(`${baseURL}/users/profile`);
}