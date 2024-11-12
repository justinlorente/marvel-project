import axios from 'axios';

export const fetchData = ({ url, params, method = 'GET' }) => {
    const paramsInit = {
        apikey: process.env.REACT_APP_PUBLIC_KEY,
    };
    return axios({
        method,
        baseURL: `${process.env.REACT_APP_API_URL}`,
        url: url || '',
        params: {
            ...paramsInit,
            ...params,
        },
    });
};
