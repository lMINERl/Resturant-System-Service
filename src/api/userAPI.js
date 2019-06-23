import axios from "axios";
import baseURL from "../db/database";
// import accessToken from '../db/local-storage';

// const instance = axios.create({
//     baseURL: process.env.REACT_APP_BASE_URL || `http://localhost:3000`,
//     headers: { Authorization: localStorage.getItem('token') }
// });

export const userAPI = {
  register(request_data) {
    return axios.post(`${baseURL}/users/register`, request_data);
  },
  login(request_data) {
    return axios.post(`${baseURL}/users/authentication`, request_data);
  },
  check(token) {
    return axios.get(`${baseURL}/users/`, {
      headers: { authorization: token }
    });
  },
  getProfile() {
    return axios.get(`${baseURL}/users/profile`);
  },
  editProfile(user, token) {
    debugger;
    return axios.put(`${baseURL}/users/profile/edit`, { body: user, headers:{authorization:token} });
  }
};
//let baseURL = process.env.REACT_APP_BASE_URL || "http://localhost:5030";
