import axios from 'axios';

const api = axios.create({
  baseURL: 'localhost:8080/v2/',
});

export const userApi = {
  signIn: (body) => api.post('users/sign-in', body),
  signUp: (body) => api.post('users/sign-up', body),
};

export const warehouseApi = {
  itemsByType: (type) => api.get(`warehouses/agency/${type}`),
  register: (body, config) => api.post('warehouses/agency', body, config),
};
