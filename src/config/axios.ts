import axios, { AxiosInstance } from 'axios';

const axiosClient: AxiosInstance = axios.create({
  baseURL: 'https://hn.algolia.com/api/v1',
  headers: {
    'Content-Type': 'application/json',
  },
});

export default axiosClient;
