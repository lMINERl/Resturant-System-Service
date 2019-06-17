import axios from "axios";
import baseURL from "../db/database";

export const restaurantAPI = {
  getAll() {
    return axios.get(`${baseURL}/restaurant/`);
  },
  getById(id) {
    return axios.get(`${baseURL}/restaurant/${id}`);
  },
  add(item) {
    return axios.post(`${baseURL}/restaurant/`, item);
  },
  update(id, item) {
    return axios.post(`${baseURL}/restaurant/${id}`, item);
  },
  delete(id) {
    return axios.delete(`${baseURL}/restaurant/${id}`);
  }
};
