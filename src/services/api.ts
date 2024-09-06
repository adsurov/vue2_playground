import axios from 'axios';

export const API_KEY = process.env.VUE_APP_API_KEY;// See https://cli.vuejs.org/guide/mode-and-env.html#environment-variables
export const BASE_URL = 'http://api.weatherapi.com/v1';

if (!API_KEY) {
  throw new Error('Please provide API key')
}

export const axiosInstance = axios.create({
  baseURL: BASE_URL,
  params: {
    key: API_KEY,
  },
});

axiosInstance.defaults.params = {}
axiosInstance.defaults.params['key'] = API_KEY
