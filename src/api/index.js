import axios from 'axios';

const baseUrl = `https://wallpass4k.herokuapp.com/`;

const api = axios.create({baseURL: baseUrl});

export const getAllUsers = () => api.get(`/api/user`);
