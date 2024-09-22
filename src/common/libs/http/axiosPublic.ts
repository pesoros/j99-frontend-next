import axios from 'axios';

export const axiosPublic = axios.create({
  baseURL: '',
  headers: {
    'Content-Type': 'application/json',
  },
});
