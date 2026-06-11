import axios from 'axios';

const axiosApi = axios.create({
    baseURL: 'https://content-7fa19-default-rtdb.europe-west1.firebasedatabase.app/Page'
});

export default axiosApi;