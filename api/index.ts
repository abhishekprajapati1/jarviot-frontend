import axios from 'axios';

const baseURL = 'http://localhost:4000/';


const api = axios.create({
    withCredentials: true,
    baseURL,
    headers: {
        "Content-Type": "multipart/formdata",
    },
});

export default api;