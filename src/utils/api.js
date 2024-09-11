
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://localhost:4011/',
});

export default api;