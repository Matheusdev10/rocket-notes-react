import axios from 'axios';

export const api = axios.create({
  baseURL: 'https://rocketnotes-api-r5jm.onrender.com/',
});
