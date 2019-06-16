import axios from 'axios';
import baseURL from '../db/database';

export const foodAPI = {
    getAll() {
        return axios.get(`${baseURL}/food/`).then(res => res.data);
    },
    getById(id) {
        return axios.get(`${baseURL}/food/${id}`).then(res => res.data);
    },
    add(item) {
        return axios.post(`${baseURL}/food/`, item).then(res => res.data);
    },
    update(id, item) {
        return axios.post(`${baseURL}/food/${id}`, item).then(res => res.data);
    },
    delete(id) {
        return axios.delete(`${baseURL}/food/${id}`).then(res => res.data);
    },
    getRestaurantMenu(restaurantId) {
        return axios.get(`${baseURL}/food/restaurant/5cf92b292a79451758f83c1c`).then(res => res.data);
    }
}