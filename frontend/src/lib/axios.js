//import axios from "axios";

// in production, there's no localhost so we have to make this dynamic
//const BASE_URL = import.meta.env.MODE === "development" ? "http://localhost:5001/api" : "/api";

//const api = axios.create({
//  baseURL: BASE_URL,
//});

//export default api;

import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: import.meta.env.PROD 
    ? '/api'  // In production, use relative path
    : 'http://localhost:5001/api'  // In dev, use full URL
});

export default axiosInstance;
