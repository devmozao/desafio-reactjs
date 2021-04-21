import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.github.com/',
    responseType: 'json'
});

export default api;