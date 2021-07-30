import axios from 'axios';
import * as AppConstant from '../../Components/AppConstant';

const instance = axios.create({
    baseURL: AppConstant.BASE_URL
});

// Add a request interceptor
instance.interceptors.request.use(config => {
    // Insert authorization token on request call
    // const jwt_token = AppConstant.JWT_TOKEN;//localStorage.getItem('auth_token');
    // if( jwt_token ) config.headers['Authorization'] = 'Bearer '+jwt_token;
    // console.log(config);
    if (config.showLoader && config.showLoader === true) {
        document.body.classList.add('loading-indicator');
    }

    return config;
}, error => {
    return Promise.reject(error);
});

// Add a response interceptor
instance.interceptors.response.use(response => {
    document.body.classList.remove('loading-indicator');
    return response;
}, error => {
    document.body.classList.remove('loading-indicator');
    return Promise.reject(error.response);
});

export default instance;