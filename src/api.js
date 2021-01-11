import axios from 'axios';

const api = axios.create({
  baseURL: 'https://dev-api.banchangohub.com/v3/',
});

export const userApi = {
  signIn: (body) => api.post('users/sign-in', body),
  signUp: (body) => api.post('users/sign-up', body),
  requestEmail: (body) => api.patch('users/password-lost', body),
  getUserInfo: (userId, token) =>
    api.get(`users/${userId}`, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  setUserInfo: (userId, body, token) =>
    api.patch(`users/${userId}`, body, {
      headers: {
        'Content-type': 'application/json',
        Authorization: `Bearer ${token}`,
      },
    }),
};

export const warehouseApi = {
  getByMainItemTypes: (type, page, size) =>
    api.get('warehouses', {
      params: {
        mainItemTypes: `${type === null ? 'CLOTH' : `${type}`}`,
        page: `${page}`,
        size: `${size}`,
      },
    }),
  register: (body, token) =>
    api.post('warehouses', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  getWarehouseInfo: (id) => api.get(`warehouses/${id}`),
};

export const imageApi = {
  uploadMainImage: (warehouseId, formData, token) =>
    api.post(`images/upload/main/${warehouseId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }),
  uploadExtraImage: (warehouseId, formData, token) =>
    api.post(`images/upload/${warehouseId}`, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
        Authorization: `Bearer ${token}`,
      },
    }),
};
