import axios from 'axios';

const apiClient = axios.create({
  baseURL: 'https://tu-api.com',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
});

export default {
  getNews() {
    return apiClient.get('/news');
  },
  getEvents() {
    return apiClient.get('/events');
  },
};
