import axios from 'axios';
let baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:5030";
export const apiLogin = request_data=>{
    // return axios.post(`/api/auth`,request_data);
    return axios.post(`${baseURL}/api/auth`,request_data);
}
export const getProfile = ()=>{
    // return axios.get(`/api/me`);
    return axios.get(`${baseURL}/api/me`);
}