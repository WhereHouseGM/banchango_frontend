import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.banchango.shop/v2/',
});

export const userApi = {
  signIn: (body) => api.post('users/sign-in', body),
  signUp: (body) => api.post('users/sign-up', body),
  requestEmail: (body) => api.post('users/password-lost', body),
};

export const warehouseApi = {
  itemsByType: (type) => api.get(`warehouses/agency/${type}`),
  register: (body, token) =>
    api.post('warehouses/agency', body, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }),
  houseDetail: (id) => api.get(`warehouses/${id}`),
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
