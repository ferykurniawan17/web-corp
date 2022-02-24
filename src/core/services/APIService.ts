import axios from 'axios';

const api = axios.create({
    headers: {},
});

export const APIClean = axios.create({
    headers: {},
});

export const APIUpload = axios.create({
    headers: {
        'content-type': 'multipart/form-data',
    },
});

export default api;
