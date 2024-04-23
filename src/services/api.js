import axios from 'axios';

const api = axios.create({
  baseURL: 'https://reqres.in/api/',
});

export const login = (email, password) => {
  return api.post('login', { email, password });
};

export const getUsers = () => {
  return api.get('users');
};

export const getUserById = (id) => {
  return api.get(`users/${id}`);
};

export const updateUser = (id, userData) => {
  return api.put(`users/${id}`, userData);
};

export const deleteUser = (id) => {
  return api.delete(`users/${id}`);
};
