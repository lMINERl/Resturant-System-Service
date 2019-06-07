import axios from 'axios';
import baseURL from '../db/database';

export const promotionAPI = {
    getAll() {
        return axios.get(`${baseURL}/promotion/`).then(res => res.data);
    },
    getById(id) {
        return axios.get(`${baseURL}/promotion/${id}`).then(res => res.data);
    },
    add(item) {
        return axios.post(`${baseURL}/promotion/`, item).then(res => res.data);
    },
    update(id, item) {
        return axios.post(`${baseURL}/promotion/${id}`, item).then(res => res.data);
    },
    delete(id) {
        return axios.delete(`${baseURL}/promotion/${id}`).then(res => res.data);
    }
}