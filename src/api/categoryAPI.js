import axios from 'axios';
import baseURL from '../db/database';

export const categoryAPI = {
    getAll() {
        return axios.get(`${baseURL}/category/`);
    },
    getById(id) {
        return axios.get(`${baseURL}/category/${id}`);
    },
    add(item) {
        return axios.post(`${baseURL}/category/`, item);
    },
    update(id, item) {
        return axios.post(`${baseURL}/category/${id}`, item);
    },
    delete(id) {
        return axios.delete(`${baseURL}/category/${id}`);
    }
   
}