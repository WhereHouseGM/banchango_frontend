import axios from 'axios';

const api = axios.create({
  baseURL: 'http://api.banchango.shop:8080/v2/',
});

export const userApi = {
  signIn: (body) => api.post('users/sign-in', body),
  signUp: (body) => api.post('users/sign-up', body),
};
