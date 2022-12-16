import axios from 'axios';
const baseURL = 'https://bitcoinfees.earn.com/api/v1/';

/**
 * axiosInstance
 * instance of BTC fees API
 */
export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use(
  // Any status code that lie within the range of 2xx cause this function to trigger
  response => {
    return response;
  },
  _error => {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    const { response } = _error || {};
    return Promise.reject(response?.data || _error);
  },
);
