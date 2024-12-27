// frontend/src/config/axios.jsx
const axios = require('axios');

const baseURL = process.env.NODE_ENV === 'PROD'
  ? '/api' // Production: same-origin requests
  : 'http://localhost:3001'; // Development

const api = axios.create({ baseURL: baseURL });

export default api;