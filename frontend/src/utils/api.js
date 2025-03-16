import axios from 'axios';

const baseURL = process.env.NODE_ENV === 'production'
    ? 'http://your-production-domain.com/api'
    : 'http://localhost:8000';

const api = axios.create({
    baseURL,
    timeout: 10000,
    headers: {
        'Content-Type': 'application/json'
    }
});

api.interceptors.request.use(config => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

api.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        if (error.response) {
            return Promise.reject({
                response: {
                    status: error.response.status,
                    data: error.response.data
                }
            });
        }
        return Promise.reject({ message: 'Network error, please check your connection' });
    }
);

export default api;
