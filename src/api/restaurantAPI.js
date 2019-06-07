import axios from 'axios';
import baseURL from '../db/database';

export const restaurantAPI = {
    getAll() {
        return axios.get(`${baseURL}/restaurant/`).then(res => res.data);
    },
    getById(id) {
        return axios.get(`${baseURL}/restaurant/${id}`).then(res => res.data);
    },
    add(item) {
        return axios.post(`${baseURL}/restaurant/`, item).then(res => res.data);
    },
    update(id, item) {
        return axios.post(`${baseURL}/restaurant/${id}`, item).then(res => res.data);
    },
    delete(id) {
        return axios.delete(`${baseURL}/restaurant/${id}`).then(res => res.data);
    }
}