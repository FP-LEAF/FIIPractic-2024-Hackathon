import axios from 'axios';
import config from './config/config';

const cancelToken = axios.CancelToken.source();

const instance = axios.create({
    baseURL: config.backendApi,
});


instance.interceptors.request.use(request => {

    if (request.url !== "user/login" && !localStorage.getItem("TOKEN")) {

        throw new axios.cancel("NO_TOKEN")

        return window.location.replace("/login");
    }

    request.headers['x-access-token'] = localStorage.getItem("TOKEN");

    return request;
}, error => {
    return Promise.reject(error);
})


instance.interceptors.response.use(response => {
    return response;
}, error => {
    const {
        key
    } = error.response.data;

    if (key === "TOKEN_EXPIRED") {
        return window.location.replace("#/login")
    }

    return Promise.reject(error);
})

export default instance;