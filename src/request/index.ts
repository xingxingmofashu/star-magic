import axios, { AxiosResponse } from 'axios'

const instance = axios.create({
    baseURL: '/api',
    withCredentials: true,
    headers: {
        Accept: 'application/json'
    }
});
axios.interceptors.request.use((config) => {
    return config;
}, (error) => {
    return Promise.reject(error);
});
axios.interceptors.response.use((response)=> {
    return response;
}, (error) => {
    return Promise.reject(error);
});

export default instance;